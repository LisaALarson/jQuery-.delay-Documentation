$(document).ready(function(){
	//some-value (in html) looks like someValue (in jquery)
	//first parentheses contains the div id, second contains the name of the data (in camelcase)
	//alert($("#someDiv").data("someOtherValue"));

	//$(".animatedDiv").css({opacity:0,0});
	//targetting all animated Div classes, using the fadeOut jquery function to fade out our div.
	//put number in fade out parenthesis to change duration, add function in parenthesis to add functionality
	// $(".animatedDiv").fadeToggle(10000, function(){
	// 	$(this).fadeToggle(10000);
	// });

//DEMO
//slide up
$(".animatedDiv").on("mouseover", function(){
	$(".animatedDiv").slideUp(2000).delay(500).slideDown(2000);
	$(".someOtherDiv").slideUp(2000).delay(500).slideDown(2000);
	$(".purpleDiv").slideUp(2000).delay(500).slideDown(2000);
	$(".greenDiv").slideUp(2000).delay(500).slideDown(2000);
});

//slide left
$(".animatedDiv").on("mouseover", function(){
	$(".animatedDiv").hide("slide", {direction: "right"}, 2000).delay(500).show("slide", {direction:"right"},2000);
	$(".someOtherDiv").hide("slide", {direction: "left"}, 2000).delay(500).show("slide", {direction:"left"},2000);
	$(".purpleDiv").hide("slide", {direction: "right"}, 2000).delay(500).show("slide", {direction:"right"},2000);
	$(".greenDiv").hide("slide", {direction: "left"}, 2000).delay(500).show("slide", {direction:"left"},2000);
});


//ACCORDIAN EFFECT
// $(".animatedDiv").on("mouseover", function(){
// 	$(".animatedDiv").slideUp(2000).delay(2000).slideDown(2000);
// 	$(".someOtherDiv").slideUp(2000).delay(1000).slideDown(2000);
// 	$(".purpleDiv").slideUp(2000).delay(500).slideDown(2000);
// 	$(".greenDiv").slideUp(2000).delay(0).slideDown(2000);
// });



//CRAZY
// $(".animatedDiv").on("mouseover", function(){
// 	$(".animatedDiv").slideUp(2000).delay(350).slideDown(2000);
// 	$(".someOtherDiv").slideUp(2000).delay(750).slideDown(2000);
// 	$(".purpleDiv").slideUp(2000).delay(500).slideDown(2000);
// 	$(".greenDiv").slideUp(2000).delay(0).slideDown(2000);
// });

// //slide left
// $(".animatedDiv").on("mouseover", function(){
// 	$(".animatedDiv").hide("slide", {direction: "right"}, 2000).delay(1250).show("slide", {direction:"right"},2000);
// 	$(".someOtherDiv").hide("slide", {direction: "left"}, 2000).delay(250).show("slide", {direction:"left"},2000);
// 	$(".purpleDiv").hide("slide", {direction: "right"}, 2000).delay(100).show("slide", {direction:"right"},2000);
// 	$(".greenDiv").hide("slide", {direction: "left"}, 2000).delay(2000).show("slide", {direction:"left"},2000);
// });





	// $(".animatedDiv").slideToggle(10000, function(){
	// 	$(this).slideToggle(10000);
	// });


	// var divToggle = false;
	// var divAnimating = false;

	// click
	// dblclick = double click
	// focusin
	// focusout
	// mousedown
	// mouseup
	// mousemove
	// mouseout
	// mouseover  (equivelent to hover)
	// mouseleave
	// mouseenter

	// $(".animatedDiv").on('click', function(){
	// 	// ! stands for "not". so, here it is saying if divAnimating is not true.  (other example 5!=2)
	// 	if(!divAnimating){
	// 		if(divToggle){
	// 			$(this).fadeTo(1000, 1, function(){
	// 				divAnimating = false;
	// 			});
	// 			divToggle = false;
	// 			divAnimating = true;
	// 		}
	// 		else{
	// 			$(this).fadeTo(1000, 0.1, function(){
	// 				divAnimating = false;
	// 			});
	// 			divToggle = true;
	// 			divAnimating = true;
	// 		}
	// 	}

		
	// });//closes .animated div


});//closes document ready