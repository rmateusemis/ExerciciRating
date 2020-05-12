// Crea una colección con los elementos hijo de ratings(stars)
const stars = document.querySelector('.ratings').children;

//Recorre cada elemento de stars y añade evento
for (let i = 0; i < stars.length; i++) {
    /*stars[i].addEventListener('mouseover', function(){
		set_starts(i);
    });*/
    stars[i].addEventListener('click', function(){
        console.log(stars[i]);
		set_starts(i);
    
	});
	// Resetea al hacer click fuera las estrellas
	document.addEventListener('click', function(e) {
		var container = document.querySelector('.ratings');
		if (!container.contains(e.target)) {
		  stars[i].classList.remove("fa-star");
		  stars[i].classList.add("fa-star-o");
		}
	  });
}


function set_starts(i){
	console.log("set_starts"+i);
	clean_all_stars();
	for (let j = 0; j <= i; j++) {
		stars[j].classList.remove("fa-star-o");
		stars[j].classList.add("fa-star"); 
	}
}

function clean_all_stars(){
	console.log("clean_all_stars");
	for (let j = 0; j < stars.length; j++) {
		stars[j].classList.remove("fa-star");
		stars[j].classList.add("fa-star-o");
	}
}
