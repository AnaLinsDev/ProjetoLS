import {showdata} from './lib.js';
import * as moment from 'moment'
//API DOS PERSONAGENS
let er = ''
let button = document.querySelector('.but')
let form = document.querySelector('fieldset')
let nome = document.querySelector('#nome')
let email = document.querySelector('input[id = "email"]')
let sinopse = document.querySelector(".sinopse")
console.log('oi')

function getC(link){
  fetch(link)
  .then(response => response.json())
  .then(elements => showdata(elements))
}

getC('https://rickandmortyapi.com/api/character/')

function showSinopse(){
  console.log(sinopse.value)
  sinopse.innerHTML = ` O <a href="https://pt.wikipedia.org/wiki/Rick_and_Morty" target="_blank">show</a> gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, Rick Sanchez, que mora com eles como hóspede. Rick é um cientista excêntrico e alcoólatra, que evita muitas convenções costumeiras como escola, casamento, amor e família. Ele frequentemente vai em aventuras com seu neto de 14 anos de idade, Morty. As aventuras ocorrem em um número infinito de realidades, com os personagens viajando para outros planetas e dimensões através de portais e do carro voador de Rick. Durante a série várias áreas sociais e ideológicas são abordadas de forma de zombaria, e é por isso que a animação é considerada inteligente por alguns e idiota por outros.`
  }

showSinopse()

function is_email(email){
  er = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/; 
  if(!email.match(er))
  {
      
      alert('Email Inválido')
}
else{
  form.innerHTML = `<br><br>
  <h1>Obrigado(a) , ${nome.value}</h1><br>
  <h2> Earth (C-137) - ${moment().format("MMM Do YY")}</h2>`
}
}

button.addEventListener('click', function(){
  is_email(email.value)
})

