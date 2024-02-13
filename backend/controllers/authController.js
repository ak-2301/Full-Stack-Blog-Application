
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register User
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      return res.send({ message: "Email already exist " });
    }

    //password hashed
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json(newUser);
  } catch (error) {
    //console.log(err);
    return res.status(400).send({
      message: "Registration failed",
      success: false,
    });
  }
};

//LogIn User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check existing user or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not exist" });
    }

    //password matching
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).send({ message: "Wrong credentials!" });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "3d",
    });

    //set token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      path: "/",
    });

    return res.status(200).send({
      user,
      token,
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//logout user
const logOutUser = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ message: "Logout Successfully", success: true });
  } catch (error) {
    return res.status(500).send({ message: "Error LogOut" });
  }
};

module.exports = { registerUser, loginUser, logOutUser };
