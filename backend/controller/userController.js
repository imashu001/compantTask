const User = require("../model/users");

const addUser = async (req, res) => {
  const { name, companyName, gender, dateofbirth } = req.body;
  try {
    const user = await User.create({
      name,
      companyName,
      gender,
      dateofbirth,
    });

    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ err: "Bad request" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    await User.findByIdAndDelete(id);

    res.send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).send({ err: "Bad request" });
  }
};

const editUser = async (req, res) => {
  const { _id, name, companyName, gender, dateofbirth } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id },
      {
        name,
        companyName,
        gender,
        dateofbirth,
      },
      {
        new: true,
      }
    );
    const newList = await User.find();
    res.send(newList);
  } catch (err) {
    res.status(400).send({ err: "Bad request" });
  }
};

const fetchUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (error) {}
};

module.exports = {
  addUser,
  editUser,
  deleteUser,
  fetchUser,
};
