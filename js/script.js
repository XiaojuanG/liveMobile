$(function () {
	// 按钮滑动
	// $("#switch").change(function() {
	//     if ($("input[type='checkbox']").is(':checked') == true) {
	       
	//     } else {
	        
	//     }
	// });
	$(".WX_content .WX_navbar .navbar-item").click(function() {
	    now = $(this).index();
	    tab();
	    if (now == 0) {
	    	$('.layim-panel').css({
	    		display: 'block',
	    	});
	    }else{
	    	$('.layim-panel').css({
	    		display: 'none',
	    	});
	    }
	});
	function tab() {
		$(".WX_content .WX_navbar .navbar-item").eq(now).addClass('navbar-item_on').siblings().removeClass('navbar-item_on');
		$(".WX_content .page_wrap .page").eq(now).addClass('page_on').siblings().removeClass('page_on');
	}
	
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
	
	
	//表情
    $('.iconfont-emotion').on("click", function(){
         $('.model').addClass('model-css');
          }) 
    
	$('.publish-btn').on('click', function() {
		$('.model').removeClass('model-css')
	});

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