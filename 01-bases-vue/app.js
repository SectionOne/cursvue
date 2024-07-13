const { createApp,ref } = Vue;

const app = createApp({
    template: `	
        <h1>{{message}}</h1>
        <p>Desde app.js</p>
    `,	
    setup(){
        const message = ref("Hola Món"); //L'element queda per defecte protegit

        setTimeout(() => {
            message.value = "Hola Vue";
            console.log("Executat");
        }, 2000);

        return { message };
    }
});

app.mount('#myApp');