export function PanelCollapse() {
    
    // Hide if collapsed by default
    window.$('.panel-collapsed').each(function(){
        // alert('hi');
        window.$(this).children('.panel-heading').nextAll().hide();
    })


    // Rotate icon if collapsed by default
    window.$('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');


    // Collapse on click
    window.$(document).on('click', '[data-action=collapse]', function (e) {
        e.preventDefault();
        //alert('sauvik');
        var $panelCollapse = window.$(this).parent().parent().parent().parent().nextAll();
        window.$(this).parents('.panel').toggleClass('panel-collapsed');
        window.$(this).toggleClass('rotate-180');

        containerHeight(); // recalculate page height

        $panelCollapse.slideToggle(150);
    });

    // Calculate min height
    function containerHeight() {
        var availableHeight = window.$(window).height() - window.$('.page-container').offset().top - window.$('.navbar-fixed-bottom').outerHeight();

        window.$('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }

}