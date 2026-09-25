import { readFileSync } from "node:fs";
const customArgs = process.argv.slice(2)
console.log(customArgs)
console.log(`Custom Args Size : ${customArgs.length}`)
console.log(`Args : ${customArgs.join(", ")}`)


const filePath = customArgs.at(-1)

if(filePath){
    try {
        const content = readFileSync(filePath,"utf-8");
        console.log(content.split("\n").slice(0,3).join("\n"))
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(`Cannot read file path: ${message}`)
    }
}