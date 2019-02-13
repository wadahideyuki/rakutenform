$(function(){
	$('a[href^="#"]').click(function(){
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

$("body").keydown(function(){
    if(event.keyCode == 13) {
        document.activeElement.blur();
        return false;
    }
});
  
$(".kiyaku").click(function(){
  $("#term").fadeIn();
  return false;
})
$(".close").click(function(){
  $("#term").fadeOut();
})
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
	/*
exvalidationLoad();
var validation = $('#form01').exValidation({
	rules: {
		shijoIdBox:"chkgroup chkrequiredshijo",
		nameBox: "chkgroup chkrequiredname",
		kanaBox: "chkgroup chkrequiredkananame chkkatakanakananame",
		genderBox: "sexchkcheckbox",
		hundleBox: "chkgroup chkrequire",
		telBox: "chkgroup telchkmin10 chknumonly",
		posBox: "chkgroup poschkmin7 chknumonly",
		address01: "prefchkselect",
		birthBox: "chkgroup birthdatechkselect",
		address02Box: "chkgroup chkrequiredaddress chkcity",
		address03Box:"chkgroup chkrequire",
		address04Box:"chkgroup chkrequire",
		emailBox:"chkgroup chkrequiredmail chkemail",
		job_id: "jobchkselect",
		ownershipBox: "carchkradio",
		purchase_timeBox: "carchkradio",
		purchase_degreeBox: "carchkradio",
		visitingBox: "carchkradio",
		interestBox: "carchkradio",
		permitBox: "carchkradio",
		has_dealerBox: "carchkradio",
		ownBox: "carchkradio",
		pass01Box: "chkgroup chkrequire",
		pass02Box: "chkgroup chkrequire",
		prizeBox:"prefchkselect",
		maker : "makerchkselect",
		car_id : "carchkselect",
		q4Box: "carchkradio",
		q5Box: "carchkradio",
		douiBox:"carchkradio",
		car_inspection_ym : "chkgroup carinspectionchkselect",
		regist_ym : "chkgroup registhkselect",
		ownership_carname : "ownershipcarnamechkselect",
		store : "storeinput",

	//messageBox: "chkgroup messagechkcheckbox"
	},
	errInsertPos: 'after',
	stepValidation: true,
	errPosition: 'fixed',
	errTipCloseBtn: false,
	errMsgPrefix : ''
});*/

	
	$(".select-box select,.select-box").on("click" , function(){
		$("input,select",this).addClass("on");
	})
	
	$("#maker").on("change",function(){
		var maker = $(this).val();
    if(maker == 99){//所有していない
//      $(".makerRow").hide();
    }else{
//      $(".makerRow").show();
      $("#car_id").val("");
      $("#car_id optgroup").hide();
      $("#car_id optgroup[data-opt=" + maker + "]").show();
      var optFlag = $("#car_id optgroup[data-opt=" + maker + "]").val();
      if(optFlag == false){
        $(".carname-select").show();
        $(".carname-input").hide();
      }else{
        $(".carname-select").hide();
        $(".carname-input").show();
      }
    }
	});
	$("#ownBox input").on("change",function(){
		var ownValue = $(this).val();
		
		if(ownValue == 99){
			$(".q2Box").removeClass("carOwn");
		}else{
			$(".q2Box").addClass("carOwn");
		}
	});
	
});//fncEnd





