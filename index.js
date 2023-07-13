/* Inicio declarando dos Arrays donde en el primero guardo y defino con una constante
    los datos de mis productos y el segundo irá alojando los productos que el cliente elija: */ 

    const productos = [
        {nombre: "Remera", precio: 7000},
        {nombre: "Buzo", precio: 5000},
        {nombre: "Pantalon", precio: 3000},
        {nombre: "Zapatilla", precio: 800},
        {nombre: "Gorro", precio: 500}
    ]
    
    let carrito = []
    
    /* Declaro la variable selección de productos */
    
    let seleccion = prompt("Bienvenido a Jakir, ¿desea comprar algún producto? si/no " )
    
    //Inicio un Bucle para darle dos opciones al usuario SI Y NO
    
    while (seleccion !="si" && seleccion !="no"){
        alert("¿Deseas continuar a la compra? Ingresa solo si/no")

        // Al haber declarado seleccion con LET y a su vez ser una var global, puedo modificar su valor acá dentro
        seleccion = prompt("Bienvenido a Jakir, ¿desea comprar algún producto? si/no " ) 
    }
    if (seleccion === "si"){
        alert("A continuación te enseñamos la lista de productos -> ")
    }
    else if (seleccion === "no"){
        alert("¡Te esperamos pronto!")
    }
    
    //2do bucle 
    
    while (seleccion !="no"){
        let producto  = prompt("Elige un producto:  Remera $7000 - Buzo $5000 - Pantalon $3000 - Zapatilla $800 - Gorro $500")

        //declaro variable local precio para poder ir modificandola en cada caso a continuación 
        let precio = 0 
    
        if (producto == "Remera" || producto == "Buzo" || producto == "Pantalon" || producto == "Zapatilla" || producto == "Gorro" ) {
            switch(producto){
                case "Remera":
                    precio = 7000;
                    break;
                case "Buzo":
                    precio = 5000;
                    break;
    
                case "Pantalon":
                    precio = 3000;
                    break;
    
                case "Zapatilla":
                    precio = 800;
                    break;
    
                case "Gorro":
                    precio = 500;
                    break;
    
                default:
                    break;
            }
    
        //a partir de acá comienzo a meter la información que quiero dentro del carrito
        let unidades = parseInt(prompt("¿Cuantas unidades desea agregar?")) 
    
        carrito.push ({producto, unidades, precio})
        console.log(carrito)
        } 
        else{
            alert("Ingrese un producto dentro de los mencionados")}
    
        seleccion = prompt("¿Desea seguir comprando?")
    
        while (seleccion === "no"){
            alert("¡Gracias por tu compra! Apretá F12 para ver tu carrito")

            //utilizo forEach para recorrer el carrito
            carrito.forEach((carritoFinal) => {
                console.log(`PRODUCTO: ${carritoFinal.producto} UNIDADES: ${carritoFinal.unidades} TOTAL ${carritoFinal.unidades * carritoFinal.precio}`)
            }) 
            break;
        }
    }
    
    //declaro la suma del total del carrito utilizando el método reduce para que me traiga los datos que le solicito utilizando los parámetros acumulador y elementos declarados en carrito y realizo los cálculos
    const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El total a pagar es de: ${total}`)




