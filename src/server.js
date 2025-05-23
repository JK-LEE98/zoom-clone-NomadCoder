import express from "express";
import livereloadMiddleware from "connect-livereload";
import livereload from "livereload";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const handleListen = () => console.log("Listning on http://localhost:3000");
app.listen(3000, handleListen);

const liveServer = livereload.createServer({
    exts: ["js", "pug", "css"],
    delay: 1000,
});
liveServer.watch(__dirname);

app.use(livereloadMiddleware());