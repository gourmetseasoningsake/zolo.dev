import { deleteAsync } from "del"

const deleted = await deleteAsync(['dist/**/*', '!dist/.git', '!dist/.gitignore'])

console.log("deleted folders and files:")
console.log(deleted.join("\n"))