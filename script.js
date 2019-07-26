$(function(){    

    $('a.galeria').on('click', function(){
        let src = $(this).find('img').attr('src');
        let img = "";
        let sizeX = 0;
        let sizeY = 0;
        $(".bgfull").fadeIn('fast');
        // $(".bgfull, .bgimg").fadeIn('fast');

        img = $('.bgimg img').attr('src', src);

        sizeX = img[0].naturalWidth;
        sizeY = img[0].naturalHeight;
        // console.log(img);

        $('.bgimg').css({
            width: sizeX,
            height: sizeY + 25,
            marginLeft: -(Math.floor(sizeX/2)),
            marginTop: -(Math.floor(sizeY/2))
        });
    })

    // $('.bgfull, .bgimg, .bgimg button').on('click', function(){
    //     $('.bgfull, .bgimg').fadeOut();
    // })

    $('.bgfull, .bgimg button ').on('click', function(){
        $('.bgfull').fadeOut();
    })


});
