import express from 'express'
import { create } from 'express-handlebars'
import path from 'path'
import { __dirname } from './path.js'
import productRouter from './routes/productos.routes.js'
import cartRouter from './routes/carritos.routes.js'
import multerRouter from './routes/imagenes.routes.js'

const app = express()
const hbs = create()
const PORT = 8080


app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')




app.use('/static', express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))
console.log(__dirname);



app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/upload', multerRouter)
const productos = [
    {nombre: "iPhone 13", marca: "Apple", precio: 950000, stock: 10, status: true},
    {nombre: "Galaxy S22", marca: "Samsung", precio: 890000, stock: 15, status: true},
    {nombre: "Moto G Stylus", marca: "Motorola", precio: 750000, stock: 20, status: true},
];

app.get('/', (req,res) => {
    res.render('productos', {productos})
})

app.listen(PORT, () => {
    console.log("Server on port", PORT)
})