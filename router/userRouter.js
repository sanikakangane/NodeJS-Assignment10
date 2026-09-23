const express = require("express")
const router = express.Router()

const db = require("../config/firebase")
const userSchema = require("../schema/userSchema")

router.post("/users", async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body)

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                error: error.details[0].message
            })
        }

        const docRef = await db.collection("users").add(value)

        res.status(201).json({
            success: true,
            message: "User data stored successfully",
            id: docRef.id
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success: false,
            message: "Failed to store user data"
        })
    }
})

module.exports = router