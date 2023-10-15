//Tableau des images avec leurs taglines
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélection de tous les éléments dot
const dot = document.querySelectorAll('.dot');
// Sélection de l'image principale du slider
const picture = document.querySelector('.banner-img')
// Sélection de la légende du slider
const tagLine = document.querySelector('p');
// Index initial pour le slide actif
let index = 0;

//Change l'image et la légende en fonction de l'index donné.
function changeImage(index) {
	picture.src = './assets/images/slideshow/' + slides[index].image;
	tagLine.innerHTML = slides[index].tagLine;
	// Affichage dans la console de la slide changée pour vérification
	console.log(`Slide changée : ${index+1} | Image : ${slides[index].image} | Légende : ${slides[index].tagLine}`);
  }

//Met à jour l'indicateur dot actif en fonction de l'index.
function changeDot(index) {
	dot.forEach(dot => dot.classList.remove('dot_selected'));
	dot[index].classList.add('dot_selected');
}

// Ajout d'un écouteur d'événements pour le bouton précédent
document.getElementById('prev').addEventListener('click', () => {
	// Si on est sur le premier slide, on va au dernier
	if(index==0) {
		index=3;
		changeImage(index);
		changeDot(index);
	}
	// Sinon, on va au slide précédent
	else {
		index = index - 1;
		changeImage(index);
		changeDot(index);
	}
});

// Ajout d'un écouteur d'événements pour le bouton suivant
document.getElementById('next').addEventListener('click', () => {
	// Si on est sur le dernier slide, on retourne au premier
	if(index==3) {
		index=0;
		changeImage(index);
		changeDot(index);
	}
	// Sinon, on avance au slide suivant
	else {
		index = index + 1;
		changeImage(index);
		changeDot(index);
	}
});




