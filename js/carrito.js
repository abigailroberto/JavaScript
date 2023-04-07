const productosAComprar = JSON.parse(localStorage.getItem("productos-en-carrito"))


const carritoLleno = document.querySelector("#carrito-lleno")
const carritoComprar = document.querySelector("#carrito-final")
let bntEliminar = document.querySelectorAll(".btn-carrito-eliminar")

function cargarProductosCarrito() {
    if (productosAComprar) {
        
        carritoLleno.classList.remove("disabled")
        carritoComprar.classList.add("disabled")
    
        productosAComprar.forEach(producto => { 

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="img-carrito"  src=${producto.img} alt="">
            <div class="carrito-tituloProducto">
                <p>Título</p>
                <p>${producto.nombre}</p>
            </div>
            <div class="carrito-precioProducto">
                <p>Precio</p>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-cantidadProducto">
                <p>Cantidad</p>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-subtotalProducto">
                <p>Subtotal</p>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="btn-carrito-eliminar" id="${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        </div>
        `

        carritoLleno.append(div)
        })
        
    } else {
        carritoLleno.classList.add("disabled")
        carritoComprar.classList.add("disabled")
    }

    btnEliminarActualizar()
}

cargarProductosCarrito()


function btnEliminarActualizar() {
    bntEliminar = document.querySelectorAll(".btn-carrito-eliminar")

    bntEliminar.forEach(boton => {
        boton.addEventListener("click" , eliminarProducto)
    })
}

function eliminarProducto(e) {
    let idBtn = e.currentTarget.id

    const index = productosAComprar.findIndex(producto => producto.id === idBtn)
    productosAComprar.splice(index, 1)
    cargarProductosCarrito()

    localStorage.setItem(".btn-carrito-eliminar", JSON.stringify(productosAComprar))
}


