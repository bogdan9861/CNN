$(function () {
    var list = document.getElementsByClassName('menu-search');
    var width = screen.width;
    var password = document.getElementById("password");

    $('.dropdown-btn').on('click', function () {
        $('.dropdown-btn').toggleClass('dropdown-btn--active');
    })

    if (width <= 981) {
        $('.search, .header-burger').on('click', function () {
            $('.mobile__list').toggleClass('mobile__list--active');
            $('.menu-search').toggleClass('menu-search--active');
        })

        $('.dropdown__inner').on('click', function () {
            $('.mobile__dropdown-list').slideToggle(200);
        });

        $('.mobile__dropdown').on('click', function () {
            $(this).toggleClass('mobile__dropdown--active');
        })

        $('.mobile__dropdown-list').hide();
    }

    if (width >= 1021) {
        $('.menu__search--mobile').hide();
    }

    $('.search, .header-burger').on('click', function () {
        $('.menu-search').toggleClass('menu-search--active');
    })

    $('.header-burger').on('click', function () {
        $(this).toggleClass('header-burger--active');
    })

    $(function () {

        $(".modal-inline").fancybox({
            margin: 0,
            padding: 20,
            maxWidth: 400,
            autoScale: true,
            transitionIn: 'none',
            transitionOut: 'none',
            type: 'inline',
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    });

    $('.hide-password__img').on('click', function () {
        $('.hide-password__img').hide();
        $('.show-password__img').show();
        $('#password').attr('type', 'text');
    })

    $('.show-password__img').on('click', function () {
        $('.show-password__img').hide();
        $('.hide-password__img').show();
        $('#password').attr('type', 'password');
    })


});