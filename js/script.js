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
	//表情
    $('.iconfont-emotion').on("click", function(){
         $('.model').addClass('model-css');
          }) 
    
	$('.publish-btn').on('click', function() {
		$('.model').removeClass('model-css')
	});
	// 投票
	$('.vote-btn-vote').on('click', function() {
		var titleHtml =""
		layer.open({
			content:'ghgjjbjk',
			title:['','background-color: #f4f6f8;text-align:left;'],
			btn:'投票',
			shade:false,
			fixed:false,
			top:-140,

		})
		
	});
	
	
		
})