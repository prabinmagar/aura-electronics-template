$(document).ready(function(){
    // sidebar toggle
    $('#tp-sidebar-show-btn').click(function(){
        $(".tp-nav-blk-3").addClass('show-sidebar-nav');
        $(".tp-nav-modal").addClass('show-top-nav-modal');
    });

    $('#tp-sidebar-hide-btn').click(function(){
        $(".tp-nav-blk-3").removeClass('show-sidebar-nav');
        $(".tp-nav-modal").removeClass('show-top-nav-modal');
    })

    $(window).click(function(e){
        if($(e.target).hasClass('show-top-nav-modal')){
            $(".tp-nav-blk-3").removeClass('show-sidebar-nav');
            $(".tp-nav-modal").removeClass('show-top-nav-modal');
        }
    });

    // animation and transition stopper on window resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    // owl carousel
    $('#hdr-slides').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    // owl carousel
    $('.feat-offers-slides').owlCarousel({
        loop:true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{ items:1 },
            800:{ items:2 },
            1200:{ items: 3 },
            1400:{ items:4 }
        },
        navText: ["<img src = 'assets/images/misc-icons/chevron-left.svg'>", "<img src = 'assets/images/misc-icons/chevron-right.svg'>"]
    });

    // product filtering
    var $grid = $('.aura-prod-itms').isotope({
    });
    
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
      });
    
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    
    // isotope filter buttons scripts
    const filterBtns = $('.prod-filter-button-group button');
    const resetActiveBtns = () => {
        jQuery.each(filterBtns, function(i, item){
            $(item).removeClass('filter-btn-active');
        })
    }
    
    // setting the active isotope filtering button
    jQuery.each(filterBtns, function(i, item){
        $(item).bind('click', function(event){
            if($(event.target).is('button')){
                resetActiveBtns();
                $(item).addClass('filter-btn-active');
            }
        })
    });

    // product preview 
    const prodPreviewContainer = $('.aura-prod-preview-img');
    const prodThumbItems = $('.aura-prod-preview-thumb-itm');

    jQuery.each(prodThumbItems, function(i, item){
        $(item).click(function(){
            let imgSrc = $(item).children('img').attr('src');
            $(prodPreviewContainer).html(`<img src = '${imgSrc}'/>`);
        });
    });
});