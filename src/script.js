$(document).ready(function () {
	var video1_pos = $("#video1").offset().top;
	var video2_pos = $("#video2").offset().top;
	var video1_end = $("#video1").offset().top + $("#v1frame").height();
	var video2_end = $("#video2").offset().top + $("#v2frame").height();
	console.log(video1_end);
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		console.log(scroll);
		var winh = $(window).height();
		if(scroll > video1_pos && scroll < video1_end){
			$("#video1")[0].play();
		}else {
			$("#video1")[0].pause();
		}
		if(scroll > video2_pos && scroll < video2_end){
			$("#video2")[0].play();
		}else {
			$("#video2")[0].pause();
		}

	});
});
