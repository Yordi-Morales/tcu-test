
const questions = [
    {
        question: '¿Comparten metas y objetivos financieros a largo plazo?',
        options: [
            { text: 'No tenemos metas financieras en común.',value:1},
            { text: 'Tenemos algunas metas financieras en común, pero no todas.',value:2},
            { text: 'Compartimos la mayoría de nuestras metas financieras.',value:3},
            { text: 'Tenemos metas financieras muy similares.',value:4},
            { text: 'Compartimos las mismas metas financieras a largo plazo.',value:5},
        ],
    },
    {
        question: '¿Cómo se comunican y toman decisiones financieras en pareja?',
        options: [
            { text: 'Rara vez hablamos de dinero y tomamos decisiones financieras por separado.',value:1},
            { text: 'A veces hablamos de dinero, pero las decisiones se toman individualmente.',value:2},
            { text: 'Hablamos de dinero y tomamos decisiones juntos en la mayoría de los casos.',value:3},
            { text: 'Siempre discutimos las finanzas y tomamos decisiones en conjunto.',value:4},
            { text: 'Tenemos una excelente comunicación financiera y decidimos todo juntos.',value:5},
        ],
    },
    {
        question: '¿Cuál es su nivel de transparencia financiera entre ustedes?',
        options: [
            { text: 'Sí, siempre hay conflictos y desacuerdos en la administración de los gastos',value:1},
            { text: 'A veces hay desacuerdos, pero encontramos un punto medio',value:2},
            { text: 'Mayormente estamos de acuerdo en cómo administrar los gastos diarios',value:3},
            { text: 'Tenemos una buena estrategia conjunta para administrar los gastos',value:4},
            { text: 'Estamos totalmente de acuerdo en cómo administrar los gastos diarios',value:5},
        ],
    },
    {
        question: '¿Están de acuerdo en cómo administrar los gastos diarios?',
        options: [
            { text: 'Siempre hay conflictos y desacuerdos en la administración de los gastos.',value:1},
          { text: 'A veces hay desacuerdos, pero encontramos un punto medio.',value:2},
          { text: 'Mayormente estamos de acuerdo en cómo administrar los gastos diarios.',value:3},
          { text: 'Tenemos una buena estrategia conjunta para administrar los gastos.',value:4},
          { text: 'Estamos totalmente de acuerdo en cómo administrar los gastos diarios.',value:5},
        ]
    },
    {
        question: '¿Cómo manejan las deudas y los préstamos?',
        options: [
            { text: 'No tenemos un plan para manejar las deudas y préstamos.',value:1},
          { text: 'A veces pagamos nuestras deudas por separado.',value:2},
          { text: 'Tenemos un plan para pagar las deudas en conjunto.',value:3},
          { text: 'Estamos trabajando juntos para pagar nuestras deudas.',value:4},
          { text: 'Manejamos las deudas y préstamos de manera eficiente como pareja.',value:5},
        ]
    },

    {
        question: '¿Están satisfechos con su situación financiera actual?',
        options: [
            { text: 'No estamos satisfechos y tenemos dificultades financieras.',value:1},
          { text: 'No estamos completamente satisfechos, pero no tenemos problemas graves.',value:2},
          { text: 'Estamos satisfechos en general, pero hay áreas de mejora.',value:3},
          { text: 'Nos sentimos seguros y satisfechos con nuestra situación financiera.',value:4},
          { text: 'Estamos muy satisfechos y nos sentimos financieramente estables.',value:5},
        ]
    },
    {
        question: '¿Cómo describirías tu enfoque hacia el ahorro y la planificación financiera a largo plazo?',
        options: [
            { text: 'No tenemos objetivos de ahorro ni planificación financiera.',value:1},
          { text: 'Tenemos dificultades para ahorrar y no planificamos a largo plazo.',value:2},
          { text: 'Ahorramos ocasionalmente y tenemos algunas metas financieras.',value:3},
          { text: 'Ahorramos regularmente y tenemos metas financieras claras.',value:4},
          { text: 'Ahorramos diligentemente y tenemos un plan financiero sólido.',value:5},
        ]
    },
    {
        question: '¿Cómo gestionas tus deudas y pagos?',
        options: [
            { text: 'Tenemos deudas acumuladas y dificultades para pagarlas.',value:1},
          { text: 'Pagamos solo el mínimo de las deudas y luchamos para saldarlas.',value:2},
          { text: 'A veces tenemos deudas, pero las manejamos adecuadamente.',value:3},
          { text: 'Pagamos nuestras deudas a tiempo y nos esforzamos por reducirlas.',value:4},
          { text: 'No tenemos deudas o las pagamos rápidamente.',value:5},
        ]
    },
    {
        question: '¿Cómo compartes los gastos y responsabilidades financieras en la relación?',
        options: [
            { text: 'Cada uno paga sus propios gastos y no compartimos responsabilidades financieras.', value: 1 },
            { text: 'Hay desigualdad en la distribución de los gastos y responsabilidades financieras.', value: 2 },
            { text: 'Compartimos algunos gastos y responsabilidades, pero no todos.', value: 3 },
            { text: 'Compartimos de manera equitativa los gastos y responsabilidades financieras.', value: 4 },
            { text: 'Tenemos un sistema bien establecido y justo para compartir los gastos y responsabilidades.', value: 5 },
        ]
    },
    {
        question: '¿Están de acuerdo en cómo manejar los ingresos adicionales, como bonificaciones o aumentos salariales?',
        options: [
            { text: 'Siempre hay conflictos y desacuerdos en la administración del ingreso.', value: 1 },
            { text: 'A veces hay desacuerdos, pero encontramos un punto medio.', value: 2 },
            { text: 'Mayormente estamos de acuerdo en cómo administrar ese ingreso.', value: 3 },
            { text: 'Tenemos una buena estrategia conjunta.', value: 4 },
            { text: 'Estamos totalmente de acuerdo en cómo administrar los ingresos.', value: 5 },
        ]
    }





    // Agrega el resto de preguntas aquí
];

export default questions;
