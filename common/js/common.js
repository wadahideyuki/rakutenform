var carOpt = {};
$(function () {
	$('a[href^="#"]').on('click', function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	/*
	 enterで自動送信の抑止
	 ================*/
	$("body").on('keydown',function (event) {
		if (event.keyCode == 13 && document.activeElement.type != 'textarea') {
			document.activeElement.blur();
			return false;
		}
	});

	$(".kiyaku").click(function () {
		$("#term").fadeIn();
		return false;
	});
	
	$(".close").click(function () {
		$("#term").fadeOut();
	});
	
	$('#term').click(function () {
		$('#term').fadeOut();
		return false;
	});

	$('#term > .wrap').click(function (event) {
		event.stopPropagation();
	});

	$('.close').click(function (event) {
		event.preventDefault();
	});


	$("#adrSrch").on('click',function(ev){
		ev.preventDefault();
		AjaxZip3.zip2addr('zip','','address01','address02','address03','address04');
	});
	
	$(".select-box select,.select-box").on("click", function () {
		$("input,select", this).addClass("on");
	});
	
	$("#car_id optgroup").each(function(){
		var mk = $(this).attr('data-opt');
		$(this).find('option').each(function(){
			if(!$.isArray(carOpt[mk])){
				carOpt[mk] = [];
			}
			carOpt[mk].push({ id: $(this).val() , name: $(this).text() });
		});
	});

	$("#maker").on("change", function () {
		changeMaker();
	});
	
	$("#car_inspection_year").on('change',function(){
		changeInspection();
	});
	
	$("input[name='has_dealer']").on('change',function(){
		changeDealer();
	});

	$("input[name='is_entry']").on('change',function(){
		changeEntry();
	});
	
	init();
});

function init(){
	changeInspection();
	changeDealer();
	changeMaker();
	changeEntry();
}

function changeInspection(){
	var y = $("#car_inspection_year").val();
	if(y.match(/^2\d{3}$/)){
		$("#car_inspection_month").prop("disabled",false);
	}else{
		$("#car_inspection_month").val("");
		$("#car_inspection_month").prop("disabled",true);
	}
}

function changeDealer(){
	var v = $("input[name='has_dealer']:checked").val();
	if(v == 1){
		$(".boxDealer select").prop("disabled",false);
		$(".boxDealer").removeClass("disable_box");
	}else{
		$("#sel_dealer").val("");
		$("#sel_shop").val("");
		$(".boxDealer select").prop("disabled",true);
		$(".boxDealer").addClass("disable_box");
	}
}

function changeMaker(){
	var maker = $("#maker").val();
	var nowCar = $("#car_id").val();

	$("#car_id optgroup").remove();
	$("#car_id option[value!='']").remove();

	if(carOpt[maker] && carOpt[maker].length){
		for(i=0;i<carOpt[maker].length;i++){
			var tmp = $("<option>");
			tmp.val(carOpt[maker][i]['id']);
			tmp.text(carOpt[maker][i]['name']);
			if(carOpt[maker][i]['id'] == nowCar){
				tmp.prop('selected',true);
			}
			$("#car_id").append(tmp);
		}
		
		$(".carname-select").show();
		$(".carname-input").hide();
	} else {
		$(".carname-select").hide();
		$(".carname-input").show();
	}
	
	if(maker == '99' || maker == ''){
		$("#car_id").val("");
		$("input[name=car_other]").val("");
		$("#car_inspection_year").val("");
		$("#car_inspection_month").val("");
		$(".boxCar input").prop("disabled",true);
		$(".boxCar select").prop("disabled",true);
		$(".boxCar").addClass("disable_box");
	}else{
		$(".boxCar input").prop("disabled",false);
		$(".boxCar select").prop("disabled",false);
		$(".boxCar").removeClass("disable_box");
	}
}

function changeEntry(){
	var v = $("input[name='is_entry']:checked").val();
	if(v == 1){
		$("#boxPasswd input").prop("disabled",false);
		$("#boxPasswd").removeClass("disable_box");
	}else{
		$("#boxPasswd input").val("");
		$("#boxPasswd input").prop("disabled",true);
		$("#boxPasswd").addClass("disable_box");
	}
}
