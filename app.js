const argv = require("./config/yargs").argv;

const porHacer = require("./por-hacer/por-hacer")

const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('muestra todas las tareas por hacer'.green);
        listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====por hacer===='.red);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================='.red);

        }
        break;
    case 'actualizar':
        console.log('actualiza una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no recononocido');
        break;
}

//console.log(argv);