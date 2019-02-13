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


    //イベント
    function validate_event(val) {
      $('#event_error_front_blank').hide();
      $('#event_error_front_event').hide();
      if (!val) {
        //$('#event_error').hide();
        $('#event_error_front_blank').show();
        return false;
      }
      return true;
    }

    function validate_q5(val) {
      if (!val) {
        $('#q5_error_front_blank').show();
        return false;
      }
      return true;
    }


    //メーカー
    function validate_maker(val) {
      if (!val) {
        $('#maker_error_front_blank').show();
        return false;
      } else { //選択
        $('#maker_error_front_blank').hide();

        if (val == 99) { //所有してない
          $(".makerRow").css({
            opacity: 0.2
          });
        } else {
          $(".makerRow").css({
            opacity: 1
          });

        }
      }
      return true;
    }

    //現在所有している車
    function validate_carname(val, val2) {
      $('#carname_error_front_blank').hide();
      if (val || val2) {
        $('#carname_error_front_blank').hide();
      } else {
        $('#carname_error_front_blank').show();
      }
      return true;
    }

    //車検時期
    function validate_inspection(val, val2) {
      $('#inspection_error_front_blank').hide();
      if (val && val2) {
        $('#inspection_error_front_blank').hide();
      } else {
        $('#inspection_error_front_blank').show();
      }
      return true;
    }



    //SUBARUとのお付き合いについて
    function validate_q6(val) {
      $('#q6_error_front_blank').hide();
      if (!val) {
        $('#q6_error_front_blank').show();
        return false;
      }
      return true;
    }
    //販売会社名
    function validate_q6hanabai(val) {
      $('#q6hanabai_error_front_blank').hide();
      if (!val) {
        $('#q6hanabai_error_front_blank').show();
        return false;
      }
      return true;
    }
    //販売会社名
    function validate_q6shop(val) {
      $('#q6shop_error_front_blank').hide();
      if (!val) {
        $('#q6shop_error_front_blank').show();
        return false;
      }
      return true;
    }


    // 次回購入時のご意見
    function validate_purchase_time(val) {
      $('#purchase_time_error_front_blank').hide();
      if (!val) {
        $('#purchase_time_error_front_blank').show();
        return false;
      }
      return true;
    }
    function validate_purchase_degree(val) {
      $('#purchase_degree_error_front_blank').hide();
      if (!val) {
        $('#purchase_degree_error_front_blank').show();
        return false;
      }
      return true;
    }
    function validate_q7(val) {
      $('#q7_error_front_blank').hide();
      if (!val) {
        $('#q7_error_front_blank').show();
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
