$(function () {

    // 状态栏
    $('.lian a').click(function () {
        $.ajax({
            url: 'http://127.0.0.1:9091/api/getlianzai',
            dataType: 'json',
            success: function (data) {
                $('.lian-get ul').html(template('lianzai', data));

            }
        })
    })

    $('.list a').click(function () {
        $.ajax({
            url: 'http://127.0.0.1:9091/api/gettopics',
            dataType: 'json',
            success: function (data) {
                $('.lian-get ul').html(template('gettopics', data));
            }
        })
    })


    // 轮播图
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var slidePic = template('slidePic', data)
            $('.carousel-inner').html(slidePic);
            $('.carousel-inner .item:first-child').addClass('active');
        }
    })

    // tab栏标签页内容
    tabPic(1, '#home');
    tabPic(2, '#profile');
    tabPic(3, '#messages');
    tabPic(4, '#settings');

    function tabPic(type, id) {
        $.ajax({
            url: 'http://127.0.0.1:9091/api/gethometab/' + type,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var temp = template('tempProducts', data)
                $(id).html(temp);
            }
        })
    }







})