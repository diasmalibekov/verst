$(function () {

    /* FILTER */
    let filter = $("[data-filter]");
    filter.on('click', function() {
        let category = $(this).data('filter');
        if(category == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function() {
            let workCategoty = $(this).data('cat');
            if(workCategoty != category) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
          });
        }
    });

    /* MODAL */
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    modalCall.on('click', function(event) {
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
        setTimeout(function() {
            $(modalId).find('.modal__dialog').css({
            transform: 'rotateX(0)'
            });
        }, 200);
        $('#worksSlider').slick('setPosition');
    });

    modalClose.on('click', function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });
        setTimeout(function() {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on('click', function(event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    });
    $('.modal__dialog').on('click', function(event) {
        event.stopPropagation();
    });

  /* SLIDER */
    $('#worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    });

    $('.slickPrev').on('click', function() {
        $('#worksSlider').slick('slickPrev');
    });
    $('.slickNext').on('click', function() {
        $('#worksSlider').slick('slickNext');
    });

    /* MOBILE NAVIGATION*/

    let navToggle = $('#navToggle');
    let nav = $('#nav');
    navToggle.on('click', function() {
        nav.toggleClass('show');
    })
});
