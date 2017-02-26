$(function(){
    $(".testBg").height($(window).height()).width($(window).width()); //使遮罩的背景覆盖整个页面
    var testContTop=($(window).height()-$(".testCont").height())/2;  //计算弹出的框距离页面顶部的距离
    var testContWidth=($(window).width()-$(".testCont").width())/2;   //计算弹出的框距离页面左边的距离
    $(".testCont").css({
        "top":testContTop,
        "left":testContWidth
    });
    $("#fooder").click(function(){
        $(".testBg").show();
    });
    $(".testBg").click(function() {
        $(".testBg").hide();
    });
})
