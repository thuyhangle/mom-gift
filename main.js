$("#mammam").click(function() {
	$("#meoi-content").hide(0);
	$("#mecon-content").hide(0);
	$("#mammam-content").show(200);

	$('html, body').animate({
        scrollTop: $("#mammam-content").offset().top
    }, 250);
});

$("#mecon").click(function() {
	$("#meoi-content").hide(0);
	$("#mammam-content").hide(0);
	$("#mecon-content").show(200);
	$('html, body').animate({
        scrollTop: $("#mecon-content").offset().top
    }, 250);
});

$("#meoi").click(function() {
	$("#mammam-content").hide(0);
	$("#mecon-content").hide(0);
	$("#meoi-content").show(250);
	$('html, body').animate({
        scrollTop: $("#meoi-content").offset().top
    }, 200);
});

$("#up").click(function() {
	$("#mammam-content").hide(0);
	$("#mecon-content").hide(0);
	$("#meoi-content").hide(0);
	$("#tren").show(250);
	$('html, body').animate({
        scrollTop: $("#tren").offset().top
    }, 200);
});

$("#foot").click(function() {
	$("#mammam-content").hide(0);
	$("#mecon-content").hide(0);
	$("#meoi-content").hide(0);
	$("#tren").show(250);
	$('html, body').animate({
        scrollTop: $("#tren").offset().top
    }, 350);
});

