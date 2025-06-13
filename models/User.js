const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

class User {
  async register({ name, email, password }) {
    const hashed = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, hashed],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, name, email });
        }
      );
    });
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err) return reject(err);
        if (!user) return reject(new Error("User not found"));
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return reject(new Error("Invalid credentials"));

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        resolve({ user: { id: user.id, name: user.name, email: user.email }, token });
      });
    });
  }

  async getProfile(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT id, name, email FROM users WHERE id = ?`, [id], (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });
  }
}

module.exports = new User();
