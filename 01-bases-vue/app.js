const { createApp,ref } = Vue;

const app = createApp({
    template: `	
        <h1>Hola Món</h1>
        <p>Desde app.js</p>
        <p>{{ 1 + 1}}</p>
        <p>{{ "1" + "1"}}</p>
        <p>Es de la mascareta {{ true }}</p>
        <p>Pisos {{ [1, 2, 3] }}</p>
        <p>Usuario {{ { id: 1, name: 'Marc' } }}</p>
    `	
})

app.mount('#myApp');