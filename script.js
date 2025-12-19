/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */



const ulPage = document.getElementById("email-list");
const myButton = document.getElementById("new-email-list");
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"


for (let i = 0; i < 10; i++) {
    axios.get(endpoint)
    .then(response => {
       let emailGet = response.data.response;
       ulPage.innerHTML += `<li>${emailGet}</li>`
       })
    
    
    .catch(error =>{
        console.error(error);
    })
    
    .finally (() =>{
    });
}

myButton.addEventListener("click", () => {
    ulPage.innerHTML = "";
    for (let i = 0; i < 10; i++) {
    axios.get(endpoint)
    .then(response => {
       let emailGet = response.data.response;
       
       ulPage.innerHTML += `<li>${emailGet}</li>`
       })
    .catch(error =>{
        console.error(error);
    })
    
    .finally (() =>{
    });
}
});