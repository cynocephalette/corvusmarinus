$(document).ready(function () {
    var headers = $('header, .subheader');
    headers.each(function (index) {
        var header = $(headers[index]);
        var next = headers[index + 1];
        header.scrollToFixed({
            limit: function () {
                var limit = 0;
                if (next) {
                    limit = $(next).offset().top - $(this).outerHeight(true);
                } else {
                    limit = 0 - $(this).outerHeight(true);
                }
                return limit;
            },
            zIndex: 999
        });
    });

    var $root = $('html, body');
    $('.navigation a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

});

