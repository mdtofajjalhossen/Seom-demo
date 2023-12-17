$(document).ready(function () {
    // smoothleyscroll
    function smoothleyscroll() {
        $('.Main-menu a[href^="#"],.go_top a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 74
                }, 1000);
            }
        });
    }
    smoothleyscroll();

    /*==============Amainginnerpage======*/
    function Amainginnerpage() {
        $('.Slide_ac').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            autoplaySpeed: 3000,
            speed: 600,
            pauseOnHover: false,
            cssEase: 'linear',
            initialSlide: 1,
            infinite: true,
            arrows:false,
             centerMode: true,
             centerPadding: '200px',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                       centerPadding: '0',
                        
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',
                    }
                },

                        {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',
                    }
                },

        
                ]
          });
    }
    Amainginnerpage();

    /*==============navbar fixed top======*/
    function NavBarfixed() {
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 100) {
                $(".Nav-fiX").addClass("fix_top");
            } else {
                $(".Nav-fiX").removeClass("fix_top");
            }
        });
            
    }
    NavBarfixed();
   /*==============wow js======*/
   new WOW().init();
 /*==============preloader js======*/

}); 
        
    

  