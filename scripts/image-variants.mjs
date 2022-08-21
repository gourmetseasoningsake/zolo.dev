import { readFileSync, readdirSync } from "fs"
import path from "path"
import yaml from "yaml"
import sharp from "sharp"


const [ configPathArg ] = process.argv.splice(2)


if (!configPathArg) {
  console.error("missing argument: path to config file")
  process.exit(1)
}


;(async (relativeConfigPath) => {
  let config = {}

  try {
    let configPath = absolutePath(relativeConfigPath)
    let configContent = readFileSync(configPath, "utf8")
    config = yaml.parse(configContent)

  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  let source = []

  if (typeof config.source === "string") {
    let sourcePath = absolutePath(config.source)
    source = readdirSync(sourcePath, { encoding: "utf8" })
  } else if (Array.isArray(config.source) && config.source.every(x => typeof x === "string")) {
    source = config.source
  } else {
    console.error("malformed yaml: source must be string or string[]")
    process.exit(1)
  }

  source.forEach((relativePath) => {
    let { ext: extname, name: filename } = path.parse(relativePath)
    let pathname = absolutePath(path.join(config.source, relativePath))
    let image = sharp(pathname)

    config.sizes.forEach(size => image
      .resize({
        width: size,
        height: size,
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toBuffer()
      .then(buf => sharp(buf))
      .then(variant => variant
        .metadata()
        .then(({ width, height }) => {
          let out = path.join(
            absolutePath(config.dest),
            `${filename}-${config.suffix}${size}${extname}`
          )

          variant
            .composite([{
              input: borderRadius({ width, height, borderRadius: config.borderRadius }),
              blend: "dest-in"
            }])
            .toFile(out)
        })
      )
    )
  })
})(configPathArg)


function borderRadius ({ width, height, borderRadius }) {
  return Buffer.from(`
    <svg><rect 
      x="0" y="0" 
      width="${width}" height="${height}" 
      rx="${borderRadius}" ry="${borderRadius}"/>
    </svg>
  `)
}


function absolutePath (pathname) {
  return new URL(pathname, import.meta.url).pathname
}