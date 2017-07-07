$("#allContent").hide();
$("#schedCont").hide();
$("#aboutCont").hide();
$("#mediaCont").hide();
$("#lessCont").hide();
$("#albCont").hide();

$("#schedNav").click(function(){
	$("#aboutCont").hide();
	$("#mediaCont").hide();
	$("#lessCont").hide();
	$("#albCont").hide();
	$("#schedCont").fadeIn();
	$("#allContent").fadeIn();
});

$("#aboutNav").click(function(){
	$("#mediaCont").hide();
	$("#lessCont").hide();
	$("#schedCont").hide();
	$("#albCont").hide();
	$("#aboutCont").fadeIn();
	$("#allContent").fadeIn();
});

$("#mediaNav").click(function(){
	$("#aboutCont").hide();
	$("#lessCont").hide();
	$("#schedCont").hide();
	$("#albCont").hide();
	$("#mediaCont").fadeIn();
	$("#allContent").fadeIn();
});

$("#lessNav").click(function(){
	$("#aboutCont").hide();
	$("#mediaCont").hide();
	$("#schedCont").hide();
	$("#albCont").hide();
	$("#lessCont").fadeIn();
	$("#allContent").fadeIn();
});

$("#albNav").click(function(){
	$("#aboutCont").hide();
	$("#mediaCont").hide();
	$("#lessCont").hide();
	$("#schedCont").hide();
	$("#albCont").fadeIn();
	$("#allContent").fadeIn();
});

$(document).ready(main);