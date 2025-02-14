import pool from "../Database/databaseConnect.js";

class User {
    static async findByEmail(email) {
        const result = await pool.query(
            "SELECT * FROM users WHERE user_email = $1", [email]);
        return result.rows[0];
    }

    static async create({ name, email, password }) {
        const result = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
        );
        return result.rows[0];
    }

    static async updatePassword({ email, password }) {
        const result = await pool.query(
            "UPDATE users SET user_password = $1 WHERE user_email = $2 RETURNING *", [password, email]
        );
        return result.rows[0];
    }

    static async getProfile(email) {
        const result = await pool.query(
            "SELECT user_id, user_name, bio, occupation, location, profilePic, coverPic FROM users WHERE user_email = $1",
            [email]
        );
        return result.rows[0];
    }

    static async updateProfile({ user_name, bio, occupation, location, profilePic, coverPic, email }) {
        const currentUser = await pool.query(
            "SELECT profilePic, coverPic FROM users WHERE user_email = $1",
            [email]
        );

        const updatedProfilePic = profilePic || currentUser.rows[0].profilepic;
        const updatedCoverPic = coverPic || currentUser.rows[0].coverpic;

        const result = await pool.query(
            "UPDATE users SET user_name = $1, bio = $2, occupation = $3, location = $4, profilePic = $5, coverPic = $6 WHERE user_email = $7 RETURNING user_id, user_name, bio, occupation, location, profilePic, coverPic",
            [user_name, bio, occupation, location, updatedProfilePic, updatedCoverPic, email]
        );
        return result.rows[0];
    }

    static async deleteUser(email) {
        const result = await pool.query(
            "DELETE FROM users WHERE user_email = $1 RETURNING *", [email]
        );
        return result.rows[0];
    }

    static async getAllUsers() {
        const result = await pool.query(
            "SELECT user_id, user_name, profilePic FROM users"
        );
        return result.rows;
    }
}

export default User;
