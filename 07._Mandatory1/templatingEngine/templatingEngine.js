import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path, "utf-8");
}

export function constructPage(page, options = {}) {
    const header = readPage("public/components/header/header.html");
    const footer = readPage("public/components/footer/footer.html");

    return header.replace("titel-placeholder", options.title) + page + footer;
}
