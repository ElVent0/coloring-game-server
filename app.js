const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const contactsHandler = require("./routes/api/contacts");
const app = express();
const Logger = app.get("env") === "development" ? "dev" : "short";
const { getAllAuto } = require("./controlers");

// WebSocket --------------------------------------------------------------

// eslint-disable-next-line node/no-new-require, new-cap
const ws = new require("ws");

const wsServer = new ws.Server({ port: 5000 });

wsServer.on("connection", async (socket) => {
  const data = await getAllAuto();
  const result = await JSON.stringify(data);
  socket.send(result);
});

// ------------------------------------------------------------------------

app.use(logger(Logger));
app.use(cors());
app.use(express.json());

app.use("/api/table", contactsHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
