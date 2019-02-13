function showRequireItemCount() {
  $('.nokori-list').empty();
  var count = 0;

  //氏名
  var member_name1 = $("input[name='member_name1']").val();
  var member_name2 = $("input[name='member_name2']").val();
  if (!member_name1 || !member_name2) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-name">お名前</a></li>');
  }

  //フリガナ
  var member_kana1 = $("input[name='member_kana1']").val();
  var member_kana2 = $("input[name='member_kana2']").val();
  if (!member_kana1 || !member_kana2) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-kana">フリガナ</a></li>');
  }

  // 郵便番号
  var zip1 = $("input[name='zip1']").val();
  if (!zip1) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-post">郵便番号</a></li>');
  }

  //住所
  var e_pref = $("select[name='pref']").val();
  if (!e_pref) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-address">県名</a></li>');
  }
  var e_addr1 = $("input[name='address1']").val();
  var e_addr2 = $("input[name='address2']").val();
  if (!e_addr1 || !e_addr2) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-address">住所（市区町村）</a></li>');
  }
  var e_addr3 = $("input[name='address3']").val();
  if (!e_addr3) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-address">住所（番地）</a></li>');
  }

  //性別
  var sex1 = $('input[name=sex]:eq(0)').prop('checked');
  var sex2 = $('input[name=sex]:eq(1)').prop('checked');
  if (!sex1 && !sex2) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-sex">性別</a></li>');
  }

  //生年月日
  var byear = $("select[name=byear]").children(':selected').val();
  var bmonth = $("select[name=bmonth]").children(':selected').val();
  var bday = $("select[name=bday]").children(':selected').val();
  if (!byear || !bmonth || !bday) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-birth">生年月日</a></li>');
  }

  // 電話番号
  var tel1 = $("input[name='tel1']").val();
  if (!tel1) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-tel">電話番号</a></li>');
  }

  //職業
  var job = $("select[name='job']").val();
  if (!job) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">職業</a></li>');
  }
  //メールアドレス
  var email = $("input[name='pcmail']").val();
  if (!email) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">メールアドレス</a></li>');
  }


  //イベントをどこで知りましたか？
  var event = $("select[name='event']").val();
  var q51 = $("input[name='q5']:eq(0)").prop('checked');
  var q52 = $("input[name='q5']:eq(1)").prop('checked');
  var q53 = $("input[name='q5']:eq(2)").prop('checked');
  if (!event || (!q51 && !q52 && !q53)) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">イベントに参加された感想</a></li>');
  }
  
  
  //メーカー
  var maker = $("select[name='maker']").val();
  if (!maker) { //未選択
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">メーカー名</a></li>');
  } else if (maker == 99) {
  } else {
    //車種名
    var carname1 = $("select[name='car_name']").val();
    var carname2 = $("input[name='car_name']").val();
    if (carname1 || carname2) {} else { //未選択
      count = count + 1;
      $('.nokori-list').append('<li><a href="#must-email">車種名</a></li>');
    }
    //車検時期
    var car_inspection_year = $("select[name='car_inspection_year']").val();
    var car_inspection_month = $("select[name='car_inspection_month']").val();
    if (car_inspection_year && car_inspection_month) {} else { //未選択
      count = count + 1;
      $('.nokori-list').append('<li><a href="#must-email">車検時期</a></li>');
    }
  }
  
  

  //SUBARUとのお付き合いについて
  var q61 = $("input[name='q6']:eq(0)").prop('checked');
  var q62 = $("input[name='q6']:eq(1)").prop('checked');
  if (!q61 && !q62) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">SUBARUとのお付き合いについて</a></li>');
  }
  if(q61){
    var q6hanabai = $("select[name='q6hanabai']").val();
    if (!q6hanabai) {
      count = count + 1;
      $('.nokori-list').append('<li><a href="#must-email">販売会社名</a></li>');
    }
    var q6shop = $("select[name='q6shop']").val();
    if (!q6shop) {
      count = count + 1;
      $('.nokori-list').append('<li><a href="#must-email">営業店名</a></li>');
    }
  }
  

  //次回購入時のご意見
  var purchase_time1 = $("input[name='purchase_time']:eq(0)").prop('checked');
  var purchase_time2 = $("input[name='purchase_time']:eq(1)").prop('checked');
  var purchase_time3 = $("input[name='purchase_time']:eq(2)").prop('checked');
  var purchase_time4 = $("input[name='purchase_time']:eq(3)").prop('checked');
  var purchase_time5 = $("input[name='purchase_time']:eq(4)").prop('checked');
  if (!purchase_time1 && !purchase_time2 && !purchase_time3 && !purchase_time4 && !purchase_time5) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">次回の購入検討時期</a></li>');
  }
  

  var purchase_degree1 = $("input[name='purchase_degree']:eq(0)").prop('checked');
  var purchase_degree2 = $("input[name='purchase_degree']:eq(1)").prop('checked');
  var purchase_degree3 = $("input[name='purchase_degree']:eq(2)").prop('checked');
  var purchase_degree4 = $("input[name='purchase_degree']:eq(3)").prop('checked');
  var purchase_degree5 = $("input[name='purchase_degree']:eq(4)").prop('checked');
  if (!purchase_degree1 && !purchase_degree2 && !purchase_degree3 && !purchase_degree4 && !purchase_degree5) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">次回購入時のSUBARU車ご検討度合</a></li>');
  }
  
  var q71 = $("input[name='q7']:eq(0)").prop('checked');
  var q72 = $("input[name='q7']:eq(1)").prop('checked');
  var q73 = $("input[name='q7']:eq(2)").prop('checked');
  var q74 = $("input[name='q7']:eq(3)").prop('checked');
  var q75 = $("input[name='q7']:eq(4)").prop('checked');
  if (!q71 && !q72 && !q73　&& !q74　&& !q75) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-email">家族や友人へのおすすめ度</a></li>');
  }
  
  

  
  

  //　パスワード
  var password = $('input[name=password]').val();
    var password_confirm = $('input[name=password_confirm]').val();
    if (!password || !password_confirm) {
      count = count + 1;
      $('.nokori-list').append('<li><a href="#must-goconfirm">パスワード</a></li>');
    }

  // 個人情報の取扱い
  if (!$('#goconfirm1').prop('checked')) {
    count = count + 1;
    $('.nokori-list').append('<li><a href="#must-goconfirm">個人情報の取扱い</a></li>');
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