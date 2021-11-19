const type = {
    ACTIVITY:"ACTIVITY",
    EXPOSICION:"EXPOSICION",

}

export const inicialState = {
    counter: 0,
    darkTheme: false,
    tareas:[
        {
            id:1,
            type:'MATERIAL',
            title:'Material sesion 2_1_2',
            description:`
            Material sesion 2_1_2
            `,
            instruccions:``,
            files:[
                {
                    id:1,
                    name:'RECURSO 1',
                    capture:'capture.png',
                    typefile:'PTT'
                }
              
            ],
            fechaentrega:'14 ago. 14:00 pm',
            fechapublicacion:'12 ago. 9:00 am'

        }
        ,
        {
            id:2,
            type:'TASK',
            title:'Propuesta de tres temas para su proyecto de Minería de datos y conformación de equipo de trabajo',
            description:`Cada clase o materia tiene asignadas algunas actividades. El numero de actividades puede variar conforme a cada clase. Para ver las actividades a desarrollar debes elegir primero una clase, y luego en la pestaña "Trabajo en clase" o "Trabajos" si estas en la aplicación de Google Classroom.  Y por ultimo selecciona una actividad y dale clic en el botón "Ver tarea".',
            Presentar un documento en formato PDF con la siguiente información:
            1. Tres títulos para su proyecto de Minería de datos (PROPUESTAS).
            2. Nombre de las empresas/instituciones que van a intervenir con el proyecto.
            3. Nombres y códigos de los integrantes (máximo 3 integrantes).
            `,
            files:[
                {
                    id:1,
                    name:'RECURSO 1',
                    capture:'capture.png',
                    typefile:'PTT'
                }
            ],
            linkvideos:['https://www.youtube.com/watch?v=xctzp0dp9uc&t=93s'],
            fechaentrega:'14 ago. 14:00 pm',
            fechapublicacion:'12 ago. 9:00 am'

        },
        {
            id:3,
            type:'TASK',
            title:'Presentación de los articulos de referencia para su proyecto de investigación',
            description:`
              Presentación de los articulos de referencia para su proyecto de investigación
                El alumno debera subir una presentacion de los 8 articulos sobre los cuales basara su investigación de tema de tesis.           
            `,
            instruccions:``,
            files:[],
            fechaentrega:'22 sept. 15:00 pm',
            fechapublicacion:'12 jun. 8:00 am'

        },
         {
            id:3,
            type:'TASK',
            title:'TALLER UNITY 3D - MOVIMIENTO DE PERSONAJE',
            description:`
            Objetivo:  Aprender los conceptos más básicos mientras desarrollas la mecánica de movimiento de un personaje
            programación en C#  
            `,
            instruccions:``,
            files:[],
            fechaentrega:'22 sept. 15:00 pm',
            fechapublicacion:'12 jun. 8:00 am',
            linkvideos:['https://www.youtube.com/watch?v=xctzp0dp9uc&t=93s'],
        }
    ],
};
