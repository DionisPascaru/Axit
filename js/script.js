$(document).ready(function(){
    $('.logo').on('click', function(){
        $("html").animate({ scrollTop: 0 }, 100);
    });

    $('.collapse-btn').click(function(){
        $('.nav-menu ul').toggleClass('open-menu');
    });
});