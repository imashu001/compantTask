const Admin = require("../model/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { userName, password } = req.body.payload;
  const admin = await Admin.findOne({ userName });
  if (admin) {
    return res.status(422).send({ error: "User already exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = await Admin.create({
    userName,
    password: hashedPassword,
  });

  res.status(201).json(newAdmin);
};

const login = async (req, res) => {
  const { userName, password } = req.body.payload;
  const admin = await Admin.findOne({ userName });
  if (!admin) {
    return res.status(400).send("UserName Does't Exists");
  }

  const passwordMatched = await bcrypt.compare(password, admin.password);

  //password verification
  if (!passwordMatched) {
    return res.status(401).send("ASCESS DENIED !!`");
  } else {
    const token = jwt.sign({ _id: admin._id }, "madara_uchiha");
    // res.header("auth-token", token).send(token);
    return res.status(201).send(token);
  }
};

module.exports = {
  login,
  signup,
};
