//importo un Arr con un arreglo,no ADM destructuring
const users = require ('../utils/users')

const login = (req,res) =>{

    //Lo recivo de 1 input por ende Query
    const {username ,password} = req.query

    users.find(user => user.username === username && user.password === password)
    ?res.status(200).json({access:true})
    :res.status(401).json({access: false})


}

module.exports = { login }