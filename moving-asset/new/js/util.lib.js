function join_all_agree_check(kind)
{
	if ($("#" + kind + "join_all_agree").prop("checked"))
	{
		$("#" + kind + "join_agree1").prop('checked', true) ;
		$("#" + kind + "join_agree2").prop('checked', true) ;
		$("#" + kind + "join_agree3").prop('checked', true) ;
		$("#" + kind + "join_agree4").prop('checked', true) ;
	}
}

function join_check()
{
	var name = $("#join_name").val();
	var id = $("#join_id").val();
	var passwd = $("#join_passwd").val();
	var passwd2 = $("#join_passwd2").val();
	var hp1 = $("#join_hp1").val();
	var hp2 = $("#join_hp2").val();
	var hp3 = $("#join_hp3").val();
	var agree1 = $("#site_join_agree1").prop("checked") ? "Y":"N";
	var agree2 = $("#site_join_agree2").prop("checked") ? "Y":"N";
	var agree3 = $("#site_join_agree3").prop("checked") ? "Y":"N";
	var agree4 = $("#site_join_agree4").prop("checked") ? "Y":"N";

	if (name == "")
	{
		alert("이름을 입력하세요.");
		$("#join_name").focus();
		return;
	}

	if (id == "")
	{
		alert("아이디를 입력하세요.");
		$("#join_id").focus();
		return;
	}

	if (checkIDStr(id) == false)
	{
		alert("아이디는 5~15 자리의 영문,숫자 혼용으로 사용해 주세요.");
		$("#join_id").focus();
		return;
	}

	if (id_checked == "N")
	{
		alert("아이디 중복 체크를 해주세요.");
		id_check();
		return;
	}

	if (passwd == "")
	{
		alert("비밀번호를 입력하세요.");
		$("#join_passwd").focus();
		return;
	}

	if (passwd2 == "")
	{
		alert("비밀번호를 입력하세요.");
		$("#join_passwd2").focus();
		return;
	}

	if (passwd != passwd2)
	{
		alert("비밀번호가 일치하지 않습니다.");
		$("#join_passwd2").focus();
		return;
	}

	if (checkPWStr(passwd, id) == false)
	{
		$("#join_passwd").focus();
		return;
	}

	if (hp1 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#join_hp1").focus();
		return;
	}

	if (hp2 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#join_hp2").focus();
		return;
	}

	if (hp3 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#join_hp3").focus();
		return;
	}

	if (agree1 == "N")
	{
		alert("서비스 이용약관에 동의해 주세요.");
		$("#join_agree1").focus();
		return;
	}

	if (agree2 == "N")
	{
		alert("수집하는 개인정보 항목에 동의해 주세요.");
		$("#join_agree2").focus();
		return;
	}


	$.ajax({
		url : "/xmlData/join_member_action.php",
		type : "POST",
		dataType : "xml",
		data : {
			"name":name,
			"id":id,
			"passwd":passwd,
			"passwd2":passwd2,
			"hp1":hp1,
			"hp2":hp2,
			"hp3":hp3,
			"agree1":agree1,
			"agree2":agree2,
			"agree3":agree3,
			"agree4":agree4,
		},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var name = $(data).find("name").text();

			if (state == "1")
			{
				alert("안녕하세요. " + name + "님 !!!\n 로그인해 주세요.");

				videoClose();
				validPopOpen('popLogin');
			}else
			{
				alert(msg);
			}
		}
	});
}

var id_checked = "N";

function id_check()
{
	var id = $("#join_id").val();

	if (id != "")
	{
		$.ajax({
			url : "/xmlData/id_dupl_check.php",
			type : "POST",
			dataType : "xml",
			data : {
				"id":id
			},
			timeout : 1000 * 5,
			error : function(){

			},
			success : function(data, status){
				var state = $(data).find("status").text();
				var msg = $(data).find("msg").text();

				if (state == "1")
				{
					id_checked = "Y";
				}else
				{
					id_checked = "N";
					alert(msg);
				}
			}
		});
	}
}

function sns_join_check()
{
	var kind = $("#sns_kind").val();
	var sns_id = $("#sns_id").val();
	var name = $("#sns_join_name").val();
	//var email_id = $("#sns_email_id").val();
	//var email_domain = $("#sns_email_domain").val();
	var hp1 = $("#sns_join_hp1").val();
	var hp1 = $("#sns_join_hp1").val();
	var hp2 = $("#sns_join_hp2").val();
	var hp3 = $("#sns_join_hp3").val();
	var agree1 = $("#sns_join_agree1").prop("checked") ? "Y":"N";
	var agree2 = $("#sns_join_agree2").prop("checked") ? "Y":"N";
	var agree3 = $("#sns_join_agree3").prop("checked") ? "Y":"N";
	var agree4 = $("#sns_join_agree4").prop("checked") ? "Y":"N";

	if (name == "")
	{
		alert("이름을 입력하세요.");
		$("#sns_join_name").focus();
		return;
	}

	if (sns_id == "")
	{
		alert("아이디를 입력하세요.");
		$("#sns_id").focus();
		return;
	}

	if (hp1 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#sns_join_hp1").focus();
		return;
	}

	if (hp2 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#sns_join_hp2").focus();
		return;
	}

	if (hp3 == "")
	{
		alert("전화번호를 입력하세요.");
		$("#sns_join_hp3").focus();
		return;
	}

	if (agree1 == "N")
	{
		alert("서비스 이용약관에 동의해 주세요.");
		$("#sns_join_agree1").focus();
		return;
	}

	if (agree2 == "N")
	{
		alert("수집하는 개인정보 항목에 동의해 주세요.");
		$("#sns_join_agree2").focus();
		return;
	}

	if (agree3 == "N")
	{
		alert("개인정보 수집/이용 동의, 보유 및 이용기간에 동의해 주세요.");
		$("#sns_join_agree3").focus();
		return;
	}

	$.ajax({
		url : "/xmlData/join_member_action.php",
		type : "POST",
		dataType : "xml",
		data : {
			"kind":kind,
			"name":name,
			"sns_id":sns_id,
			"hp1":hp1,
			"hp2":hp2,
			"hp3":hp3,
			"agree1":agree1,
			"agree2":agree2,
			"agree3":agree3,
			"agree4":agree4,
		},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var name = $(data).find("name").text();

			if (state == "1")
			{
				alert("안녕하세요. " + name + "님 !!!\n 로그인해 주세요.");

				videoClose();
				validPopOpen('popLogin');
			}else
			{
				alert(msg);
			}
		}
	});
}

var callbackFunc = "";

function member_login()
{
	var member_id = $("#login_member_id").val();
	var member_pw = $("#login_member_pw").val();

	if (member_id == "")
	{
		alert("아이디를 입력하세요.");
		$("#login_member_id").focus();
		return;
	}

	if (member_pw == "")
	{
		alert("비밀번호를 입력하세요.");
		$("#login_member_pw").focus();
		return;
	}

	$.ajax({
		url : "/xmlData/login.php",
		type : "POST",
		dataType : "xml",
		data : {
			"member_id":member_id,
			"member_pw":member_pw
		},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var name = $(data).find("name").text();

			if (state == "1")
			{
				alert("안녕하세요. " + name + "님 !!!");

				if (callbackFunc == "")
				{
					document.location.reload();
				}else {
					eval(callbackFunc);
				}

				/*
				var login_url = $(location).attr('href')

				if (
					login_url.indexOf("07_etc/01_join") > 0
				)
				{
					document.location.href = "/00_main/main.php";
				}else {
					document.location.reload();
				}
				*/
			}else
			{
				alert(msg);
			}
		}
	});
}

function naver_login(naver_id)
{
	$.ajax({
		url : "/xmlData/login_sns.php",
		type : "POST",
		dataType : "xml",
		data : {
			"sns_id":naver_id,
			"kind":"naver"
		},
		timeout : 1000 * 5,
			error : function(){
			alert("로그인중에 오류가 발생했습니다.\n\n나중에 다시 시도해 주세요.");
		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var name = $(data).find("name").text();

			if (state == "1")
			{
				alert("안녕하세요. " + name + "님 !!!");

				if (callbackFunc == "")
				{
					document.location.reload();
				}else {
					eval(callbackFunc);
				}
   			}else if (state == "-2")
			{
				var ans = confirm(msg);
				if (ans)
				{
					$("#sns_id").val(naver_id);
					$("#sns_join_id").val(naver_id);
					$("#sns_join_name").val($.cookie('n_name'));

					validPopOpen('popSnsNaverJoin');
				}
			}else
			{
				alert(msg);
			}
		}
	});
}

function find_id()
{
	var name = $("#find_id_name").val();
	var hp = $("#find_id_hp").val();

	$("#find_id_result").html("");
	$("#find_id_result").hide();

	if (name == "")
	{
		alert("이름을 입력하세요.");
		$("#find_id_name").focus();
		return;
	}

	if (hp == "")
	{
		alert("가입시 연락처를 입력하세요.");
		$("#find_id_hp").focus();
		return;
	}

	$.ajax({
		url : "/xmlData/find_id_action.php",
		type : "POST",
		dataType : "xml",
		data : {
			"name":name,
			"hp":hp
		},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var member_id = $(data).find("member_id").text();

			var find_result = "";

			if (state == "1")
			{
				find_result += " <p class=\"desc\">회원님의 아이디는 다음과 같습니다.</p>";
				find_result += " <div class=\"gray-box mt15 mb50\">";
				find_result += "     <p class=\"pw-result mt20 mb20\">" + member_id + "</p>";
				find_result += " </div>";

				$("#find_id_result").html(find_result);
				$("#find_id_result").show();
			}else if (state == "-9")
			{
				find_result += " <div class=\"gray-box mt15 mb50\">";
				find_result += "     <p class=\"alert mt30 mb30\">" + replaceTag(msg) + "</p>";
				find_result += " </div>";
				$("#find_id_result").html(find_result);
				$("#find_id_result").show();
			}else
			{
				alert(msg);
			}
		}
	});
}

function find_pw()
{
	var id = $("#find_pw_id").val();
	var name = $("#find_pw_name").val();
	var hp = $("#find_pw_hp").val();

	$("#find_pw_result").html("");
	$("#find_pw_result").hide();

	if (id == "")
	{
		alert("아이디를 입력하세요.");
		$("#find_pw_id").focus();
		return;
	}

	if (name == "")
	{
		alert("이름을 입력하세요.");
		$("#find_pw_name").focus();
		return;
	}

	if (hp == "")
	{
		alert("가입시 연락처를 입력하세요.");
		$("#find_pw_hp").focus();
		return;
	}

	$.ajax({
		url : "/xmlData/find_pw_action.php",
		type : "POST",
		dataType : "xml",
		data : {
			"id":id,
			"name":name,
			"hp":hp
		},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();
			var temp_passwd = $(data).find("temp_passwd").text();

			var find_result = "";

			if (state == "1")
			{
				find_result += " <p class=\"desc\">회원님의 임시비밀번호는 다음과 같습니다.</p>";
				find_result += " <div class=\"gray-box mt15 mb50\">";
				find_result += "     <p class=\"pw-result mt20 mb20\">" + temp_passwd + "</p>";
				find_result += " </div>";

				$("#find_pw_result").html(find_result);
				$("#find_pw_result").show();
			}else if (state == "-9")
			{
				find_result += " <div class=\"gray-box mt15 mb50\">";
				find_result += "     <p class=\"alert mt30 mb30\">" + replaceTag(msg) + "</p>";
				find_result += " </div>";
				$("#find_pw_result").html(find_result);
				$("#find_pw_result").show();
			}else
			{
				alert(msg);
			}
		}
	});
}

function member_logout()
{
	$.ajax({
		url : "/xmlData/logout.php",
		type : "POST",
		dataType : "xml",
		data : {},
		timeout : 1000 * 5,
		error : function(){

		},
		success : function(data, status){
			var state = $(data).find("status").text();
			var msg = $(data).find("msg").text();

			if (state == "1")
			{
				alert("로그아웃 되었습니다.");

				var login_url = $(location).attr('href')

				document.location.href = "/00_main/main.php";

			}else
			{
				alert(msg);
			}
		}
	});
}

function frontPaging(intTotalCnt, intListCnt, intCurPage, intPageCnt, link_func_name)
{
	var strPagingLink = "";

	var intTotalPage = 0;
	var intTotalBlock = 0;
	var intCurBlock = 0;
	var intStartPage = 0;

	if (parseInt(intTotalCnt) > 0)
	{
		//전체 페이지
		intTotalPage = Math.ceil(intTotalCnt / intListCnt);

		//전체 블럭
		intTotalBlock = Math.ceil(intTotalPage / intPageCnt);

		//현재 블럭
		intCurBlock = Math.ceil(intCurPage / intPageCnt);

		//시작 페이지
		intStartPage = (intCurBlock - 1) * intPageCnt + 1;

		//이전페이지 가기
		strPagingLink += '	<div class="page_prev">';
		strPagingLink += '		<a href="javascript:' + link_func_name + '(1)" class="first"></a>';
		if (intCurPage > 1) {
			strPagingLink += '		<a href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ')" class="prev"></a>';
		} else {
			strPagingLink += '		<a href="#" class="prev"></a>';
		}
		strPagingLink += '	</div>';

		strPagingLink += '	<div class="page_num">';

		//블럭내 페이지 리스트
		for (var i = intStartPage ; (i < (intCurBlock * intPageCnt) + 1) && (i <= intTotalPage) ; i++)
		{
			if (intCurPage == i) {
				strPagingLink += '<a href="javascript:void(0);" class="now">' + i + '</a>';
			} else {
				strPagingLink += '<a href="javascript:' + link_func_name + '(' + i + ')">' + i + '</a>';
			}
		}

		strPagingLink += '	</div>';

		//다음페이지 가기
		strPagingLink += '	<div class="page_next">';
		if (intCurPage < intTotalPage) {
			strPagingLink += '		<a href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ')" class="next"></a>';
		} else {
			strPagingLink += '		<a href="javascript:void(0)" class="next"></a>';
		}
		strPagingLink += '		<a href="javascript:' + link_func_name + '(' + intTotalPage + ')" class="last"></a>';
		strPagingLink += '	</div>';
	}

	return strPagingLink;
}

function frontPagingShort(intTotalCnt, intListCnt, intCurPage, intPageCnt, link_func_name)
{
	var strPagingLink = "";

	var intTotalPage = 0;
	var intTotalBlock = 0;
	var intCurBlock = 0;
	var intStartPage = 0;

	if (parseInt(intTotalCnt) > 0)
	{
		//전체 페이지
		intTotalPage = Math.ceil(intTotalCnt / intListCnt);

		//전체 블럭
		intTotalBlock = Math.ceil(intTotalPage / intPageCnt);

		//현재 블럭
		intCurBlock = Math.ceil(intCurPage / intPageCnt);

		//시작 페이지
		intStartPage = (intCurBlock - 1) * intPageCnt + 1;

		//페이징

		// strPagingLink += "<span class=\"number fl-l\">";
		// strPagingLink += "	<a class=\"current\" href=\"javascript:void(0);\">" + intCurPage + "</a> ";
		// strPagingLink += "	<span>/</span>";
		// strPagingLink += "	<a href=\"javascript:void(0);\" onclick=\"javascript:" + link_func_name + "(" + intTotalPage + ")\">" + intTotalPage + "</a>";
		// strPagingLink += "</span>";
		// strPagingLink += "<span class=\"prev fl-l\">";
		// //이전페이지 가기
		// if (intCurPage > 1)
		// {
		// 	strPagingLink += "	<a class=\"arrow\" href=\"javascript:void(0);\" onclick=\"javascript:" + link_func_name + "(" + (parseInt(intCurPage) - 1) + ")\"><img src=\"../image/common/btn_board_prev.jpg\" alt=\"이전페이지\"></a>";
		// }else
		// {
		// 	strPagingLink += "	<a class=\"arrow\" href=\"javascript:void(0);\" onclick=\"alert('첫 페이지 입니다.');\"><img src=\"../image/common/btn_board_prev.jpg\" alt=\"이전페이지\"></a>";
		// }
		// strPagingLink += "</span>";
		// strPagingLink += "<span class=\"next fl-l mr10\">";
		// //다음페이지 가기
		// if (intCurPage < intTotalPage)
		// {
		// 	strPagingLink += "	<a class=\"arrow\" href=\"javascript:void(0);\" onclick=\"javascript:" + link_func_name + "(" + (parseInt(intCurPage) + 1) + ")\"><img src=\"../image/common/btn_board_next.jpg\" alt=\"다음페이지\"></a>";
		// }else
		// {
		// 	strPagingLink += "	<a class=\"arrow\" href=\"javascript:void(0);\" onclick=\"alert('마지막 페이지 입니다.');\"><img src=\"../image/common/btn_board_next.jpg\" alt=\"다음페이지\"></a>";
		// }
		// strPagingLink += "</span>";

		// strPagingLink += '<span class="number fl-l"><a class="current" href="javascript:;">' + intCurPage + '</a><span> / </span><a href="javascript:;" onclick="javascript:;">' + intTotalPage + '</a></span>';

		// strPagingLink += '<span class="prev fl-l">';
		// if (intCurPage > 1) {
		// 	strPagingLink += '<a class="arrow" href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');"><img src="/images/common/btn_board_prev.jpg" alt="이전페이지"></a>';
		// } else {
		// 	strPagingLink += '<a class="arrow" href="javascript:alert(\'첫 페이지 입니다.\');;"><img src="/images/common/btn_board_prev.jpg" alt="이전페이지"></a>';
		// }
		// strPagingLink += '</span>';

		// strPagingLink += '<span class="next fl-l mr10">';
		// if (intCurPage < intTotalPage) {
		// 	strPagingLink += '<a class="arrow" href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ');"><img src="/images/common/btn_board_next.jpg" alt="다음페이지"></a>';
		// } else {
		// 	strPagingLink += '<a class="arrow" href="javascript:alert(\'마지막 페이지 입니다.\');"><img src="/images/common/btn_board_next.jpg" alt="다음페이지"></a>';
		// }
		// strPagingLink += '</span>';

		// strPagingLink += '	<div class="page_num">';
        // strPagingLink += '		<span class="page_now">' + intCurPage + '</span>';
		// strPagingLink += '		<span class="page_total">' + intTotalPage + '</span>';
		// strPagingLink += '	</div>';
		// if (intCurPage > 1) {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="prev" onclick="' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ')"></a>';
		// } else {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="prev" onclick="alert(\'첫 페이지 입니다.\');"></a>';
		// }
		// if (intCurPage < intTotalPage) {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="next" onclick="' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ')"></a>';
		// } else {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="next" onclick="alert(\'마지막 페이지 입니다.\');"></a>';
		// }

		strPagingLink  = '	<span class="number fl-l"><a class="current" href="javascript:void(0);">' + intCurPage + '</a><span> / </span><a href="javascript:void(0);" onclick="' + link_func_name + '(' + intTotalPage + ')">' + intTotalPage + '</a></span>';
		if (intCurPage > 1) {
			strPagingLink += '	<span class="prev fl-l"><a class="arrow" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ')"><img src="' + __basePath + '/images/sub/06/btn_board_prev.jpg" alt="이전페이지"></a></span>';
		} else {
			strPagingLink += '	<span class="prev fl-l"><a class="arrow" href="javascript:void(0);" onclick="alert(\'첫 페이지 입니다.\');"><img src="' + __basePath + '/images/sub/06/btn_board_prev.jpg" alt="이전페이지"></a></span>';
		}
		
		if (intCurPage < intTotalPage) {
			strPagingLink += '	<span class="next fl-l mr10"><a class="arrow" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ')"><img src="' + __basePath + '/images/sub/06/btn_board_next.jpg" alt="다음페이지"></a></span>';
		} else {
			strPagingLink += '	<span class="next fl-l mr10"><a class="arrow" href="javascript:void(0);" onclick="alert(\'마지막 페이지 입니다.\')"><img src="' + __basePath + '/images/sub/06/btn_board_next.jpg" alt="다음페이지"></a></span>';
		}
		

	}

	return strPagingLink;
}

function frontPagingShort2(intTotalCnt, intListCnt, intCurPage, intPageCnt, link_func_name)
{
	var strPagingLink = "";

	var intTotalPage = 0;
	var intTotalBlock = 0;
	var intCurBlock = 0;
	var intStartPage = 0;

	if (parseInt(intTotalCnt) > 0)
	{
		//전체 페이지
		intTotalPage = Math.ceil(intTotalCnt / intListCnt);

		//전체 블럭
		intTotalBlock = Math.ceil(intTotalPage / intPageCnt);

		//현재 블럭
		intCurBlock = Math.ceil(intCurPage / intPageCnt);

		//시작 페이지
		intStartPage = (intCurBlock - 1) * intPageCnt + 1;

		//페이징
		// strPagingLink += '	<span class="prev">';
		// if (intCurPage > 1) {
		// 	strPagingLink += '		<a class="arrow" href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');">';
		// } else {
		// 	strPagingLink += '		<a class="arrow" href="javascript:alert(\'첫 페이지 입니다.\');">';
		// }
		// strPagingLink += '		<img src="/images/common/btn_board_prev.jpg" alt="이전페이지"></a>';
		// strPagingLink += '	</span>';

		// strPagingLink += '	<span class="number">';
		// strPagingLink += '		<a class="current" href="javascript:void(0);">' + intCurPage + '</a> <span>/</span>';
		// strPagingLink += '		<a href="javascript:void(0);">' + intTotalPage + '</a>';
		// strPagingLink += '	</span>';

		// strPagingLink += '	<span class="next">';
		// if (intCurPage < intTotalPage) {
		// 	strPagingLink += '<a class="arrow" href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ');">';
		// } else {
		// 	strPagingLink += '<a class="arrow" href="javascript:alert(\'마지막 페이지 입니다.\');">';
		// }
		// strPagingLink += '		<img src="/images/common/btn_board_next.jpg" alt="다음페이지"></a>';
		// strPagingLink += '	</span>';

		// if (intCurPage > 1) {
		// 	strPagingLink += '	<a href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');" class="prev"></a>';
		// } else {
		// 	strPagingLink += '	<a href="javascript:alert(\'첫 페이지 입니다.\');" class="prev"></a>';
		// }
		
		// if (intCurPage > 1) {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="prev" onclick="' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');"></a>';
		// } else {
		// 	strPagingLink += '	<a href="javascript:void(0);" class="prev" onclick="alert(\'첫 페이지 입니다.\');"></a>';
		// }
		
    	// strPagingLink += '	<div class="page_num">';
        // strPagingLink += '		<span class="page_now">' + intCurPage + '</span>';
        // strPagingLink += '		<span class="page_total">' + intTotalPage + '</span>';
    	// strPagingLink += '	</div>';

		// if (intCurPage < intTotalPage) {
		// 	strPagingLink += '	<a href="javascript:' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ');" class="next"></a>';
		// } else {
		// 	strPagingLink += '	<a href="javascript:alert(\'마지막 페이지 입니다.\');" class="next"></a>';
		// }

		// if (intCurPage > 1) {
		// 	strPagingLink += '<a class="prev" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');"></a>';
		// } else {
		// 	strPagingLink += '<a class="prev" href="alert(\'마지막 페이지 입니다.\');"></a>';
		// }
		// strPagingLink += '<div class="page_num">';
		// strPagingLink += '	<span class="page_now">' + intCurPage + '</span>';
		// strPagingLink += '	<span class="page_total">' + intTotalPage + '</span>';
		// strPagingLink += '</div>';
		// if (intCurPage < intTotalPage) {
		// 	strPagingLink += '<a class="next" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ');"></a>';
		// } else {
		// 	strPagingLink += '<a class="next" href="javascript:alert(\'마지막 페이지 입니다.\');"></a>';
		// }

		if (intCurPage > 1) {
			strPagingLink += '<span class="prev fl-l"><a class="arrow" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) - 1) + ');"><img src="' + __basePath + '/images/common/btn_board_prev.png" alt="이전페이지"></a></span>';
		} else {
			strPagingLink += '<span class="prev fl-l"><a class="arrow" href="javascript:alert(\'마지막 페이지 입니다.\');"><img src="' + __basePath + '/images/common/btn_board_prev.png" alt="이전페이지"></a></span>';
		}
		strPagingLink += '<span class="number fl-l"><a class="current" href="javascript:;">' + intCurPage + '</a><span> / </span><a href="javascript:void(0);" onclick="' + link_func_name + '(' + intTotalPage + ');" onclick="javascript:;">' + intTotalPage + '</a></span>';
		if (intCurPage < intTotalPage) {
			strPagingLink += '<span class="next fl-l mr10"><a class="arrow" href="javascript:void(0);" onclick="' + link_func_name + '(' + (parseInt(intCurPage) + 1) + ');"><img src="' + __basePath + '/images/common/btn_board_next.png" alt="다음페이지"></a></span>';
		} else {
			strPagingLink += '<span class="next fl-l mr10"><a class="arrow" href="javascript:alert(\'마지막 페이지 입니다.\');"><img src="' + __basePath + '/images/common/btn_board_next.png" alt="다음페이지"></a></span>';
		}
	}

	return strPagingLink;
}

function logout()
{
  $.ajax({
	url : "/xmlData/logout.php",
	type : "POST",
	dataType : "xml",
	data : "",
	timeout : 1000 * 5,
	error : function(){

	},
	success : function(data, status){
	  document.location.href="/";
	}
  });
}

function stripTag(str)
{
  var rtnStr = "";

  rtnStr = str.replace(/[\n\r\f]/g, ' ') ;
  rtnStr = rtnStr.replace(/<[^>]*?>/g, ' ');

  return rtnStr;
}

function change(sel_obj, add)
{
	for (i=sel_obj.length-1; i>=0; i--){
		sel_obj.options[i] = null
	}

	for (i=0; i < local_addr[add].length;i++){
		sel_obj.options[i] = new Option(local_addr[add][i], local_addr[add][i]);
	}
}

$(document).ready(function(){
	//숫자만
	$(".onlyNum").keyup(function(){
		$(this).val( $(this).val().replace(/[^0-9]/g,"") );
	});

	//영문만
	$(".onlyEng").keyup(function(){
		$(this).val( $(this).val().replace(/[^\!-z]/g,"") );
	});

	//한글만
	$(".onlyKor").keyup(function(){
		//console.log("onlyKor");
		//$(this).val( $(this).val().replace(/^[가-힣]/g,"") );
		regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
		v = $(this).val();
		if( regexp.test(v) ) {
			alert("한글만 입력하세요");
			$(this).val(v.replace(regexp,''));
		}
	});

	//숫자+영문
	$(".onlyNumEng").keyup(function(){
		//console.log("onlyNumEng");
		//$(this).val( $(this).val().replace(/[a-zA-Z0-9]/g,"") );
		if (!(event.keyCode >=37 && event.keyCode<=40)) {
			var inputVal = $(this).val();
			$(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
		}
	});

	//이메일 도메인
	$(".onlyEmailDomain").keyup(function(){
		if (!(event.keyCode >=37 && event.keyCode<=40)) {
			var inputVal = $(this).val();
			$(this).val(inputVal.replace(/[^a-z0-9.]/gi,''));
		}
	});
});

function checkIDStr(id)
{
	var idReg = /^[a-zA-Z]+[a-zA-Z0-9]{4,15}$/g;
	if( !idReg.test( id ) ) {
		return false;
	}

	var chk_num = id.search(/[0-9]/g);
	var chk_eng = id.search(/[a-z]/ig);

	if(chk_num < 0 || chk_eng < 0)
	{
		//alert('아이디는 숫자와 영문자를 혼용하여야 합니다.');
		return false;
	}

	/*
	if(/(\w)\1\1\1/.test(upw))

	{
		alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
		return false;
	}

	if(upw.search(uid)>-1)

	{
		alert('ID가 포함된 비밀번호는 사용하실 수 없습니다.');
		return false;
	}
	*/

	return true;
}

function checkPWStr(pw, id)
{
	var pwReg = /^[a-zA-Z0-9!@#$%^&*]{6,15}$/g;
	if( !pwReg.test( pw ) ) {
		return false;
	}

	var chk_num = pw.search(/[0-9]/g);
	var chk_eng = pw.search(/[a-z]/ig);

	if(chk_num < 0 || chk_eng < 0)
	{
		alert('비밀번호는 숫자와 영문자를 혼용하여야 합니다.');
		return false;
	}

	if(/(\w)\1\1\1/.test(pw))
	{
		alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
		return false;
	}

	if(pw.search(id)>-1)

	{
		alert('ID가 포함된 비밀번호는 사용하실 수 없습니다.');
		return false;
	}

	return true;
}

function hangul(){
	if((event.keyCode < 12592) || (event.keyCode > 12687)){
		alert("한글만 입력이 가능합니다.");
		event.returnValue = false
	}
}

function replaceTag(str)
{
	var rtnStr = "";

	rtnStr = str.replace("||br||", "<br>");

	return rtnStr;
}

function nl2br(str){  
    return str.replace(/\n/g, "<br />");  
}  

function br2nl(str){  
	var rtnStr = "";

	rtnStr = str.replace(/<br>/g, "\n");  
	rtnStr = rtnStr.replace(/<br \/>/g, "\n");  

    return rtnStr;
}  
