;
(function($) {
    $('.seach h6').on('click', function() {
        $('.option').show();
    });
    $('.select li').on('click', function() {
        var txt = $(this).text();
        $('.seach h6').html(txt);
        $(this).parent().hide();
    });
    $('.val').on('focus', function() {
        $('.aim').show();
    });
    $('.aim li').on('click', function() {
        var val1 = $(this).text();
        $('.val').val(val1);
        $(this).parents('.aim').hide();
    });
    $.ajax({
        url: 'js/data.json',
        success: function(data) {
            render(data);
        }
    });
    // 渲染一级菜单
    function render(data) {
        var str = '';
        $.each(data, function(i, val) {
            str += '<li>' + val.title + '<div class="two">';
            // 如果有二级菜单时
            if (val.area) {
                $.each(val.area, function(v, obj) {
                    str += '<span>' + obj + '</span>';
                });
            }
            str += '</div></li>';
        });
        $('.list').append(str);
    }
    // 滑过二级菜单时
    $('.list').on('mouseenter', 'li', function() {
        $('.two').eq($(this).index()).show();
    });
    $('.list').on('mouseleave', 'li', function() {
        $('.two').eq($(this).index()).hide();
    });
})(jQuery)