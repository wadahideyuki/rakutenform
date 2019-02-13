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
  if (!e_pref) {
    count = count + 1;
  }
  var e_addr1 = $("input[name='address1']").val();
  var e_addr2 = $("input[name='address2']").val();
  if (!e_addr1 || !e_addr2) {
    count = count + 1;
  }
  var e_addr3 = $("input[name='address3']").val();
  if (!e_addr3) {
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
  if (!maker) { //未選択
    count = count + 1;
  } else if (maker == 99) {
  } else {
    //車種名
    var carname1 = $("select[name='car_name']").val();
    var carname2 = $("input[name='car_name']").val();
    if (carname1 || carname2) {} else { //未選択
      count = count + 1;
    }
    //車検時期
    var car_inspection_year = $("select[name='car_inspection_year']").val();
    var car_inspection_month = $("select[name='car_inspection_month']").val();
    if (car_inspection_year && car_inspection_month) {} else { //未選択
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
} //end showRequireItemCount
