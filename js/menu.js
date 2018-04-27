/* MENU */
var $navmenu = document.getElementsByClassName("navmenu"); $navmenu = $navmenu[0];
var $navbuttons =  document.getElementsByClassName("navbuttons"); $navbuttons = $navbuttons[0];
var $hamburger = $navbuttons.getElementsByClassName("navopen"); $hamburger = $hamburger[0];
var $navclose = $navbuttons.getElementsByClassName("navclose"); $navclose = $navclose[0];

function openmenu()
{
    $navmenu.style.display = "block";
    $navclose.style.display = "block";
    $hamburger.style.display = "none";
}
function closemenu()
{
    $navmenu.style.display = "none";
    $navclose.style.display = "none";
    $hamburger.style.display = "block";
}

$hamburger.addEventListener("click", function(){
    openmenu();
});
$navclose.addEventListener("click", function(){
    closemenu();
});
