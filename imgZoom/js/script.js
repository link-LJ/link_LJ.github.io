; (function (window, $) {
    $(function () {
        $.fn.imgzoom = function () {
            this.each(function () {
                $(this).mouseenter(function () {
                    $(this).children().first().children().last().css({ 'display': 'block' });
                    $('.zoomdiv').css({ display: 'block' }); 
                    $(this).children().first().mousemove(function (event) {
                        var chil = $(this).children().last();
                        var disX = event.pageX - $(this).offset().left - chil.width() / 2,
                            disY = event.pageY - $(this).offset().top - chil.height() / 2;
                        var maxX = $(this).width() - chil.width(),
                            maxY = $(this).height() - chil.height();
                        if (disX > maxX) { disX = maxX; }
                        if (disX < 0) { disX = 0; }
                        if (disY > maxY) { disY = maxY; }
                        if (disY < 0) { disY = 0; }

                        chil.css({ positopn: "absolute", left: disX, top: disY });

                        var bigX = -1 * disX / $(this).width() * $('.zoomdiv').width(),
                            bigY = -1 * disY / $(this).height() * $('.zoomdiv').height();
                        console.log($('.zoomdiv').width(), $('.zoomdiv').height())
                       $(this).parent().next().find('img').css({ positopn: "absolute", left: bigX * 2 + 'px', top: bigY * 2 + 'px' });
                    });
                });
                $(this).mouseleave(function () {
                    $(this).children().first().children().last().css({ 'display': 'none' });
                    $(this).next().css({ display: 'none' });
                })
             
            });
        };

        $('#preview').imgzoom();
    })
})(window, jQuery);
   