 import {getCard} from './cards.js'
 
 export function showdata(elements){
    let text = document.querySelector('input[id = "search-input"]')

    getCard(elements)
    text.addEventListener('keyup', function(){
       getCard(elements)
     })
     }






