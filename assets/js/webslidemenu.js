jQuery(function() {
    'use strict';
    document['addEventListener']('touchstart', function() {}, false);
    jQuery(function() {
        jQuery('body')['wrapInner']('<div class="menu_container" />');
        jQuery('<div class="overlapblackbg"></div>')['prependTo']('.nav');
        jQuery('#nav_toggle')['click'](function() {
            jQuery('body')['toggleClass']('menu_active')
        });
        jQuery('.overlapblackbg')['click'](function() {
            jQuery('body')['removeClass']('menu_active')
        });
        jQuery('.nav_list> li')['has']('.sub-menu')['prepend']('<span class="menu_click"><i class="fa fa-angle-down"></i></span>');
        jQuery('.nav_list > li')['has']('.nav_tabbing')['prepend']('<span class="menu_click"><i class="fa fa-angle-down"></i></span>');
        jQuery('.nav_list > li')['has']('.megamenu')['prepend']('<span class="menu_click"><i class="fa fa-angle-down"></i></span>');
        jQuery('.menu_click')['on']('click', function() {
            jQuery(this)['toggleClass']('menu_active_row')['parent']()['siblings']()['children']()['removeClass']('menu_active_row');
            jQuery('.sub-menu, .nav_tabbing, .megamenu')['not'](jQuery(this)['siblings']('.sub-menu, .nav_tabbing, .megamenu'))['slideUp']('slow');
            jQuery(this)['siblings']('.sub-menu')['slideToggle']('slow');
            jQuery(this)['siblings']('.nav_tabbing')['slideToggle']('slow');
            jQuery(this)['siblings']('.megamenu')['slideToggle']('slow');
            return false
        });
        jQuery('.tab_content > li')['has']('.shop_cat')['prepend']('<span class="menu_click02"><i class="fa fa-angle-down"></i></span>');
        jQuery('.menu_click02')['on']('click', function() {
            jQuery(this)['siblings']('.shop_cat')['slideToggle']('slow');
            jQuery(this)['toggleClass']('menu_active_row02')['parent']()['siblings']()['children']()['removeClass']('menu_active_row02');
            jQuery('.shop_cat')['not'](jQuery(this)['siblings']('.shop_cat'))['slideUp']('slow');
            return false
        });
        jQuery('.tab_content02 > li')['has']('.brand_bottom')['prepend']('<span class="menu_click03"><i class="fa fa-angle-down"></i></span>');
        jQuery('.menu_click03')['on']('click', function() {
            jQuery(this)['siblings']('.brand_bottom')['slideToggle']('slow');
            jQuery(this)['toggleClass']('menu_active_row03')['parent']()['siblings']()['children']()['removeClass']('menu_active_row03');
            jQuery('.brand_bottom')['not'](jQuery(this)['siblings']('.brand_bottom'))['slideUp']('slow');
            return false
        });
        jQuery(window)['ready'](function() {
            jQuery('.nav_tabbing > .tab_shop > .tab_content > li')['on']('mouseenter', function() {
                jQuery(this)['addClass']('shoplink_active')['siblings'](this)['removeClass']('shoplink_active');
                return false
            });
            jQuery('.nav_tabbing.brand_menu > .tab_shop02 > .tab_content02 > li')['on']('mouseenter', function() {
                jQuery(this)['addClass']('shoplink_active')['siblings'](this)['removeClass']('shoplink_active');
                return false
            })
        });
        _0x1dfex2();
        jQuery(window)['on']('load resize', function() {
            var _0x1dfex1 = jQuery(window)['outerWidth']();
            if (_0x1dfex1 <= 991) {
                jQuery('.tab_shop')['css']('height', '100%');
                jQuery('.shop_cat')['css']('height', '100%')
            } else {
                _0x1dfex2()
            }
        });

        function _0x1dfex2() {
            var _0x1dfex3 = 1;
            jQuery('.tab_content > li')['each'](function() {
                var _0x1dfex4 = jQuery(this)['find']('.shop_cat')['innerHeight']();
                _0x1dfex3 = _0x1dfex4 > _0x1dfex3 ? _0x1dfex4 : _0x1dfex3;
                jQuery(this)['find']('.shop_cat')['css']('height', 'auto')
            });
            jQuery('.tab_shop')['css']('height', _0x1dfex3 + 0)
        }
        jQuery(document)['ready'](function(_0x1dfex5) {
            function _0x1dfex6() {
                if (_0x1dfex5(window)['outerWidth']() >= 991) {
                    _0x1dfex5('.nav_tabbing, .shop_cat, .brand_bottom, .megamenu, ul.sub-menu')['css']({
                        "\x64\x69\x73\x70\x6C\x61\x79": ''
                    })
                }
            }
            _0x1dfex6();
            _0x1dfex5(window)['resize'](_0x1dfex6)
        });
        jQuery(window)['on']('resize', function() {
            if (jQuery(window)['outerWidth']() <= 991) {
                jQuery('.nav')['css']('height', jQuery(this)['height']() + 'px');
                jQuery('.menu_container')['css']('min-width', jQuery(this)['width']() + 'px')
            } else {
                jQuery('.nav')['removeAttr']('style');
                jQuery('.menu_container')['removeAttr']('style');
                jQuery('body')['removeClass']('menu_active');
                jQuery('.menu_click')['removeClass']('menu_active_row');
                jQuery('.menu_click02')['removeClass']('menu_active_row02');
                jQuery('.menu_click03')['removeClass']('menu_active_row03')
            }
        });
        jQuery(window)['trigger']('resize')
    });
    jQuery(window)['on']('load', function() {
        jQuery('.mobile_header .mobile_search')['on']('click', function() {
            jQuery(this)['toggleClass']('search_open')
        });
        jQuery('body, .search_open .fa.fa-times')['on']('click', function() {
            jQuery('.mobile_search')['removeClass']('search_open')
        });
        jQuery('.mobile_search, .mobile_search_form form')['on']('click', function(_0x1dfex7) {
            _0x1dfex7['stopPropagation']()
        })
    })
}())