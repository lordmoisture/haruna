$(function(){
    
    //backgstrech
    if (bg_img_url && !bg_option) {

        if (bg_img_url.length === 1) {
            $.backstretch(bg_img_url[0]);
        } else if (bg_img_url) {
            $.backstretch(bg_img_url, {
                fade: 1000,
                duration: 6000
            });
        }

    } else if (bg_img_url && bg_option) {
        $('body').css({
            "background-image": "url(" + bg_img_url[0] + ")",
            "background-repeat": "repeat",
            "background-position": "center top",
            "background-attachment": "fixed"
        });
    }

    if (header_img_url) {
        var img = new Image();
        img.src = header_img_url;
        img.onload = function() {
            winResize();
            $('#head-image').css('backgroundImage', 'url(' + img.src + ')');
            //var width = img.width;  // 幅
            //var height = img.height; // 高さ
        };

        /* return if navbar is fixed */
        function navbarIsFixed() {
            return $('#sec-navbar .navbar').hasClass('navbar-fixed-top');
        }

        function winResize() {
            $('#head-image').height($('#head-image').width() * (img.height / img.width) + 'px');
//$('#head-image').height($('#head-image').width() / 2 + 'px');
        }

        $window = $(window);
        $window.on('resize', function() {
            winResize();
        });
    }
    
    
	//ボタン[id:page-top]を出現させるスクロールイベント
	$(window).scroll(function(){
		//最上部から現在位置までの距離を取得して、変数[now]に格納
		var now = $(window).scrollTop();

		//最下部から現在位置までの距離を計算して、変数[under]に格納
		var under = $('body').height() - (now + $(window).height());
 
//		if(now > 200 && under > 100){
		if(now > 200){
			//[#page-top]をゆっくりフェードインする
			$('#page-top').fadeIn('slow');
		//それ以外だったらフェードアウトする
		}else{
			$('#page-top').fadeOut('slow');
		}
	});
 
	//ボタン(id:move-page-top)のクリックイベント
	$('#move-page-top').click(function(){
		//ページトップへ移動する
		$('html,body').animate({scrollTop:0},'slow');
        return false;
	});
        
   
   
   
       //スマホ用セレクトボックスメニュー
    $('.res-menu').on('change', function() {
        window.location = $(this).val();
    });

});