const {createApp, ref} = Vue;

const app = createApp({
    setup(){
        const players = ref([
            {id: 1, name: 'Rafael'},
            {id: 2, name: 'Messi'},
            {id: 3, name: 'Luis'},
            {id: 4, name: 'Cristiano'},
            {id: 5, name: 'Neymar'}
        ]);
        return {players};
    }    
});
app.mount('#myApp');