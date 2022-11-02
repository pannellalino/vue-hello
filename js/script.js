const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao',
      coloreTesto: 'blu'
    }
  }
}).mount('#app')