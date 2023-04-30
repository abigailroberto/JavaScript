let productosAComprar = localStorage.getItem("productos-en-carrito")
productosAComprar = JSON.parse(productosAComprar)


const carritoLleno = document.querySelector("#carrito-lleno")
const carritoComprar = document.querySelector("#carrito-final")
const finalizarCompra = document.querySelector(".carrito-comprar")
let bntEliminar = document.querySelectorAll(".btn-carrito-eliminar")
const precioTotal = document.querySelector("#total")
const btnComprar = document.querySelector(".carrito-comprar")

function cargarProductosCarrito() {
    if (productosAComprar && productosAComprar.length >= 0) {
        
        carritoLleno.classList.remove("disabled")
        carritoComprar.classList.remove("disabled")
        finalizarCompra.classList.add("disabled")
    
        carritoLleno.innerHTML = ""
        
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
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-cantidadProducto">
                <p>Cantidad</p>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-subtotalProducto">
                <p>Subtotal</p>
                <p>${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
            <button class="btn-carrito-eliminar" id="${producto.id}"><i class="fa-solid fa-trash-can"></i></button>
        `

        carritoLleno.append(div)
        })

        
    } else {
        
        carritoLleno.classList.add("disabled")
        carritoComprar.classList.add("disabled")
        finalizarCompra.classList.remove("disabled")
    }

    btnEliminarActualizar()
    totalActualizado()
}

cargarProductosCarrito()


function btnEliminarActualizar() {
    const bntEliminar = document.querySelectorAll(".btn-carrito-eliminar")

    bntEliminar.forEach(boton => {
        boton.addEventListener("click" , eliminarProducto)
    })
}

function eliminarProducto(e) {
    Toastify({
        text: "Eliminaste un producto del carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ab968d69",
          color: "#fff",
          borderRadius:"2rem",
        },
        offset: {
            x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 30
        },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBtn = e.currentTarget.id
    const index = productosAComprar.findIndex(producto => producto.id == idBtn)
    productosAComprar.splice(index, 1)
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosAComprar))
}

function totalActualizado() {
    const calculoTotal = productosAComprar.reduce ((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    total.innerText = `$ ${calculoTotal}`
}

btnComprar.addEventListener ("click" , comprarCarrito)
function comprarCarrito() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por tu compra',
        showConfirmButton: false,
        color: "#ab968d",
        background: "#fff",
        timer: 2000
      })
    productosAComprar.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosAComprar))
}