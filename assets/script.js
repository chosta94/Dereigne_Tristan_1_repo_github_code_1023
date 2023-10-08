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
]

const dot = document.querySelectorAll('.dot');
const picture = document.querySelector('.banner-img');
const listImg = ['./assets/images/slideshow/slide1.jpg', './assets/images/slideshow/slide2.jpg', './assets/images/slideshow/slide3.jpg', './assets/images/slideshow/slide4.png'];
let index = 0;

function changeImage(index) {
	picture.src = listImg[index];
  }

function changeDot(index) {
	dot.forEach(dot => dot.classList.remove('dot_selected'));
	dot[index].classList.add('dot_selected');
}  

document.getElementById('prev').addEventListener('click', () => {
	if(index==0) {
		index=3;
		changeImage(index);
		changeDot(index);
	}
	else {
		index = index - 1;
		changeImage(index);
		changeDot(index);
	}
});

document.getElementById('next').addEventListener('click', () => {
	if(index==3) {
		index=0;
		changeImage(index);
		changeDot(index);
	}
	else {
		index = index + 1;
		changeImage(index);
		changeDot(index);
	}
});




