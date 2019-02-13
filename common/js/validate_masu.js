$(function () {
	$.fn.autoKana('#member_name1', '#member_kana1', {katakana: true});
	$.fn.autoKana('#member_name2', '#member_kana2', {katakana: true});


	$('#confirmBtn').attr("disabled", "disabled");


/*---------- 起動 ----------*/
	$('input[name="goconfirm"]:checkbox').change(function () {
		showRequireItemCount();
	});
	$('input[name="goconfirm"]:checkbox').focusout(function (e) {
    if (!$('input[name="goconfirm"]:checkbox').prop('checked')){
      $('#conf_error_front').show();
    }else{
      $('#conf_error_front').hide();
    }
	});

	//
	// メールアドレス
	//
	$("input[name='pcmail']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_email(val);
		showRequireItemCount();
	});

	//
	// 職業
	//
	$("select[name='job']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_job(val);
		showRequireItemCount();
	});

	//
	// イベント
	//
	$("select[name='event']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_event(val);
		showRequireItemCount();
	});

	//
	// メーカー
	//
	$("select[name='maker']").change(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_maker(val);
		showRequireItemCount();
	});
	$("select[name='maker']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_maker(val);
		showRequireItemCount();
	});
	//
	// 車種名
	//
	$("select[name='car_name']").change(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_name']").val();
		var val2 = $("input[name='car_name']").val();
		validate_carname(val, val2);
		showRequireItemCount();
	});
	$("select[name='car_name']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_name']").val();
		var val2 = $("input[name='car_name']").val();
		validate_carname(val, val2);
		showRequireItemCount();
	});
	$("input[name='car_name']").change(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_name']").val();
		var val2 = $("input[name='car_name']").val();
		validate_carname(val, val2);
		showRequireItemCount();
	});
	$("input[name='car_name']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_name']").val();
		var val2 = $("input[name='car_name']").val();
		validate_carname(val, val2);
		showRequireItemCount();
	});

	$("select[name='car_inspection_year']").change(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_inspection_year']").val();
		var val2 = $("select[name='car_inspection_month']").val();
		validate_inspection(val, val2);
		showRequireItemCount();
	});
	$("select[name='car_inspection_year']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_inspection_year']").val();
		var val2 = $("select[name='car_inspection_month']").val();
		validate_inspection(val, val2);
		showRequireItemCount();
	});
	$("select[name='car_inspection_month']").change(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_inspection_year']").val();
		var val2 = $("select[name='car_inspection_month']").val();
		validate_inspection(val, val2);
		showRequireItemCount();
	});
	$("select[name='car_inspection_month']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $("select[name='car_inspection_year']").val();
		var val2 = $("select[name='car_inspection_month']").val();
		validate_inspection(val, val2);
		showRequireItemCount();
	});



	//
	// パスワード
	//
	$("input[name='password']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var password = $('input[name=password]').val();
		var password_confirm = $('input[name=password_confirm]').val();
		validate_password(password, password_confirm);

	});
	$("input[name='password_confirm']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var password = $('input[name=password]').val();
		var password_confirm = $('input[name=password_confirm]').val();
		validate_password(password, password_confirm);
		showRequireItemCount();
	});

	//
	// 姓
	//
	$("input[name='member_name1']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		if (e.keyCode != 13) {
			return true;
		}
		var val = $(this).val();
		validate_member_name1(val);
	});
	$("input[name='member_name1']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_member_name1(val);
		showRequireItemCount();
	});

	//
	//名
	//
	$("input[name='member_name2']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		if (e.keyCode != 13) {
			return true;
		}
		var val = $(this).val();
		validate_member_name2(val);
	});
	$("input[name='member_name2']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_member_name2(val);
		showRequireItemCount();
	});

	//
	//セイ
	//
	$("input[name='member_kana1']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		if (e.keyCode != 13) {
			return true;
		}
		var val = $(this).val();
		validate_kana1(val);
	});
	$("input[name='member_kana1']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_kana1(val);
		showRequireItemCount();
	});

	//
	// メイ
	//
	$("input[name='member_kana2']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		if (e.keyCode != 13) {
			return true;
		}
		var val = $(this).val();
		validate_kana2(val);
	});
	$("input[name='member_kana2']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_kana2(val);
		showRequireItemCount();
	});

	//
	// 電話番号
	//
	$("input[name='tel1']").keyup(function (e) {
		return validate_tel();
	});
	$("input[name='tel1']").focusout(function (e) {
		showRequireItemCount();
		return validate_tel();
	});

	//
	// 郵便番号
	//
	$("input[name='zip1']").keyup(function (e) {
		return	validate_zip();
	});
	$("input[name='zip1']").focusout(function (e) {
		return	validate_zip();
	});

	//
	// 都道府県
	//
	$("select[name='pref']").change(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_pref(val);
		showRequireItemCount();
	});
	$("select[name='pref']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_pref(val);
		showRequireItemCount();
	});

	//
	// 市区町村
	//
	$("input[name='address1']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address1(val);
	});
	$("input[name='address1']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address1(val);
		showRequireItemCount();
	});

	//
	// 町域
	//
	$("input[name='address2']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address2(val);
	});
	$("input[name='address2']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address2(val);
		showRequireItemCount();
	});

	//
	// 番地
	//
	$("input[name='address3']").keyup(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address3(val);
	});

	$("input[name='address3']").focusout(function (e) {
		if (e.keyCode == 9) {
			return true;
		}
		var val = $(this).val();
		validate_address3(val);
		showRequireItemCount();
	});

	//
	//生年月日
	//
	$("select[name='byear']").change(function (e) {
		var bmonth = $("select[name=bmonth]").children(':selected').val();
		var bday = $("select[name=bday]").children(':selected').val();
		if (!bmonth) {
			return;
		}
		if (!bday) {
			return;
		}
		validate_birth(e);
		showRequireItemCount();
	});
	$("select[name='bmonth']").change(function (e) {
		var byear = $("select[name=byear]").children(':selected').val();
		var bday = $("select[name=bday]").children(':selected').val();
		if (!byear) {
			return;
		}
		if (!bday) {
			return;
		}
		validate_birth(e);
		showRequireItemCount();
	});
	$("select[name='bday']").change(function (e) {
		var byear = $("select[name=byear]").children(':selected').val();
		var bmonth = $("select[name=bmonth]").children(':selected').val();

		if (!byear) {
			return;
		}
		if (!bmonth) {
			return;
		}
		validate_birth(e);
		showRequireItemCount();
	});

	//
	// 確認画面ボタン
	//
	$('#form').submit(function (e) {
		e.preventDefault();

		if ($('#mode').val() != "confirm") {
			return;
		}

		showRequireItemCount();

		if (!$('input[name="goconfirm"]:checkbox').prop('checked') || !_googleRecapchaCheck) {
			return false;
		}

		sex1 = $('input[name=sex]:eq(0)').prop('checked');
		sex2 = $('input[name=sex]:eq(1)').prop('checked');

		if (!sex1 && !sex2) {
			$('#sex_error_front').show();
			$('#sex_error').hide();
		} else {
			$('#sex_error_front').hide();
			$('#sex_error').hide();
		}

		if ($('input[name=user_id]').val() == "") {
			var password = $('input[name=password]').val();
			var password_confirm = $('input[name=password_confirm]').val();
			e_password = validate_password(password, password_confirm);
		}

		e_email = validate_email($("input[name='pcmail']").val());

		e_job = validate_job($("select[name='job']").val());

		e_event = validate_event($("select[name='event']").val());

		e_maker = validate_maker($("select[name='maker']").val());
		e_carname = validate_carname($("select[name='maker']").val(), $("input[name='maker']").val());
		e_inspection_year = validate_inspection_year($("select[name='car_inspection_year']").val());
		e_inspection_month = validate_inspection_month($("select[name='car_inspection_month']").val());

		e_member_name1 = validate_member_name1($("input[name='member_name1']").val());
		e_member_name2 = validate_member_name2($("input[name='member_name2']").val());

		e_kana1 = validate_kana1($("input[name='member_kana1']").val());
		e_kana2 = validate_kana2($("input[name='member_kana2']").val());

		e_pref = validate_pref($("select[name='pref']").val());
		e_addr1 = validate_address1($("input[name='address1']").val());
		e_addr2 = validate_address2($("input[name='address2']").val());
		e_addr3 = validate_address3($("input[name='address3']").val());

		e_tel = validate_tel();
		e_zip = validate_zip();

		e_birth = val_birth();

		/*animateScrollがあった*/

		setTimeout(function () {
			$('#form').off('submit');
			$('#form').submit();
		}, 300);

		return true;
	});	//end #form.submit


/*---------- 関数 ----------*/
	function val_birth() {
		var byear = $("select[name=byear]").children(':selected').val();
		var bmonth = $("select[name=bmonth]").children(':selected').val();
		var bday = $("select[name=bday]").children(':selected').val();

		$('#birth_error_front').hide();

		if (!byear || !bmonth || !bday) {
			$('#birth_error').hide();
			$('#birth_error_front').show();
			return false;
		} else {
			$('#birth_error').hide();
		}
		return true;
	}

	function validate_email(val) {
		$('#pcmail_error_front_blank').hide();
		$('#pcmail_error_front_email').hide();
		if (!val) {
			$('#pcmail_error').hide();
			$('#pcmail_error_front_blank').show();
			return false;
		} else {
			if (!val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
				$('#pcmail_error').hide();
				$('#pcmail_error_front_email').show();
				return false;
			} else {
				$('#pcmail_error').hide();
			}
		}
		return true;
	}

	function validate_job(val) {
		$('#job_error_front_blank').hide();
		$('#job_error_front_job').hide();
		if (!val) {
			$('#job_error').hide();
			$('#job_error_front_blank').show();
			return false;
		}
		return true;
	}

	function validate_event(val) {
		$('#event_error_front_blank').hide();
		$('#event_error_front_event').hide();
		if (!val) {
			$('#event_error').hide();
			$('#event_error_front_blank').show();
			return false;
		}
		return true;
	}

	function validate_maker(val) {
		$('#maker_error_front_blank').hide();
		$('#maker_error_front_maker').hide();
    $("select[name='car_name']").val("");
		$("input[name='car_name']").val("");
		$('#carname_error_front_blank').hide();
		$('#carname_error_front_blank2').hide();
		if (!val) {//未選択(メーカー別)
			$('#maker_error').hide();
			$('#maker_error_front_blank').show();
			return false;
		}else{//選択
      if(val == 99){//所有してない
        $(".makerRow").hide();
        $("select[name='car_inspection_year']").val("");
        $("select[name='car_inspection_month']").val("");
        $('#inspection_error_front_blank').hide();
      }else{
        $(".makerRow").show();
      }
    }
		return true;
	}
  //車種名
	function validate_carname(val1, val2) {
		$('#carname_error_front_blank').hide();
		$('#carname_error_front_blank2').hide();
    if(val1){
console.log("----------バリュー1----------");
    }else if(val2){
console.log("----------バリュー2----------");
    }else{
console.log("----------バリュー1と2が空----------");
      $('#carname_error_front_blank').show();
      $('#carname_error_front_blank2').show();
    }
console.log("val1の値: " + val1);
console.log("val2の値: " + val2);
		return true;
	}
  //車検時期
	function validate_inspection(val1, val2) {
console.log("------------------------------");
		$('#inspection_error_front_blank').hide();
if (!val1) {
console.log("----------バリュー1が空----------");
}
if (!val2) {
console.log("----------バリュー2が空----------");
}
console.log("val1の値: " + val1);
console.log("val2の値: " + val2);
		if (!val1 || !val2) {
console.log("----------バリュー1か2が空----------");
			$('#inspection_error_front_blank').show();
			return false;
		}
		return true;
	}

	function validate_password(val, val2) {
		$('#password_error').hide();
		$('#password_error_front_blank').hide();
		$('#password_error_front_diff').hide();
		if (!val || !val2) {
			$('#password_error_front_diff').hide();
			$('#password_error_front_blank').show();
			return false;
		} else {
			if (val != val2) {
				$('#password_error_front_blank').hide();
				$('#password_error_front_diff').show();
				return false;
			}
		}
		return true;
	}

	function validate_member_name1(val) {
		$('#member_name1_error_front_blank').hide();
		$('#member_name1_error_front_include_kana').hide();

		if (!val) {
			$('#member_name1_error').hide();
			$('#member_name1_error_front_blank').show();
			$('#member_name1_error_front_include_kana').hide();
			return false;
		} else {
			$('#member_name1_error').hide();
		}
		return true;
	}

	function validate_member_name2(val) {
		$('#member_name2_error_front_blank').hide();
		$('#member_name2_error_front_include_kana').hide();

		if (!val) {
			$('#member_name2_error').hide();
			$('#member_name2_error_front_blank').show();
			$('#member_name2_error_front_include_kana').hide();
			return false;
		} else {
			$('#member_name2_error').hide();
		}
		return true;
	}

	function validate_kana1(val) {
		$('#member_kana1_error_front_blank').hide();
		$('#member_kana1_error_front_kana').hide();
		if (!val) {
			$('#member_kana1_error').hide();
			$('#member_kana1_error_front_blank').show();
			return false;
		} else {
			if (val.match(/^[\u30A0-\u30FF]+$/)) {
				$('#member_kana1_error').hide();
			} else {
				$('#member_kana1_error').hide();
				$('#member_kana1_error_front_kana').show();
				return false;
			}
		}
		return true;
	}

	function validate_kana2(val) {
		$('#member_kana2_error_front_blank').hide();
		$('#member_kana2_error_front_kana').hide();
		if (!val) {
			$('#member_kana2_error').hide();
			$('#member_kana2_error_front_blank').show();
			return false;
		} else {
			if (val.match(/^[\u30A0-\u30FF]+$/)) {
				$('#member_kana2_error').hide();
			} else {
				$('#member_kana2_error').hide();
				$('#member_kana2_error_front_kana').show();
				return false;
			}
		}
		return true;
	}

	function validate_tel() {
		var tel1 = $("input[name='tel1']").val();

		$('#tel_error_front_blank').hide();
		$('#tel_error_front_num').hide();
		if (!tel1) {
			$('#tel_error').hide();
			$('#tel_error_front_blank').show();
			return false;
		}

		if (tel1 && !tel1.match(/^[0-9]+$/)) {
			$('#tel_error').hide();
			$('#tel_error_front_num').show();
			return false;
		}

		return true;
	}

	function validate_zip() {
		var zip1 = $("input[name='zip1']").val();

		$('#zip_error_front_blank').hide();
		$('#zip_error_front_num').hide();

		if (!zip1) {
			$('#zip_error').hide();
			$('#zip_error_front_blank').show();
			return false;
		}

		if (zip1 && !zip1.match(/^[0-9]+$/)) {
			$('#zip_error').hide();
			$('#zip_error_front_num').show();
			return false;
		}

		if (zip1 && zip1.length != 7) {
			$('#zip_error').hide();
			$('#zip_error_front_num').show();
			return false;
		}

		return true;
	}

	function validate_pref(val) {
		$('#pref_error_front_blank').hide();
		if (!val) {
			$('#pref_error').hide();
			$('#pref_error_front_blank').show();
			return false;
		} else {
			$('#pref_error').hide();
		}
		return true;
	}

	function validate_address1(val) {
		$('#address1_error_front_blank').hide();
		if (!val) {
			$('#address1_error').hide();
			$('#address1_error_front_blank').show();
			return false;
		} else {
			$('#address1_error').hide();
		}
		return true;
	}

	function validate_address2(val) {
		$('#address2_error_front_blank').hide();
		if (!val) {
			$('#address2_error').hide();
			$('#address2_error_front_blank').show();
			return false;
		} else {
			$('#address2_error').hide();
		}
		return true;
	}

	function validate_address3(val) {
		$('#address3_error_front_blank').hide();
		if (!val) {
			$('#address3_error').hide();
			$('#address3_error_front_blank').show();
			return false;
		} else {
			$('#address3_error').hide();
		}
		return true;
	}

	function validate_birth(e) {
		var byear = $("select[name=byear]").children(':selected').val();
		var bmonth = $("select[name=bmonth]").children(':selected').val();
		var bday = $("select[name=bday]").children(':selected').val();

		$('#birth_error_front').hide();
		if (!byear || !bmonth || !bday) {
			$('#birth_error').hide();
			$('#birth_error_front').show();
		} else {
			$('#birth_error').hide();
		}
	}

	var zen = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョ";
	function isIncludeZenKana(obj) {
		if (!obj) {
			return false;
		}
		var mes = "";

		for (var i = 0; i < obj.length; i++) {
			/* 文字列を１文字ずつ調べる */
			var tmp1 = obj.substr(i, 1);
			for (var j = 0; j < zen.length; j++) {
				var tmp2 = zen.substr(j, 1);
				if (tmp1 == tmp2) {
					return true;
				}
			}
		}
		return false;
	}

	function isIncludeHanNumAlpha(obj) {
		if (!obj) {
			return false;
		}
		if (obj.match(/[\uFF65-\uFF9F]/)) {
			return true;
		} else {
			return false;
		}
	}

	$('input[name="ownerf"]:radio').change(function () {
		var ownerf1 = $('input[name=ownerf]:eq(0)').prop('checked');
		var ownerf2 = $('input[name=ownerf]:eq(1)').prop('checked');
		if (ownerf1 || ownerf2) {
			// 必須
			$('.car_requierd').show();
		} else {
			// 必須ではない
			$('.car_requierd').hide();
		}
		showRequireItemCount();
	});

	$("select[name='subaru_car_id']").change(function (e) {
		var val = $(this).val() || null;
		if (val) {
			$('input[name=ownerf]:eq(0)').prop('checked', true);
			$('.car_requierd').show();
		}
		showRequireItemCount();
	});
	$("select[name='maker_id']").change(function (e) {
		var val = $(this).val() || null;
		if (val) {
			$('input[name=ownerf]:eq(1)').prop('checked', true);
			$('.car_requierd').show();
		}
		showRequireItemCount();
	});


	$("input[name='zip1']").focusout(function (e) {
		showRequireItemCount();
	});

	$("input[name='sex']").change(function (e) {
		showRequireItemCount();
	});

	$("select[name='mot_test1']").change(function (e) {
		showRequireItemCount();
	});
	$("select[name='mot_test2']").change(function (e) {
		showRequireItemCount();
	});

	$("select[name='holdings']").change(function (e) {
		showRequireItemCount();
	});

	showRequireItemCount();
});

var _googleRecapchaCheck = true;
function recaptchaCallback(code) {
	if (code != "") {
//		if ($('#goconfirm1').prop('checked')) {
			$('#submit-button button').removeAttr('disabled');
//		}
		_googleRecapchaCheck = true;
	}
}
function recaptchaExpireCallback() {
	_googleRecapchaCheck = false;
	$('#submit-button button').attr('disabled','disabled');
}

/*$('.nokori-list')に関する記述を削除*/
function showRequireItemCount() {
	var count = 0;

	//氏名
	var member_name1 = $("input[name='member_name1']").val();
	var member_name2 = $("input[name='member_name2']").val();
	if (!member_name1 || !member_name2) {
		count = count + 1;
	}

	//フリガナ
	var member_kana1 = $("input[name='member_kana1']").val();
	var member_kana2 = $("input[name='member_kana2']").val();
	if (!member_kana1 || !member_kana2) {
		count = count + 1;
	}

	// 郵便番号
	var zip1 = $("input[name='zip1']").val();
	if (!zip1) {
		count = count + 1;
	}

	//住所
	var e_pref = $("select[name='pref']").val();
	var e_addr1 = $("input[name='address1']").val();
	var e_addr2 = $("input[name='address2']").val();
	var e_addr3 = $("input[name='address3']").val();
	if (!e_pref || !e_addr1 || !e_addr2 || !e_addr3) {
		count = count + 1;
	}

	//性別
	var sex1 = $('input[name=sex]:eq(0)').prop('checked');
	var sex2 = $('input[name=sex]:eq(1)').prop('checked');
	if (!sex1 && !sex2) {
		count = count + 1;
	}

	//生年月日
	var byear = $("select[name=byear]").children(':selected').val();
	var bmonth = $("select[name=bmonth]").children(':selected').val();
	var bday = $("select[name=bday]").children(':selected').val();
	if (!byear || !bmonth || !bday) {
		count = count + 1;
	}

	// 電話番号
	var tel1 = $("input[name='tel1']").val();
	if (!tel1) {
		count = count + 1;
	}

	//メールアドレス
	var email = $("input[name='pcmail']").val();
	if (!email) {
		count = count + 1;
	}

	//職業
	var job = $("select[name='job']").val();
	if (!job) {
		count = count + 1;
	}

	//イベント
	var event = $("select[name='event']").val();
	if (!event) {
		count = count + 1;
	}

	//メーカー
	var maker = $("select[name='maker']").val();

	//車種名
	var carname1 = $("select[name='caname']").val();
	var carname2 = $("input[name='caname']").val();

	//車検時期
	var inspection1 = $("select[name='car_inspection_year']").val();
	var inspection2 = $("select[name='car_inspection_month']").val();

	if (!maker) {//未選択
		count = count + 3;
	}else{//メーカー選択
    if (!carname1 && !carname2) {//両方空
      count = count + 1;
    }
    if (inspection1 || inspection2) {//どちらかが空
      count = count + 1;
    }
  }



	//　新規登録の場合
	if ($('input[name=user_id]').val() == "") {
		var password = $('input[name=password]').val();
		var password_confirm = $('input[name=password_confirm]').val();
		if (!password || !password_confirm) {
			count = count + 1;
		}
	}

	// お持ちの車
	var ownerf1 = $('input[name=ownerf]:eq(0)').prop('checked');
	var ownerf2 = $('input[name=ownerf]:eq(1)').prop('checked');
	var ownerf3 = $('input[name=ownerf]:eq(2)').prop('checked');

	if (ownerf1 || ownerf2) {
		if (ownerf1) {
			// 車種名
			var subaru_car_id = $("select[name='subaru_car_id']").children(':selected').val();
			if (!subaru_car_id) {
				count = count + 1;
			}
		}
		if (ownerf2) {
			// メーカー名
			var maker_id = $("select[name='maker_id']").children(':selected').val();
			if (!maker_id) {
				count = count + 1;
			}
		}
		// 車検時期
		var mot_test0 = $("select[name='mot_test1']").children(':selected').val();
		var mot_test1 = $("select[name='mot_test2']").children(':selected').val();
		if (!mot_test0 || !mot_test1) {
			count = count + 1;
		}
		// 保有年数
		var holdings = $("select[name='holdings']").children(':selected').val();
		if (!holdings) {
			count = count + 1;
		}

	}

	// 個人情報の取扱い
	if (!$('#goconfirm1').prop('checked')) {
		count = count + 1;
	}

	if (count > 0) {
		$('#nokori-button').show();
		$('.nokori-txt').show();
		$('.nokori-count').html(count);
		$('.nokori-item').show();
		$('.nokori-list').show();
		$('#submit-button').hide();
	} else {
		$('#nokori-button').hide();
		$('.nokori-item').hide();
		$('.nokori-txt').hide();
		$('.nokori-list').empty();
		$('.nokori-list').hide();
		$('#submit-button').show();
	}
}	//end showRequireItemCount