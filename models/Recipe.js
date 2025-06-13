const db = require('../db/database');

class Recipe {
  async create(data) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO recipes (title, description, ingredients, instructions, created_by) VALUES (?, ?, ?, ?, ?)`,
        [data.title, data.description, data.ingredients, data.instructions, data.created_by],
        function (err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, ...data });
        }
      );
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM recipes`, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM recipes WHERE id = ?`, [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  async update(id, data) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE recipes SET title = ?, description = ?, ingredients = ?, instructions = ? WHERE id = ?`,
        [data.title, data.description, data.ingredients, data.instructions, id],
        function (err) {
          if (err) reject(err);
          else resolve({ updated: this.changes > 0 });
        }
      );
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM recipes WHERE id = ?`, [id], function (err) {
        if (err) reject(err);
        else resolve({ deleted: this.changes > 0 });
      });
    });
  }
}

module.exports = new Recipe();
