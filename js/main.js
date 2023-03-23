let login = true

    while (login === true) {
        nombreUsuario = prompt("Ingresa tu nombre")
        emailUsuario = prompt("Ingresa tu email")
        passwdUsuario = prompt("Ingresa tu contraseña")

        if (nombreUsuario != "" && emailUsuario != "" && passwdUsuario != "") {
            alert("Bienvenid@ " + nombreUsuario)
            login = false
        }  else {
            alert("No se reconoce el usuario y/o constraseña. Debes ingresar todos los campos requeridos")
        }
    }

const productos = [
    { nombre: "perfumina", precio: 1550 },
    { nombre: "cubre edredon", precio: 15500 },
    { nombre: "almohadon liso verde", precio: 2500 },
    { nombre: "almohadones cuadros", precio: 7500 },
    { nombre: "jarron", precio: 3500 },
    { nombre: "jarron pequeño", precio: 2000 },
    { nombre: "jarra de ceramica", precio: 5000 },
    { nombre: "lampara de mimbre", precio: 10000 },
    { nombre: "taza de cerámica", precio: 1500 },
    { nombre: "plato de ceramica", precio: 4500 },
]

let carrito = []

let compra = prompt("¿Desea realizar una compra?")

while(compra !== "si" && compra !=="no") {
    alert("Debes ingresar una respuesta correcta (Si o No)")
    compra = prompt("¿Desea realizar una compra?")
}

if (compra == "si") {
    alert("A continuación te mostraré los productos disponibles")
    let listaDeProductos = productos.map((producto) => producto.nombre + "" + producto.precio)
    alert(listaDeProductos.join(" - "))
}  else if (compra == "no") {
    alert("Gracias por haber visitado nuestra página web")
}

while(compra != "no") {
    let producto = prompt("Agregá un producto a tu carrito de compras") 
    let precioProducto = 0

    if (producto == "perfumina" || producto == "cubre edredon" || producto == "almohadon liso verde" || producto == "almohadones a cuadros" || producto == "jarron" || producto == "jarron pequeño" || producto == "jarra de ceramica" || producto == "lampara de mimbre" || producto == "taza de ceramica" || producto == "plato de ceramica") {
        switch(producto) {
            case "perfumina":
                precioProducto = 1550
                break
            case "cubre edredon":
                precioProducto = 15500
                break
            case "almohadon liso verde":
                precioProducto = 2500
            break
            case "almohadones cuadros":
                precioProducto = 7500
                break
            case "jarron":
                precioProducto = 3500
                break
            case "jarron pequeño":
                precioProducto = 2000
                break
            case "jarra de ceramica":
                precioProducto = 5000
                break
            case "lampara de mimbre":
                precioProducto = 10000
                break
            case "taza de ceramica":
                precioProducto = 1500
                break
            case "plato de ceramica":
                precioProducto = 4500
                break 
            default:
                break;
        }
    let cantidad = parseInt(prompt("Seleccione las unidades deseadas del producto seleccionado"))
    carrito.push({producto, cantidad, precioProducto})
    console.log(carrito)
    } else {
        alert("Ese producto no se encuentra en nuestra tienda")
    }

    compra = prompt("¿Quiere seguir comprando?")
    while(compra === "no") {
        alert("Gracias por visitar nuestra página web" , + nombreUsuario)
        carrito.forEach((compraFinal) => {
            console.log(`producto: ${compraFinal.producto}, cantidad: ${compraFinal.cantidad}, total ${compraFinal.cantidad * compraFinal.precioProducto}`)
        })
    break;
    }
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precioProducto * elemento.cantidad, 0)
console.log(`Su total es: ${total}`)  
