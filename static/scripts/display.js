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
});
