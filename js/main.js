let productos = []
fetch("./js/productos.json")
    .then(responde => responde.json())
    .then(data => {
        productos = data 
        cargarProductos(productos)
    })

const contenedorProductos = document.querySelector(".contenedor-productos")
const botonesCategorias = document.querySelectorAll(".btn-categorias")
let btnAgregar = document.querySelectorAll(".productos-agregar")
const numeroCarrito = document.querySelector(".numero")

function cargarProductos(cadaProducto) {

    contenedorProductos.innerHTML = ""

    cadaProducto.forEach(producto => {
        contenedorProductos.innerHTML+= `
        <div class="card2" style="width:200px"> 
            <img class="card-img-top" src=${producto.img} alt=>
            <div class="card-body">
                <h3 class="productos-titulo">${producto.nombre}</h3>
                <p class="productos-precio">$${producto.precio}</p>
                <button class="productos-agregar" id=${producto.id}>Agregar</button>
            </div>
        </div>`

    })

    actualizarBtnAgregar()
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click" , (e) => { 
        
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoSeleccionado = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productoSeleccionado)
        } else {
            cargarProductos(productos)
        }
    })
})


function actualizarBtnAgregar() {
    btnAgregar = document.querySelectorAll(".productos-agregar")

    btnAgregar.forEach(boton => {
        boton.addEventListener("click", agregarCarrito)
    })
}

let productosAComprar

const productosAComprarLS = JSON.parse(localStorage.getItem("productos-en-carrito"))


if(productosAComprarLS) {
    productosAComprar = productosAComprarLS
    actualizarNumeroCarrito()
} else {
    productosAComprar = [] 
}

function agregarCarrito(e) {
    Toastify({
        text: "Agregaste un producto al carrito ",
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
    const productoEnCarrito = productos.find(producto => producto.id == idBtn)
    

    if(productosAComprar.some(producto => producto.id == idBtn)) {
        const index = productosAComprar.findIndex(producto => producto.id == idBtn)
        productosAComprar[index].cantidad++
    } else{
        productoEnCarrito.cantidad += 1
        productosAComprar.push(productoEnCarrito)
    }
    
    actualizarNumeroCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosAComprar))
}

function actualizarNumeroCarrito() {
    let numeroActualizado = productosAComprar.reduce((acc, producto) => acc + producto.cantidad, 0)
    numeroCarrito.innerText = numeroActualizado
}