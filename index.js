const express = require("express")
const app = express()
const morgan = require("morgan")
// const router = require("./router")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const router = require("./router")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');


dotenv.config()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"))

app.use(express.json())
app.use(cookieParser())
// app.use(router)
router(app)

const NAME_DB = process.env.NAME
const PASSWORD_DB = process.env.PASSWORD


// mongodb+srv://${NAME_DB}:${PASSWORD_DB}@cluster0.8kxllok.mongodb.net/full_stack
mongoose.connect(`mongodb+srv://${NAME_DB}:${PASSWORD_DB}@cluster0.8kxllok.mongodb.net/`)
    .then(() => {
        console.log("Connect DB success")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
}) 