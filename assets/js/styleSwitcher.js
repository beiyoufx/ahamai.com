/*====================================
      Author: speakitnow
      Template: MERA Personal Portfolio Template
      Version: 1.0
  ======================================*/

(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/
            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({ 'left': '-50px' });
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({ 'left': 0 });
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#pink').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/pink.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/blue.css');
            });
            $('#green').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/green.css');
            });
            $('#brown').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/brown.css');
            });
            $('#black').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/black.css');
            });
          
        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));
