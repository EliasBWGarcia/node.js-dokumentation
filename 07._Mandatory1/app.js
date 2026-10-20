import express from "express";
import { frontpagePage, javascriptPage, nodeExpressPage, expressHttpUrlsPage, restApiPage, frontendPage, modulesStaticFilesPage, ssrPage } from "./templatingEngine/pages.js";

const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/javascript", (req, res) => {
    res.send(javascriptPage);
});

app.get("/node-express", (req, res) => {
    res.send(nodeExpressPage);
});

app.get("/express-http-urls", (req, res) => {
    res.send(expressHttpUrlsPage);
});

app.get("/rest-api", (req, res) => {
    res.send(restApiPage);
});

app.get("/frontend", (req, res) => {
    res.send(frontendPage);
});

app.get("/modules-static-files", (req, res) => {
    res.send(modulesStaticFilesPage);
});

app.get("/ssr", (req, res) => {
    res.send(ssrPage);
});

// Vercel invokes the exported Express app as a serverless function.
// Keep a normal listener when the app is run locally with `npm start`.
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("Server is running on port", PORT);
    });
}

export default app;
