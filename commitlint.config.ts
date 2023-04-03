import type {UserConfig} from "@commitlint/types";
import {RuleConfigSeverity} from "@commitlint/types";
import fs from "fs";
import path from "path";

const scopes = makeScopes("./src", {
  exclude: [".DS_Store"],
});

// https://commitlint.js.org/#/reference-configuration
const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [RuleConfigSeverity.Error, "always", scopes],
  },
};

export default Configuration;

function* walkSync(
  dir: string,
): Generator<Generator<any | string, void, any> | string, void, unknown> {
  const files = fs.readdirSync(dir, {withFileTypes: true});

  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

function makeScopes(
  dir: string,
  options: {
    include?: string[];
    exclude?: string[];
    replace?: Record<string, string>;
  } = {},
) {
  let filenames: string[] = options.include || [];

  for (const filePath of walkSync(dir)) {
    let filename;

    if (typeof filePath === "string") {
      const {base, name} = path.parse(filePath);

      if (options.exclude && !options.exclude.includes(base)) {
        filename = name;
      }

      if (options.replace && options.replace[base]) {
        filename = options.replace[base];
      }
    }

    if (typeof filename === "string") {
      filenames.push(filename);
    }
  }

  return filenames;
}
