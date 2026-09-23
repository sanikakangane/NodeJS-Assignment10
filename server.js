const express = require("express")

const app = express()

const userRouter = require("./router/userRouter")

app.use(express.json())

app.use("/api", userRouter)

const PORT = 1777

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})