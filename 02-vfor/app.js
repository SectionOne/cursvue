const {createApp, ref} = Vue;

const app = createApp({
    setup(){

        const showPlayer = ref(true);

        const players = ref([
            {id: 1, name: 'Rafael',number: 10},
            {id: 2, name: 'Messi',number: 9},
            {id: 3, name: 'Luis',number: 13},
            {id: 4, name: 'Cristiano',number: 7},
            {id: 5, name: 'Neymar',number: 4}
        ]);

        const afegirJugador = () => {
            players.value.push({id: players.value.length + 1, name: 'Frase',number: 0})
        }

        return {players, showPlayer, afegirJugador};
    }    
});
app.mount('#myApp');