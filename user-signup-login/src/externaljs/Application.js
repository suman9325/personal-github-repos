export function Application() {
    /* ------------------------------------------------------------------------------
*
*  # Template JS core
*
*  Core JS file with default functionality configuration
*
*  Version: 1.2
*  Latest update: Dec 11, 2015
*
* ---------------------------------------------------------------------------- */


    // Allow CSS transitions when page is loaded
    window.$(window).on('load', function () {
        window.$('body').removeClass('no-transitions');
    });


    window.$(function () {

        // Disable CSS transitions on page load
        window.$('body').addClass('no-transitions');



        // ========================================
        //
        // Content area height
        //
        // ========================================


        // Calculate min height
        function containerHeight() {
            if (window.$('.page-container').length) {
                var availableHeight = window.$(window).height() - window.$('.page-container').offset().top - window.$('.navbar-fixed-bottom').outerHeight();

                window.$('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
            }

        }

        // Initialize
        containerHeight();




        // ========================================
        //
        // Heading elements
        //
        // ========================================


        // Heading elements toggler
        // -------------------------

        // Add control button toggler to page and panel headers if have heading elements
        window.$('.panel-footer').has('> .heading-elements:not(.not-collapsible)').prepend('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');
        window.$('.page-title, .panel-title').parent().has('> .heading-elements:not(.not-collapsible)').children('.page-title, .panel-title').append('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');


        // Toggle visible state of heading elements
        window.$('.page-title .heading-elements-toggle, .panel-title .heading-elements-toggle').on('click', function () {
            window.$(this).parent().parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
        });
        window.$('.panel-footer .heading-elements-toggle').on('click', function () {
            window.$(this).parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
        });



        // Breadcrumb elements toggler
        // -------------------------

        // Add control button toggler to breadcrumbs if has elements
        window.$('.breadcrumb-line').has('.breadcrumb-elements').prepend('<a class="breadcrumb-elements-toggle"><i class="icon-menu-open"></i></a>');


        // Toggle visible state of breadcrumb elements
        window.$('.breadcrumb-elements-toggle').on('click', function () {
            window.$(this).parent().children('.breadcrumb-elements').toggleClass('visible-elements');
        });




        // ========================================
        //
        // Navbar
        //
        // ========================================


        // Navbar navigation
        // -------------------------

        // Prevent dropdown from closing on click
        window.$(document).on('click', '.dropdown-content', function (e) {
            e.stopPropagation();
        });

        // Disabled links
        window.$('.navbar-nav .disabled a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Show tabs inside dropdowns
        window.$('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
            window.$(this).tab('show');
        });




        // ========================================
        //
        // Element controls
        //
        // ========================================


        // Reload elements
        // -------------------------

        // Panels
        window.$('.panel [data-action=reload]').click(function (e) {
            e.preventDefault();
            var block = window.$(this).parent().parent().parent().parent().parent();
            window.$(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                window.$(block).unblock();
            }, 2000);
        });


        // Sidebar categories
        window.$('.category-title [data-action=reload]').click(function (e) {
            e.preventDefault();
            var block = window.$(this).parent().parent().parent().parent();
            window.$(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#000',
                    opacity: 0.5,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #000'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                window.$(block).unblock();
            }, 2000);
        });


        // Light sidebar categories
        window.$('.sidebar-default .category-title [data-action=reload]').click(function (e) {
            e.preventDefault();
            var block = window.$(this).parent().parent().parent().parent();
            window.$(block).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait',
                    'box-shadow': '0 0 0 1px #ddd'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });

            // For demo purposes
            window.setTimeout(function () {
                window.$(block).unblock();
            }, 2000);
        });



        // Collapse elements
        // -------------------------

        //
        // Sidebar categories
        //

        // Hide if collapsed by default
        window.$('.category-collapsed').children('.category-content').hide();


        // Rotate icon if collapsed by default
        window.$('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');


        // Collapse on click
        window.$('.category-title [data-action=collapse]').click(function (e) {
            e.preventDefault();
            var $categoryCollapse = window.$(this).parent().parent().parent().nextAll();
            window.$(this).parents('.category-title').toggleClass('category-collapsed');
            window.$(this).toggleClass('rotate-180');

            containerHeight(); // adjust page height

            $categoryCollapse.slideToggle(150);
        });


        //
        // Panels
        //

        // Hide if collapsed by default
        window.$('.panel-collapsed').children('.panel-heading').nextAll().hide();


        // Rotate icon if collapsed by default
        window.$('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');


        // Collapse on click
        window.$('.panel [data-action=collapse]').click(function (e) {
            e.preventDefault();
            var $panelCollapse = window.$(this).parent().parent().parent().parent().nextAll();
            window.$(this).parents('.panel').toggleClass('panel-collapsed');
            window.$(this).toggleClass('rotate-180');

            containerHeight(); // recalculate page height

            $panelCollapse.slideToggle(150);
        });



        // Remove elements
        // -------------------------

        // Panels
        window.$('.panel [data-action=close]').click(function (e) {
            e.preventDefault();
            var $panelClose = window.$(this).parent().parent().parent().parent().parent();

            containerHeight(); // recalculate page height

            $panelClose.slideUp(150, function () {
                window.$(this).remove();
            });
        });


        // Sidebar categories
        window.$('.category-title [data-action=close]').click(function (e) {
            e.preventDefault();
            var $categoryClose = window.$(this).parent().parent().parent().parent();

            containerHeight(); // recalculate page height

            $categoryClose.slideUp(150, function () {
                window.$(this).remove();
            });
        });




        // ========================================
        //
        // Main navigation
        //
        // ========================================


        // Main navigation
        // -------------------------

        // Add 'active' class to parent list item in all levels
        window.$('.navigation').find('li.active').parents('li').addClass('active');

        // Hide all nested lists
        window.$('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

        // Highlight children links
        window.$('.navigation').find('li').has('ul').children('a').addClass('has-ul');

        // Add active state to all dropdown parent levels
        window.$('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');



        // Main navigation tooltips positioning
        // -------------------------

        // Left sidebar
        window.$('.navigation-main > .navigation-header > i').tooltip({
            placement: 'right',
            container: 'body'
        });



        // Collapsible functionality
        // -------------------------

        // Main navigation
        window.$('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // // Collapsible
            // window.$(this).parent('li').not('.disabled').not(window.$('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // // Accordion
            // if (window.$('.navigation-main').hasClass('navigation-accordion')) {
            //     window.$(this).parent('li').not('.disabled').not(window.$('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            // }
            var sideMenu = window.$(this).parent('li').not('.disabled').not(window.$('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li'));
            // var checkActiveSibling = sideMenu.find('li.active').length;
            // var checkDisplayStatus = sideMenu.children('ul').is(':visible');

            // if(checkActiveSibling) {
            //     window.$('.navigation-main').find('li:has(ul)').not(sideMenu).removeClass('active active-without-bg');
            // }

            // // Collapsible
            // if(checkActiveSibling > 0 && !checkDisplayStatus) {
            //     sideMenu.removeClass('active').addClass('active-without-bg').children('ul').slideDown(250);
            // } else if(checkActiveSibling > 0 && checkDisplayStatus) {
            //     sideMenu.removeClass('active-without-bg').addClass('active').children('ul').slideUp(250);
            // } else {
            // sideMenu.toggleClass('active-without-bg').children('ul').slideToggle(250);
            //     sideMenu.toggleClass('active').children('ul').slideToggle(250);
            // }

            window.$('.navigation-main').find('li').not(sideMenu).removeClass('active slide-li');
            sideMenu.addClass('active').toggleClass('slide-li').children('ul').slideToggle(250);

            // Accordion
            if (window.$('.navigation-main').hasClass('navigation-accordion')) {
                sideMenu.siblings(':has(.has-ul)').children('ul').slideUp(250);
            }
        });
        window.$('.navigation-main').find('li:not(:has(ul))').children('a').on('click', function (e) {
            var parentLi = window.$(this).parent();
            var allNavLi = window.$('.navigation-main').find('li').not(parentLi);
            // parentLi.parent('ul').hasClass('hidden-ul') && window.$('.navigation-main').find('li').not(parentLi.parents('li')).removeClass('active active-without-bg');
            // !parentLi.parent('ul').hasClass('hidden-ul') && window.$('.navigation-main').find('li').not(parentLi).removeClass('active active-without-bg');
            // !parentLi.parent('ul').hasClass('hidden-ul') && window.$('.navigation-main').find('li:has(ul)').find('ul:visible').slideUp(250);
            // !parentLi.hasClass('active') && parentLi.addClass('active');
            allNavLi.removeClass('active');
            if (!parentLi.parent('ul').hasClass('hidden-ul')) {
                window.$('.navigation-main').find('li:has(ul)').find('ul:visible').slideUp(250);
                allNavLi.removeClass('slide-li');
            }
            parentLi.addClass('active');
        });


        // Alternate navigation
        window.$('.navigation-alt').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            window.$(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

            // Accordion
            if (window.$('.navigation-alt').hasClass('navigation-accordion')) {
                window.$(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
            }
        });




        // ========================================
        //
        // Sidebars
        //
        // ========================================


        // Mini sidebar
        // -------------------------

        // Toggle mini sidebar
        window.$('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();

            // Toggle min sidebar class
            window.$('body').toggleClass('sidebar-xs');
        });



        // Sidebar controls
        // -------------------------

        // Disable click in disabled navigation items
        window.$(document).on('click', '.navigation .disabled a', function (e) {
            e.preventDefault();
        });


        // Adjust page height on sidebar control button click
        window.$(document).on('click', '.sidebar-control', function (e) {
            containerHeight();
        });


        // Hide main sidebar in Dual Sidebar
        window.$(document).on('click', '.sidebar-main-hide', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-main-hidden');
        });


        // Toggle second sidebar in Dual Sidebar
        window.$(document).on('click', '.sidebar-secondary-hide', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-secondary-hidden');
        });


        // Hide detached sidebar
        window.$(document).on('click', '.sidebar-detached-hide', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-detached-hidden');
        });


        // Hide all sidebars
        window.$(document).on('click', '.sidebar-all-hide', function (e) {
            e.preventDefault();

            window.$('body').toggleClass('sidebar-all-hidden');
        });



        //
        // Opposite sidebar
        //

        // Collapse main sidebar if opposite sidebar is visible
        window.$(document).on('click', '.sidebar-opposite-toggle', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            window.$('body').toggleClass('sidebar-opposite-visible');

            // If visible
            if (window.$('body').hasClass('sidebar-opposite-visible')) {

                // Make main sidebar mini
                window.$('body').addClass('sidebar-xs');

                // Hide children lists
                window.$('.navigation-main').children('li').children('ul').css('display', '');
            }
            else {

                // Make main sidebar default
                window.$('body').removeClass('sidebar-xs');
            }
        });


        // Hide main sidebar if opposite sidebar is shown
        window.$(document).on('click', '.sidebar-opposite-main-hide', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            window.$('body').toggleClass('sidebar-opposite-visible');

            // If visible
            if (window.$('body').hasClass('sidebar-opposite-visible')) {

                // Hide main sidebar
                window.$('body').addClass('sidebar-main-hidden');
            }
            else {

                // Show main sidebar
                window.$('body').removeClass('sidebar-main-hidden');
            }
        });


        // Hide secondary sidebar if opposite sidebar is shown
        window.$(document).on('click', '.sidebar-opposite-secondary-hide', function (e) {
            e.preventDefault();

            // Opposite sidebar visibility
            window.$('body').toggleClass('sidebar-opposite-visible');

            // If visible
            if (window.$('body').hasClass('sidebar-opposite-visible')) {

                // Hide secondary
                window.$('body').addClass('sidebar-secondary-hidden');

            }
            else {

                // Show secondary
                window.$('body').removeClass('sidebar-secondary-hidden');
            }
        });


        // Hide all sidebars if opposite sidebar is shown
        window.$(document).on('click', '.sidebar-opposite-hide', function (e) {
            e.preventDefault();

            // Toggle sidebars visibility
            window.$('body').toggleClass('sidebar-all-hidden');

            // If hidden
            if (window.$('body').hasClass('sidebar-all-hidden')) {

                // Show opposite
                window.$('body').addClass('sidebar-opposite-visible');

                // Hide children lists
                window.$('.navigation-main').children('li').children('ul').css('display', '');
            }
            else {

                // Hide opposite
                window.$('body').removeClass('sidebar-opposite-visible');
            }
        });


        // Keep the width of the main sidebar if opposite sidebar is visible
        window.$(document).on('click', '.sidebar-opposite-fix', function (e) {
            e.preventDefault();

            // Toggle opposite sidebar visibility
            window.$('body').toggleClass('sidebar-opposite-visible');
        });



        // Mobile sidebar controls
        // -------------------------

        // Toggle main sidebar
        window.$('.sidebar-mobile-main-toggle').on('click', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-opposite sidebar-mobile-detached');
        });


        // Toggle secondary sidebar
        window.$('.sidebar-mobile-secondary-toggle').on('click', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-opposite sidebar-mobile-detached');
        });


        // Toggle opposite sidebar
        window.$('.sidebar-mobile-opposite-toggle').on('click', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-mobile-opposite').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached');
        });


        // Toggle detached sidebar
        window.$('.sidebar-mobile-detached-toggle').on('click', function (e) {
            e.preventDefault();
            window.$('body').toggleClass('sidebar-mobile-detached').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-opposite');
        });


        // Mobile sidebar setup
        // -------------------------

        window.$(window).on('resize', function () {
            setTimeout(function () {
                containerHeight();

                if (window.$(window).width() <= 768) {

                    // Add mini sidebar indicator
                    window.$('body').addClass('sidebar-xs-indicator');

                    // Place right sidebar before content
                    window.$('.sidebar-opposite').insertBefore('.content-wrapper');

                    // Place detached sidebar before content
                    window.$('.sidebar-detached').insertBefore('.content-wrapper');

                    // Add mouse events for dropdown submenus
                    window.$('.dropdown-submenu').on('mouseenter', function () {
                        window.$(this).children('.dropdown-menu').addClass('show');
                    }).on('mouseleave', function () {
                        window.$(this).children('.dropdown-menu').removeClass('show');
                    });
                }
                else {

                    // Remove mini sidebar indicator
                    window.$('body').removeClass('sidebar-xs-indicator');

                    // Revert back right sidebar
                    window.$('.sidebar-opposite').insertAfter('.content-wrapper');

                    // Remove all mobile sidebar classes
                    window.$('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached sidebar-mobile-opposite');

                    // Revert left detached position
                    if (window.$('body').hasClass('has-detached-left')) {
                        window.$('.sidebar-detached').insertBefore('.container-detached');
                    }

                    // Revert right detached position
                    else if (window.$('body').hasClass('has-detached-right')) {
                        window.$('.sidebar-detached').insertAfter('.container-detached');
                    }

                    // Remove visibility of heading elements on desktop
                    window.$('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
                    window.$('.heading-elements').removeClass('visible-elements');

                    // Disable appearance of dropdown submenus
                    window.$('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
                }
            }, 100);
        }).resize();




        // ========================================
        //
        // Other code
        //
        // ========================================


        // Plugins
        // -------------------------

        // Popover
        window.$('[data-popup="popover"]').popover();


        // Tooltip
        window.$('[data-popup="tooltip"]').tooltip();

    });

     // ------------------------- datatable custom export button -------------------------//
     window.exportClick = () => {
        window.$(".buttons-excel").click();
    }


}