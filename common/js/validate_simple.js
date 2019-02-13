$(function () {

/*---------- 起動 ----------*/
	// メールアドレス
	$("input[name='pcmail']").focusout(function (e) {
		// タブ
		if (e.keyCode == 9) {return true;}//tabClick
		var val = $(this).val();
		validate_email(val);
		showRequireItemCount();
	});

	// 確認画面ボタン
	$('#form').submit(function (e) {
		e.preventDefault();

		showRequireItemCount();

		e_email = validate_email($("input[name='pcmail']").val());

		return true;
	});	//end #form.submit


/*---------- 関数 ----------*/
	function validate_email(val) {
		$('#pcmail_error_front_blank').hide();
		$('#pcmail_error_front_email').hide();
		if (!val) {
			$('#pcmail_error').hide();
			$('#pcmail_error_front_blank').show();
			return false;
		}
		return true;
	}

	showRequireItemCount();
});



function showRequireItemCount() {
	var count = 0;

	//メールアドレス
	var email = $("input[name='pcmail']").val();
	if (!email) {
		count = count + 1;
	}


	if (count > 0) {
		$('.nokori-count').html(count);
	} else {
	}
}	//end showRequireItemCount


