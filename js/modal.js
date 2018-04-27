var $modal = document.getElementById("modal");
var $modalShadow = $modal.getElementsByClassName("modal-shadow"); var $modalShadow = $modalShadow[0];
var $modalHeader= $modal.getElementsByClassName("modal-header"); var $modalHeader = $modalHeader[0];
var $modalContent = $modal.getElementsByClassName("modal-content"); var $modalContent = $modalContent[0];
var $modalFooter = $modal.getElementsByClassName("modal-footer"); var $modalFooter = $modalFooter[0];
var $modalBtnClose = $modal.getElementsByClassName("modal-close"); var $modalBtnClose = $modalBtnClose[0];


function modalDisplay(header, content, footer)
{
	$modal.style.display = "block";
	$modalHeader.innerHTML = header;
	$modalContent.innerHTML = content;
	$modalFooter.innerHTML = footer;
}

function modalZoom(el)
{
	// utworz content i przekaz do funkcji modal display
	var header = "";
	var content = el.innerHTML; 
	var footer = "";
	modalDisplay(header, content, footer);
}

var $elementsDisplayModal = document.querySelectorAll("[data-modal]");
$elementsDisplayModal.forEach(function(el){
	el.addEventListener("click", function(){

		var $type = el.getAttribute("data-modal");
		switch ($type) {
			case "modal-zoom":
				modalZoom(el);
				break;
		}

	});
});

function modalClose()
{
	$modal.style.display = "none";
}

$modalShadow.addEventListener("click", function(){
    modalClose();
});
$modalBtnClose.addEventListener("click", function(){
    modalClose();
});