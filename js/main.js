$('.toggle-menu').click(function() {
    $('header nav').slideToggle()
    $('.toggle-menu').toggleClass('fa-bars')
    $('.toggle-menu').toggleClass('fa-xmark')
})

$('.service-type').click(function() {
    $(this).parent().toggleClass('box-active')
    $(this).next().slideToggle()
    $(this).find('i').toggleClass('fa-chevron-up')
    $(this).find('i').toggleClass('fa-chevron-down')
})