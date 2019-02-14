$(function () {
  $.fn.autoKana('#member_name1', '#member_kana1', {
    katakana: true
  });
  $.fn.autoKana('#member_name2', '#member_kana2', {
    katakana: true
  });


  $('#confirmBtn').attr("disabled", "disabled");


  /*---------- 起動 ----------*/
  $('input[name="goconfirm"]:checkbox').change(function () {
    showRequireItemCount();
  });
  $('input[name="goconfirm"]:checkbox').focusout(function (e) {
    if (!$('input[name="goconfirm"]:checkbox').prop('checked')) {
      $('#conf_error_front').show();
    } else {
      $('#conf_error_front').hide();
    }
  });

  //
  // メールアドレス
  //
  $("input[name='pcmail']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_email(val);
    showRequireItemCount();
  });

  //
  // 職業
  //
  $("select[name='job']").on('focusout change',function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_job(val);
    showRequireItemCount();
  });
  
  // パスワード
  //
  $("input[name='password']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var password = $('input[name=password]').val();
    var password_confirm = $('input[name=password_confirm]').val();
    validate_password(password, password_confirm);
    showRequireItemCount();
  });
  $("input[name='password_confirm']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var password = $('input[name=password]').val();
    var password_confirm = $('input[name=password_confirm]').val();
    validate_password(password, password_confirm);
    showRequireItemCount();
  });

  //
  // 姓
  //
  $("input[name='member_name1']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}
    if (e.keyCode != 13) {return true;}

    var val = $(this).val();
    validate_member_name1(val);
  });
  $("input[name='member_name1']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_member_name1(val);
    showRequireItemCount();
  });

  //
  //名
  //
  $("input[name='member_name2']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}
    if (e.keyCode != 13) {return true;}

    var val = $(this).val();
    validate_member_name2(val);
  });
  $("input[name='member_name2']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_member_name2(val);
    showRequireItemCount();
  });

  //
  //セイ
  //
  $("input[name='member_kana1']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}
    if (e.keyCode != 13) {return true;}

    var val = $(this).val();
    validate_kana1(val);
  });
  $("input[name='member_kana1']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_kana1(val);
    showRequireItemCount();
  });

  //
  // メイ
  //
  $("input[name='member_kana2']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}
    if (e.keyCode != 13) {return true;}

    var val = $(this).val();
    validate_kana2(val);
  });
  $("input[name='member_kana2']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

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
  //性別
  //
  $("input[name='sex']").change(function (e) {
    showRequireItemCount();
  });
  
  //
  // 郵便番号
  //
  $("input[name='zip1']").keyup(function (e) {
    return validate_zip();
    showRequireItemCount();
  });
  $("input[name='zip1']").focusout(function (e) {
    validate_zip();
    showRequireItemCount();
  });

  //
  // 都道府県
  //
  $("select[name='pref']").change(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_pref(val);
    showRequireItemCount();
  });
  $("select[name='pref']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_pref(val);
    showRequireItemCount();
  });

  //
  // 市区町村
  //
  $("input[name='address1']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_address1(val);
  });
  $("input[name='address1']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_address1(val);
    showRequireItemCount();
  });

  //
  // 町域
  //
  $("input[name='address2']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_address2(val);
  });
  $("input[name='address2']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_address2(val);
    showRequireItemCount();
  });

  //
  // 番地
  //
  $("input[name='address3']").keyup(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_address3(val);
  });
  $("input[name='address3']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

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
  // イベント
  //
  $("select[name='event']").on('focusout change',function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_event(val);
    showRequireItemCount();
  });
  $("input[name='q5']").on('change',function (e) {
    var val = $(this).val();
    validate_q5(val);
    showRequireItemCount();
  });

  
  //
  // メーカー
  //
  $("select[name='maker']").change(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_maker(val);
    showRequireItemCount();
  });
  $("select[name='maker']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $(this).val();
    validate_maker(val);
    showRequireItemCount();
  });
  //
  // 車種名
  //
  $("select[name='car_name']").change(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $("select[name='car_name']").val();
    var val2 = $("input[name='car_name']").val();
    validate_carname(val, val2);
    showRequireItemCount();
  });
  $("select[name='car_name']").focusout(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $("select[name='car_name']").val();
    var val2 = $("input[name='car_name']").val();
    validate_carname(val, val2);
    showRequireItemCount();
  });
  $("input[name='car_name']").blur(function (e) {
    if (e.keyCode == 9) {return true;}

    var val = $("select[name='car_name']").val();
    var val2 = $("input[name='car_name']").val();
    validate_carname(val, val2);
    showRequireItemCount();
  });  
  
  //
  // 車検時期
  //
  $("select[name='car_inspection_year']").on('focusout change',function (e) {    
    var val = $("select[name='car_inspection_year']").val();
    var val2 = $("select[name='car_inspection_month']").val();
    validate_inspection(val, val2);
    showRequireItemCount();
  });
  $("select[name='car_inspection_month']").on('focusout change',function (e) {    
    var val = $("select[name='car_inspection_year']").val();
    var val2 = $("select[name='car_inspection_month']").val();
    validate_inspection(val, val2);
    showRequireItemCount();
  });


  //
  // SUBARUとのお付き合い
  //
  $("input[name='q6']").on('change',function (e) {
    var val = $(this).val();
    validate_q6(val);
    showRequireItemCount();
  });
  $("select[name='q6hanabai']").on('focusout change',function (e) {    
    var val = $(this).val();
    validate_q6hanabai(val);
    console.log(val)
    showRequireItemCount();
  });
  $("select[name='q6shop']").on('focusout change',function (e) {    
    var val = $(this).val();
    validate_q6shop(val);
    showRequireItemCount();
  });

  //
  // 次回購入時のご意見
  //
  $("input[name='purchase_time']").on('change',function (e) {
    var val = $(this).val();
    validate_purchase_time(val);
    showRequireItemCount();
  });
  $("input[name='purchase_degree']").on('change',function (e) {
    var val = $(this).val();
    validate_purchase_degree(val);
    showRequireItemCount();
  });
  $("input[name='q7']").on('change',function (e) {
    var val = $(this).val();
    validate_q7(val);
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


    setTimeout(function () {
      $('#form').off('submit');
      $('#form').submit();
    }, 300);

    return true;
  }); //end #form.submit

  
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
  $('#submit-button button').attr('disabled', 'disabled');
}
