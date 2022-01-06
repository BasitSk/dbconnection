const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const { selectUser, addUser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/add-users", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "user added" });
});

app.listen(5000, () => console.log("server started"));
