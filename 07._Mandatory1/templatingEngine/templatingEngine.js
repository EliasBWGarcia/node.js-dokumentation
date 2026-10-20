import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const templatingDirectory = path.dirname(fileURLToPath(import.meta.url));
const appDirectory = path.resolve(templatingDirectory, "..");

export function readPage(filePath) {
    return fs.readFileSync(path.join(appDirectory, filePath), "utf-8");
}

export function constructPage(page, options = {}) {
    const header = readPage("public/components/header/header.html");
    const footer = readPage("public/components/footer/footer.html");

    return header.replace("titel-placeholder", options.title) + page + footer;
}
