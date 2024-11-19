// import moment from "moment";

// console.log(moment)

// import crypto from 'crypto'

// //SALT 

// //Generar cadena aleatoria

// const generarSalt = () => {

//     return crypto.randomBytes(16).toString('hex')

// }

// //Encriptar contraseña

// const encriptarContraseña = (password, salt) => {

//     const hash = crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex')

//     return hash

// }

// const password = "coderhouse"

// const salt = generarSalt()

// console.log(encriptarContraseña(password, salt));