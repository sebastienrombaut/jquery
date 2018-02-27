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

$(document).ready(function(){

//alert("JS fonctionne");


$presentation = $("#presentation");
$menu = $("#menu");
$bieng = $("#bieng");
$presentation_list = $("#presentation_list");
$menu_list = $("#menu_list");
$bieng_list = $("#bieng_list");

$presentation_list.hide();
$menu_list.hide();
$bieng_list.hide();

$presentation.on('click', function() {
	$menu_list.slideUp();
    $bieng_list.slideUp();
	$presentation_list.slideDown();
});

$menu.on('click', function() {
	$presentation_list.slideUp();
    $bieng_list.slideUp();
	$menu_list.slideDown();
});

$bieng.on('click', function() {
	$menu_list.slideUp();
    $presentation_list.slideUp();
	$bieng_list.slideDown();
});

})