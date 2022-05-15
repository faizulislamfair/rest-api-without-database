const { v4: uuidv4 } = require('uuid')

const users = [
    {
        id: uuidv4(),
        username: "Faizul Islam",
        email: "faizulislamfair@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Cheeky Monkey",
        email: "pandaparty@gmail.com"
    }
]

module.exports = users