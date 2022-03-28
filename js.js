let enojado = document.getElementById('enojado')
let feliz = document.getElementById('feliz')
let tierno = document.getElementById('tierno')
let boton = document.getElementById('boton')

let myArray = [enojado, feliz, tierno]

enojado.style.display= 'block'
feliz.style.display= 'none'
tierno.style.display= 'none'


function cambiaImagen(){
    if(myArray[0].style.display === 'block'){
       myArray[0].style.display = 'none'
       myArray[1].style.display = 'block'
       myArray[2].style.display = 'none'
    }
    else if(myArray[1].style.display === 'block'){
            myArray[1].style.display = 'none'
            myArray[0].style.display = 'none'
            myArray[2].style.display = 'block'
    }
    else if(myArray[2].style.display === 'block'){
            myArray[2].style.display = 'none'  
            myArray[0].style.display = 'block'
            myArray[1].style.display = 'none'   
    }
}
boton.addEventListener('click',cambiaImagen)

let resultado = cambiaImagen