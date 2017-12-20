$(function () {
	// $("#switch").change(function() {
	//     if ($("input[type='checkbox']").is(':checked') == true) {
	       
	//     } else {
	        
	//     }
	// });
	// $("#tab-box .tab-ol .tab-li").click(function() {
	// 	now = $(this).index();
	// 	tab();
	// });
	// function tab() {
	// 	$("#tab-box .tab-ol .tab-li").eq(now).addClass('active').siblings().removeClass('active');
	// 	$("#tab-box .tab-ul .tab-li").eq(now).addClass('cur').siblings().removeClass('cur');
	// }
	
	// 点击隐藏悬浮和显示悬浮
	  $('.iconfont-add-img').click(function() {
	  	//alert(123);
         if($('#btn-float-right').is('.btn-float-right-hidden')){
             $("#btn-float-right").removeClass("btn-float-right-hidden");
             $("#float-right").removeClass("float-right-hidden");
                     
        }else{
           $('#btn-float-right').addClass('btn-float-right-hidden');
             $("#float-right").addClass("float-right-hidden");
        }
       
    });	
	//对话窗口隐藏显示
	//console.log($('.WX_navbar').find('div:first-child'));
	// if ($('.WX_navbar').find('div:first-child').is('.navbar-item_on')) {
	// 	 $('.publish-box ').removeClass('index-display')
	// }
	
	//表情
    $('.iconfont-emotion').on("click", function(){
         $('.model').addClass('model-css');
          }) 
    
	$('.publish-btn').on('click', function() {
		$('.model').removeClass('model-css')
	});
	// 投票
	// $('.vote-btn-vote').on('click', function() {
	// 	alert(123);
		
	// });
	//文档
	$('.btn-file').on('click', function() {
		$('.docs-show-box').removeClass('index-display');
	});
	$('.closeicon').on('click', function() {
		$('.docs-show-box').addClass('index-display');
	});
	//投票
	$('.vote-img-close').on('click', function() {
		 $('#vote-wrap-img').addClass('index-display')
	});
	$('.vote-box-close').on('click', function() {
		$('#vote-wrap-text').addClass('index-display')
	});
	$('.btn-vote').on('click', function() {
		if ($('#vote-wrap-text').is('.index-display')) {
			$('#vote-wrap-text').removeClass('index-display')
		}else{
			$('#vote-wrap-text').addClass('index-display')
		}
		if ($('#vote-wrap-img').is('.index-display')) {
			$('#vote-wrap-img').removeClass('index-display')
		}
		
	});
	//打赏
	  $('.icon-reward').on('click', function() {
        $('#reward-wrap').removeClass('index-display');
    });
	$('#reward-pay-close').on('click', function() {
		$('#reward-wrap').css(
            "display",'none'
        );
	});
	
		
})