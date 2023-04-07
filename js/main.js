const contenedorProductos = document.querySelector(".contenedor-productos")
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
                <p class="productos-precio">${producto.precio}</p>
                <button class="productos-agregar" id=${producto.id}>Agregar</button>
            </div>
        </div>`

    })

    actualizarBtnAgregar()
}

cargarProductos(productos)



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


