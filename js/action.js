$(document).ready(function(){
	$(".sign-form").slideUp(0);
	$(".b-log a").css("opacity", 1);
	$(".b-sign").click(function(){
		$(".b-sign a").css("opacity", 1);
		$(".b-log a").css("opacity", .5);
		$(".log-form").slideUp(1000);
		$(".make-list").slideUp(1000, function(){
			$(".left-side").removeClass("col-sm-7").addClass("col-sm-5");
			$(".right-side").removeClass("col-sm-5").addClass("col-sm-7");
			$(".sign-form").slideDown(1000);
		});
	});
	$(".b-log").click(function(){
		$(".b-log a").css("opacity", 1);
		$(".b-sign a").css("opacity", .5);
		$(".sign-form").slideUp(1000, function(){
			$(".right-side").removeClass("col-sm-7").addClass("col-sm-5");
			$(".left-side").removeClass("col-sm-5").addClass("col-sm-7");
			$(".log-form").slideDown(1000);
			$(".make-list").slideDown(1000);
		});
	});
});