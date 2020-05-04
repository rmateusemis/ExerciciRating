// Crea una colección con los elementos hijo de ratings(stars)
const stars = document.querySelector('.ratings').children;

//Recorre cada elemento de stars y añade evento
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function(){

        // Recorre stars de nuevo y cambia la clase cuando esta rellena (efecto inverso)
        for (let j = 0; j < stars.length; j++) {
            stars[j].classList.remove("fa-star");
            stars[j].classList.add("fa-star-o"); 
        }
       
        // Cambia clase añadiendo estrella rellena de 0 a [i] incluido este
        for (let j = 0; j <= i; j++) {
            stars[j].classList.remove("fa-star-o");
            stars[j].classList.add("fa-star");
        }
    });
    stars[i].addEventListener('click', function(){
        console.log(stars[i]);
    
    });
    
}
