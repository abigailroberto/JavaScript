let login = true

    while (login === true) {
        nombreUsuario = prompt("Ingresa tu nombre")
        emailUsuario = prompt("Ingresa tu email")
        passwdUsuario = prompt("Ingresa tu contraseña")

        if (nombreUsuario != "" && emailUsuario != "" && passwdUsuario != "") {
            alert("Bienvenid@ " + nombreUsuario)
            login = false
        }  
        else {
            alert("No se reconoce el usuario y/o constraseña. Debes ingresar todos los campos requeridos")
        }
    }


let precioProducto = ""

const mensajePrincipal = "👍¿Qué prenda deseas comprar? Ingresa la letra de la prenda requerida: \n" +
                            "a) Almohadón liso verde \n" +
                            "b) Jarrón \n" + 
                            "c) Jarrón pequeño \n" +
                            "d) Jarra de cerámica \n" +
                            "e) Lapara de mimbre \n" +
                            "f) Taza de cerámica \n" +
                            "g) Perfumina \n" +
                            "h) Plato de cerámica \n" +
                            "i) Florero doble brazo \n" +
                            "j) Cubre edredón \n" +
                            "k) Almohadones cuadrados \n"

function preguntarPrecio() {
    let seleccion = prompt(mensajePrincipal).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e" && seleccion !== "f" && seleccion !== "g" && seleccion !== "h" && seleccion !== "i" && seleccion !== "j" && seleccion !== "k") {
        alert("❌La letra ingresada es incorrecto, ingrese un valor válido válido.")
        return preguntarPrecio ()
    } else {
        switch(seleccion) {
            case "a":
                precioProducto = "El almohadón liso verde cuesta $2500"
                break
            case "b":
                precioProducto = "El jarrón cuesta $3500"
                break
            case "c":
                precioProducto = "El jarrón pequeño $2000"
                break
            case "d":
                precioProducto = "La jarra de cerámica cuesta $5000"
                break
            case "e":
                precioProducto = "La lámpara de mimbre cuesta $10000"
                break
            case "f":
                precioProducto = "La taza de cerámica cuesta $1500"
                break
            case "g":
                precioProducto = "La perfumina cuesta $1550"
                break
            case "h":
                precioProducto = "Cada plato de cerámica cuesta $4500"
                break 
            case "i":
                precioProducto = "El florero doble brazo cuesta $3500"
                break
            case "j":
                precioProducto = "El cubre edredón cuesta $15500"
                break
            case "k":
                precioProducto = "x3 Almohadones cuadrados cuesta $7500"
                break
            default: 
        }
        alert(precioProducto)
    }
}