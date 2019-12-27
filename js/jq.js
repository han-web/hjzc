$(function($){
$('.nav li').click(function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
    $('.biaodan').fadeToggle("slow","linear");
})
$('.bd_top li').eq(1).click(function(){
    $('.bd_top li').removeClass('active');
    $(this).addClass('active')
    $('.bd_bottom>div').removeClass('active');
    $('.bd_bottom>div').eq($(this).index()).addClass('active');
})
})
