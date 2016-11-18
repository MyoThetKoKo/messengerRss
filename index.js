const Bot = require("messenger-bot")
const http = require("http")


const NODE_ENV = process.env.NODE_ENV || "development"
const ENV = process.env

if (NODE_ENV == "development") {
    require("./config/keys")
}

var bot = new Bot({
    token: ENV["EAARhkzWNIF4BAE2UXZAJ6CsH6hpYnB6S5epmwzKAEH9U8lLc08AzX3Q9PZCLShxaEZCKC4ygjKZBncs76lVJNzfpTxji21eTZAyfmTxHW5MZAnEMvaTNHtAUbnxZATzQanLwFCLCbOeAMYvhHfve4M302rzUZBIFxEyqYtBlODYhEgZDZD"],
    verify: ENV["my_voice_is_my_password_verify_me"],
    app_secret: ENV["8d1e51d10a7edc54e9fd79ffac1bdb0c"]
})

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || "0.0.0.0"

require("./bot_modules/index")(bot)

http.createServer(bot.middleware())
    .listen(PORT, HOST,
    function (error) {
        if (!error) {
            console.log("Server is listening:")
            console.log(`PORT: ${PORT}`)
            console.log(`HOST: ${HOST}`)
        }
        else {
            console.error(error)
        }
    })
