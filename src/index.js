const express = require("express");

require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const bcrypt = require("bcryptjs");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const myFunction = async () => {
  const password = "ahmed123";
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(password, hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log(isMatch);
};

myFunction();
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
