$(function(){
	sessionStorage.setItem('where', 'localhost');//设置当前地址，用了判断登录后是否跳转首页
	//提示先登录
	//var name = localStorage.getItem('username') //huoqu
	//console.log(name);
	//if(name == undefined) {
	//	$('.reply-hint').show();
	//}else{
	//	$('.reply-hint').hide();
	//};
    //
	////登录后页面样式
	//if (name) {
	//	$('.login').html(name).attr('href', 'javascript:;').css('color', 'red');
	//	$('.register').html('退出').attr('href', 'javascript:;');
	//};
    //
	////退出登录接口
	//$('.register').on('click', function () {
	//	//alert("退出登录")
	//	$.ajax({
	//		url: 'http://192.168.11.111/Apply/user/login/outLogin',
	//		dataType: 'json',
	//		type: 'DELETE',
	//		data:{},
	//		success: function (result) {
	//			if (result.code == 1000) {
	//				console.log(result);
    //
	//				$('.login').html('登录').attr('href', 'loginff.html').css('color', 'white')
	//				$('.register').html('注册').attr('href', 'registerFF.html')
	//				// 退出清楚掉当前用户
	//				localStorage.removeItem('username');
	//			}
	//		}
	//	})
    //
	//});

//	导航栏出现隐藏
	timer=null
	$('.header .navtitle').each(function(i,ele){
	$('.header .navtitle').eq(i).mouseenter(function(){
		clearTimeout(timer);
//		$(this).addClass("navbackgroud").siblings().removeClass("navbackgroud")
		$('.list').hide();
		$(".list").eq(i).slideDown(800);
		$(".list").eq(i).show();
		
	}).mouseleave(function(){
		timer=setTimeout(function(){
			$(".list").eq(i).hide();
		},200)
	})
	
	$(".list").eq(i).mouseenter(function(){
			clearTimeout(timer);
		}).mouseleave(function(){
			timer=setTimeout(function(){
				$(".list").eq(i).hide();
			},200)
		})
})
	
	
//	搜索框出现于隐藏
$('.searchAll').click(function(){
	if($(".sch").css("display")=="none"){
		$('.sch').show();
	}
	else{
		$('.sch').hide();
	}
});

	
	
	
	
	
	
})

