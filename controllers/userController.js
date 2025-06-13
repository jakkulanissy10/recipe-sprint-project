const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const user = await User.register(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await User.login(req.body.email, req.body.password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await User.getProfile(req.userId);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
