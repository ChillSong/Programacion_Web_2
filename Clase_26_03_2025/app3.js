    // inicializamos un arreglo para almacenar las tareas
    let tareas = [];

    //funcion para mostrar un menu

    function mostrarMenu(){
        return parseInt(prompt(
        "Opciones disponibles: \n"+
        "1. Crear una tarea\n"+
        "2. Listar tareas\n"+
        "3. Marcar tarea como completada\n"+
        "4. Salir\n"+
        "5. Elige una opcion"
        ));
    };


    function agregarTarea(){
        let nombre = prompt('Ingrese el nombre de la tarea');
        if (nombre){
            let tarea = {
                nombre: nombre,
                completada: false
            };
            tareas.push(tarea);
            alert('Tarea agregada');
        }else{
            alert('El nombre de la tarea no puede estar vacio');
        }

    }

    function listarTareas(){
        if(tareas.length === 0){
            alert('No hay tareas');
    }else{
        console.log('Tareas:');
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}. ${tarea.nombre} [${tarea.completada ? 'Completada' : 'Pendiente'}]\n`;
        });
    }
    }
    function marcarTareaCompletada(){
        console.log('En proceso');
    }





    //Funcion Principal para manejar el programa 
    function iniciarPrograma(){
        let condicion = true;
        while(condicion){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                listarTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                console.log('Gracias por usar la aplicacion');
                condicion = false;
                break;
            default:
                alert('Opcion no valida');
                break;
    
            }
        }
        alert ('Gracias por usar la aplicacion');
    }



    //Iniciar el promgrama 
    iniciarPrograma();