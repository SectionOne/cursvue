const {createApp, ref,computed} = Vue;

const app = createApp({
    setup(){

        const showPlayer = ref(true);
        const nouJugador = ref('');
        const nouJugadorNumber = ref(0);

        const players = ref([
            {id: 1, name: 'Rafael',number: 10},
            {id: 2, name: 'Messi',number: 9},
            {id: 3, name: 'Luis',number: 13},
            {id: 4, name: 'Cristiano',number: 7},
            {id: 5, name: 'Neymar',number: 4}
        ]);

        const afegirJugador = () => {
            players.value.push({id: players.value.length + 1, name: nouJugador.value,number: nouJugadorNumber.value})
            nouJugador.value = '';
            nouJugadorNumber.value = 0;
        }

        //Afegim una propietat computada per a mostrar el total de jugadors i obligar a Vue a renderitzar de nou
        const totalJugadors = computed(() => {
            return players.value.length;
        });

        return {players, showPlayer, afegirJugador,totalJugadors,nouJugador,nouJugadorNumber};
    }    
});
app.mount('#myApp');