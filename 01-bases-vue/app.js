const { createApp,ref } = Vue;

const app = createApp({
    template: `	
        <h1>{{message}}</h1>
        <p>Desde app.js</p>
    `,	
    setup(){
        const message = "Hola Món"; //L'element queda per defecte protegit

        return { message };
    }
});

app.mount('#myApp');