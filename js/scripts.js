
function closeSlideBottom(el){
	//console.log(el);
	//http://jsfiddle.net/pgfk2mvo/
}


//DATA IMG
var $imagesBck = document.querySelectorAll(".dataimg");
$imagesBck.forEach(function(el){
	var $dataimg = el.getAttribute("data-img");
	el.style.backgroundImage = "url('"+$dataimg+"')";
});