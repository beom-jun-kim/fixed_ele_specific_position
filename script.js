$(window).scroll(function () {
    const $tabProduct = $('.ec-base-tab ul');
    const $removeEvent = $(".ec-base-tab").offset().top;
    const $scrollTop = $(window).scrollTop();
    const $headerHeight = $("header").height();
    const $tabProductHeight = $('.ec-base-tab ul').offset().top;

    if (!$tabProduct.hasClass("fixed")) {
        if ($scrollTop >= $tabProductHeight) {
            $tabProduct.addClass("fixed")
        }
    } else {
        if ($scrollTop <= $removeEvent - $headerHeight) {
            $tabProduct.removeClass("fixed");
        }
    }
})


/* 

    #tabProduct ul이 fixed값을 갖지 않고 있을때,
    $(window).scrollTop() 이 $('#tabProduct ul').offset().top의 값보다 같거나 커지면
    #tabProduct ul에 fixed를 줘라
    그렇지 않은 상태에서(// #tabProduct ul이 fixed값을 갖고 있다면,)
    $(window).scrollTop() 이 .ec-base-tab보다 작아진다면
    #tabProduct ul에 fixed를 제거해라

*/
