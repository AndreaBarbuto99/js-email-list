/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */




const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

axios.get(endpoint)
.then(response => {
    const result = response.data;
})

.catch(error =>{
    console.error(error);
})

.then (() =>{

});