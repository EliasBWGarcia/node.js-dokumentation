import { constructPage, readPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/frontpage.html");
const javascript = readPage("public/pages/javascript/javascript.html");
const nodeExpress = readPage("public/pages/node-express/node-express.html");
const expressHttpUrls = readPage("public/pages/express-http-urls/express-http-urls.html");
const restApi = readPage("public/pages/rest-api/rest-api.html");
const frontend = readPage("public/pages/frontend/frontend.html");
const modulesStaticFiles = readPage("public/pages/modules-static-files/modules-static-files.html");
const ssr = readPage("public/pages/ssr/ssr.html");

export const frontpagePage = constructPage(frontpage, {
    title: "Forside"
});

export const javascriptPage = constructPage(javascript, {
    title: "JavaScript og datatyper"
});

export const nodeExpressPage = constructPage(nodeExpress, {
    title: "Node.js og npm"
});

export const expressHttpUrlsPage = constructPage(expressHttpUrls, {
    title: "Express, HTTP og URLs"
});

export const restApiPage = constructPage(restApi, {
    title: "REST API og CRUD"
});

export const frontendPage = constructPage(frontend, {
    title: "Fetch og XSS"
});

export const modulesStaticFilesPage = constructPage(modulesStaticFiles, {
    title: "Konfiguration og filer"
});

export const ssrPage = constructPage(ssr, {
    title: "SSR"
});
