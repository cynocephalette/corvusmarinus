$(document).ready(function () {
    var infos = $('.info');

    var setActive  = function () {
        var activeBook = $('.slick-center').attr('id') || '9780571169344';
        infos.each(function (index) {
            var info = $(infos[index]);
            if (info.attr('id') === 'info_'+activeBook) {
                info.show();
            } else {
                info.hide();
            }
        });
    };

    $('#carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        onAfterChange: setActive
    });

    setActive();
});

