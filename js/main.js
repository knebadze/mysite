// სლაიდერის მექანიკური შემცვლელი
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
  }
  // სლაიდის ავტომატური გადამრთველი
  var timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  },8000);

//ავტო სლაიდერი სურათებისთვის
let imgSlider = document.getElementById('imgSlider'); 
var image = new Array("image/argentino/dog.jpg", "image/argentino/argentino.jpg", "image/argentino/argentinopuppies.jpg");
var count = 0;
var length = image.length - 1;
function imageSlider(index){
	
	count = count + index;

	if(count > length){
		count = 0;
	}
	
	if(count < 0){
		count = length;
	}
	
	imgSlider.src = image[count];
	
	return false;
}
autoSlideShow();

function autoSlideShow(){
	setInterval("imageSlider(1)", 4000);
}
//მეტის ნახვა ბათონ
