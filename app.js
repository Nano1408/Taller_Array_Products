import {productsDetails} from "./Products.js"

/* La variable productsDetails tiene una lista de productos obtenida de una  base de datos.

1. Cree un nuevo array basado en products que solo tenga los nombres de los productos
2. Cree una funcion para filtar los productos con descuentos mayores al 15%
3. Cree una funcion que retorne la cantidad de stock existente en los productos de la categoria home-decoration
4. En un nuevo array cambie el nombre de la categoria skincare por skin-treatment
5. Cree un nuevo array con los productos ordenado */



//1. Cree un nuevo array basado en products que solo tenga los nombres de los productos
const NombreProducto = productsDetails.map((nombreproductos)=>{
    return nombreproductos.title
});
console.log(NombreProducto);



//2. Cree una funcion para filtar los productos con descuentos mayores al 12%
const Mayor15 = productsDetails.filter((MayorDescuento)=>{
    return MayorDescuento.discountPercentage > 12
});
console.log(Mayor15);




//3. Cree una funcion que retorne la cantidad de stock existente en los productos de la categoria smartphones
const CantidadStock = productsDetails.filter((smartphones)=>{
    return smartphones.category === "smartphones"
}).reduce((cantidad_stock, stocks)=>{
    return (cantidad_stock + stocks.stock)
},0);
console.log("%cLa cantidad de stock en la categoria de smartphones es: "+CantidadStock,'color: red;'+"font-size:20px")

/*const Cantidad = productsDetails.map((Homedecoration)=>{
    return {
        categoria:Homedecoration.category === 'home-decoration',
        producto:Homedecoration.category,
        Stock:Homedecoration.stock
    }
});
console.log(Cantidad)*/

//4. En un nuevo array cambie el nombre de la categoria fragrances por parfums
const cambioNombreCategory = productsDetails.filter((categorys)=>{
    return categorys.category == "fragrances"
});
for (let i=0; i < cambioNombreCategory.length; i++){
    cambioNombreCategory[i].category = "parfums";
}


//5. Cree un nuevo array con los productos ordenado

//array de products ordenado por categoria, el metodo .sort() ordena los array y la funcion con condiciones para que retorne en orden alfabetico
productsDetails.sort((a,b)=>{
    if (a.price > b.price){
        return 1;
    }
    if (a.price < b.price){
        return -1;
    }
    return 0;
});
 console.log(productsDetails);


//nuevo array ordenando por nombre
const orderArrayNew = [
    { 
        nombre: "Fernando", 
        edad: 20,
    },
    {
        nombre:"Juan",
        edad:25,
    },
    {
        nombre:"Cristian",
        edad:18,
    },
    {
        nombre:"Daniel",
        edad:18,
    },
    {
        nombre:"Argemira",
        edad: 59,
    },
    {
        nombre:"Gilberto",
        edad:60,
    }
]
orderArrayNew.sort((a,b)=>{
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
});

console.log(orderArrayNew)
