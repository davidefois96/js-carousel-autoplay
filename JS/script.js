const imgWrapper = document.querySelector('.imgWrapper');
const slider = document.querySelector('.slider');
const up= document.querySelector('.up');
const down= document.querySelector('.down');
let contImg= 0;

const images = [
  '../assets/img/01.webp',
  '../assets/img/02.webp',
  '../assets/img/03.webp',
  '../assets/img/04.webp',
  '../assets/img/05.webp',
]


for (let i = 0; i < images.length; i++) {
  
  imgWrapper.innerHTML += ` <img class="d-none img" src=" ${images[i]}"> `;

}

const imgCollection= document.getElementsByClassName('img');

imgCollection[contImg].classList.remove('d-none');


//slider.addEventListener('mouseout',function(){

  setInterval(() => {


    imgCollection[contImg].classList.add('d-none');
  
    
    if(contImg===images.length-1){
      
      contImg=0;
   
    } else {
  
      contImg++;
  
    }

    imgCollection[contImg].classList.remove('d-none');
    
  }, 3000);


//})


up.addEventListener('click', function() {

  imgCollection[contImg].classList.add('d-none');


  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  imgCollection[contImg].classList.remove('d-none');
 

})
down.addEventListener('click', function() {


  imgCollection[contImg].classList.add('d-none');

  
  if(contImg===images.length-1){
    
    contImg=0;
 
  } else {

    contImg++;

  }
  imgCollection[contImg].classList.remove('d-none');


})