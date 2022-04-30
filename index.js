const express = require('express')
// const { ExpressHandlebars } = require('express-handlebars')
const { create } = require('express-handlebars')
const { redirect } = require('express/lib/response')

const app = express()
const hbs = create({
    extname: ".hbs",
    partialsDir: "views/components"
})
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')


app.get('/', (req,res) =>{
    // res.send('ok funciona')
    const projects = [{
        title: "Huellitas",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/huellitas.png"
    },
    {
        title: "J.P Morgan - Fundacion Pescar",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/jpmorgan-pescar.png"
    },{
        title: "Pizzeria LaRica",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/pizzeria.png"
    },{
        title: "Pokemon",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/pokemon.png"
    },{
        title: "SorteosAPP",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/sorteap.png"
    },
    {
        title: "Calculadora",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/calculadora.png"
    },
    {
        title: "RompeHielo",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/rompeHielo.png"
    },
    {
        title: "To Do",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/todo.png"
    },
    {
        title: "Cronometro",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/Cronometro.png"
    },
    {
        title: "Carrito",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/Carrito.png"
    },
    {
        title: "Wheater",
        description: "Sitio web co-creado de forma colaborativa junto a compañeros y amigos de mi capacitacion en J.P.morgan, Fundacion Pescar y EducacionIT",
        img: "/img/img-projects/wheater.png"
    },

    ]

    res.render('home',{projects})
},)

app.get('/contacto', (req,res) =>{
    res.send('estas en contacto')
})

// MIDDLEWARE
app.use(express.static(__dirname + "/public"))
app.listen(4000, () =>{
    console.log('server on')
})