const descripcion = {
    demand: true,
    alias: 'd',
    desc: "descripcion de la tarea por hacer"
};

const completado = {
    alias: 'c',
    default: true,
    desc: "marca cómo completado o pendiente la tarea"
};

const argv = require('yargs')
    .command('crear', "Crear una tarea por hacer", { descripcion })
    .command('actualizar', "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command('borrar', "elimina una tarea por hacer", { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}