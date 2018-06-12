(function ($) {
    'use strict';
    $(document).ready(whenReady);

    function whenReady($) {
        var $timeline = $('.c-timeline__entry[data-date], .c-timeline__entry[data-week]');
        $timeline.each(function () {
            console.log($(this).data('date'));
            console.log($(this).data('week'));
            moment.locale($('html').attr('lang'));
            var dataDate = $(this).data('date'),
                dataWeek = $(this).data('week'),
                element = '';
            if (typeof dataDate === 'undefined') {
                element = $('<div>').addClass('c-timeline__date').text('Week ' + dataWeek);
            } else {
                var string = moment(dataDate).format('ddd D MMMM');
                element = $('<time>').addClass('c-timeline__date').text(string).attr('datetime', dataDate);
            }
            $(this).find('.c-timeline__content').prepend(element);
        });
    }
})(jQuery);