// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

//fonction qui englobe tout le js 
$(document).ready(function(){

//definitions de variables sélecteurs jquery
$presentation = $("#presentation");
$menu = $("#menu");
$bieng = $("#bieng");
$presentation_list = $("#presentation_list");
$menu_list = $("#menu_list");
$bieng_list = $("#bieng_list");
$left = $("#left");
$right = $("#right");

//Je masque mes listes au chargement 
$presentation_list.hide();
$menu_list.hide();
$bieng_list.hide();

//Lorsque je clique sur présentation, je fais apparaitre le bon menu
$presentation.on('click', function() {
	$menu_list.slideUp();
    $bieng_list.slideUp();
	$presentation_list.slideDown();
});

//idem menu
$menu.on('click', function() {
	$presentation_list.slideUp();
    $bieng_list.slideUp();
	$menu_list.slideDown();
});

//idem bieng
$bieng.on('click', function() {
	$menu_list.slideUp();
    $presentation_list.slideUp();
	$bieng_list.slideDown();
});

//Je masque toutes les div supérieures à l'élement 0 dans le carousel
$("#carousel > div:gt(0)").hide();

//Toutes les 5 sec, j'effectue la série d'action suivante sur la première div du carousel
setInterval(function() {
  $('#carousel > div:first')
    .fadeOut(1000) //je la fais disparaitre
    .next() //je passe à la suivante
    .fadeIn(1000) // je la fais apparaitre
    .end() //reviens sur la première div du carousel
    .appendTo('#carousel'); //déplace cette première div à la fin du carousel pour avoir une autre div en première et faire défiler le carousel
}, 5000);

//fonction click droit, idem qu'au dessus
$right.on('click', function() {
    $('#carousel > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#carousel');
});

//fonction click gauche
$left.on('click', function() {
    $('#carousel > div:first') 
    .fadeOut(1000) //je fais disparaitre la div à l'écran
    $('#carousel > div:last') // je sélectionne la dernière div du carousel
    .fadeIn(1000) // je la fais apparaitre
    .prependTo('#carousel'); // je l'ajoute en première position dans le carousel pour que ca redéfile à partir de celle ci
});


})