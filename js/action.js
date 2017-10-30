$(document).ready(function(){
	$(".sign-form").slideUp(0);
	$(".b-sign").click(function(){
		$(".make-list").slideUp(3000);
		$(".log-form").slideUp(3000, function(){
			$(".left-side").removeClass("col-sm-7").addClass("col-sm-5");
			$(".right-side").removeClass("col-sm-5").addClass("col-sm-7");
			$(".sign-form").slideDown(3000);
		});
	});
	$(".b-log").click(function(){
		$(".sign-form").slideUp(3000, function(){
			$(".right-side").removeClass("col-sm-7").addClass("col-sm-5");
			$(".left-side").removeClass("col-sm-5").addClass("col-sm-7");
			$(".log-form").slideDown(3000);
			$(".make-list").slideDown(3000);
		});
	});
});