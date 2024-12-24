const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/auth/userModel");

const registerUser = async (req, res) => {
  try {
    // Extract user details from request body
    const {username, password} = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({username});
    if (existingUser) {
      return res.status(400).json({message: "Username already exists"});
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({message: "User registered successfully"});
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({message: "Internal server error"});
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const {username, password} = req.body;

    // Find user by username
    const user = await User.findOne({username});
    if (!user) {
      return res.status(404).json({message: "User not found"});
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({message: "Invalid credentials"});
    }

    // Generate JWT token
    const token = jwt.sign(
      {userId: user._id, username: user.username, role: user.role},
      process.env.JWT_SECRET,
      {expiresIn: "1h"}
    );

    // save the token in the cookie
    res.cookie("jwt", token, {
      httpOnlu: true,
      maxAge: 60 * 60 * 1000, //1 hour
    });
    res.json({token});
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({message: "Internal server error"});
  }
};

// Logout user (optional, as JWT tokens are stateless)
const logoutUser = async (req, res) => {
  try {
    // implement logout functionality here, but as JWT tokens are stateless,
    // there's no need to explicitly log out. Clients can simply stop sending the token.
    // save the token in the cookie
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({message: "Logout successful"});
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({message: "Internal server error"});
  }
};

module.exports = {registerUser, loginUser, logoutUser};
