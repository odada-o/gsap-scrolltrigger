$(document).ready(function(){

	gnb();	
	familySiteFunc();
	sitemapFunc();

  
});

function gnb(){
    var head = ".header-wrap";
    var gnbitem = ".main_menu";

   $(gnbitem).hover(function() {
		//$(".header-wrap").addClass('fixed');
		$(this).children('.sub-wrap-w').stop().slideToggle();
		$(this).toggleClass('active');
		$(this).children('.depth02').addClass('active');
		$('.sub-wrap').animate({opacity: '1'}, 200);
		$(".all_menuBtn").show();
  });
  $(gnbitem).mouseleave(function () {
		$(this).removeClass('active');
	});

   $('.header-wrap').mouseleave(function () {
		
		$(this).children('.depth02').removeClass('active');
	});



};

// SITEMAP FUNCTION
function familySiteFunc(){
    var familySiteBtn = $(".all-menu");

    familySiteBtn.on('click',function(){
        if($("#sitemap").hasClass("open")){
            $("#sitemap").removeClass("open");
			$("html").css("overflow-y","visible");
        }else{
            $("#sitemap").addClass("open");
			$("html").css("overflow-y","hidden");
        }
    });     

}
function sitemapFunc(){   
    var sitemapClose = $("#sitemap .sitemap-close");  
    sitemapClose.on('click',function(){
        if($('#sitemap').hasClass('open')){
            $('#sitemap').removeClass('open');
			$("html").css("overflow-y","visible");
        }else{
            $('#sitemap').addClass('open');
			$("html").css("overflow-y","hidden");
        }
    });    
}

