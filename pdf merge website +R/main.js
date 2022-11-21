const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const { mergepdf } = require("./merge");
const port = 3000;

const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  let a = await mergepdf(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${a}.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
