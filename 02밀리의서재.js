$(function(){
    $('.accordion .title').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.accordion .content').slideToggle();
    })

})