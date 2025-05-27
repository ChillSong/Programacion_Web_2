let inventario = []
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles:\n" +
        "1. Agregar producto\n" +
        "2. Mostrar todos los productos\n" +
        "3. Buscar producto por nombre\n" +
        "4. Slir \n" +
        "elige una opción: "
        
        
        ));
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                continuar = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
}

function agregarProducto(){
    let nombreProducto = prompt("Ingrese el nombre del producto: ");
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto: "));
    
    if ( cantidadProducto > 0 && precioProducto > 0) {
        let producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: cantidadProducto
        };
        inventario.push(producto);
        
        
        alert("Producto agregado correctamente.");
    }else {
        alert("La cantidad y el precio deben ser mayores a 0.");
    }
    console.log(inventario);
    
}

function mostrarProductos(){
    if(inventario.length === 0){
        alert("No hay productos en el inventario.");
        return;
    }
    let listaProductos = "Productos en el inventario:\n";
    for(let i = 0; i < inventario.length; i++){
        listaProductos += `${i + 1}. ${inventario[i].nombre} - Precio: $${inventario[i].precio} - Cantidad: ${inventario[i].cantidad}\n`;
    }
    alert(listaProductos);
}

function buscarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a buscar: ");
    let encontrado = false;
    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === nombre.toLowerCase()){
            alert(`Producto encontrado: ${inventario[i].nombre} - Precio: $${inventario[i].precio} - Cantidad: ${inventario[i].cantidad}`);
            encontrado = true;
            break;
        }
    }
    if(!encontrado){
        alert("Producto no encontrado.");
    }
}

// Iniciar el programa
iniciarPrograma();