    
// Yo man, this is Ancil
//lijo commented
    //-----------------------------------------------------------------

    // LIGHTBOX INITIALIZATION

    //-----------------------------------------------------------------
    window.lightboxInit = function() {
        // IMAGE LIGHTBOX
        $('.image-lightbox').each(function() {
            
            var img_lightbox = $(this);
            img_lightbox.find('.image-selector').each(function() {
                var img_link = $(this).attr('href');
                $(this).prepend('<div class="thumb-image d-none"><img src="' + img_link + '" class="img-responsive hide" alt="thumb-image"/></div>');
            });

            img_lightbox.lightGallery({
                selector: ".image-selector",
                download: false,
                hideBarsDelay: 3000,
                // thumbnail: true,
            });
        });

        // VIDEO LIGHTBOX
        $('.video-lightbox').each(function() {
            
            $(this).lightGallery({
                selector: ".video-selector",
                thumbnail: false,
                download: false,
                videojs: true,
                counter: false,
                fullScreen: false,
                share: false,
                pager: false,
                zoom: false,
                // iframeMaxWidth: '50%',
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    // controls: 0
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: 'A90707'
                }
            });
        });
    };
   

    $(window).on('load', function() {

        $(".landing-header .menu-wrap a").on('click', function(event) {
        event.preventDefault();
        // alert(0);
        var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });


        lightboxInit();



    });

