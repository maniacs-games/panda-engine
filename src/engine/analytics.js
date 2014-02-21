/**
    Google Analytics.
    
    @module analytics
    @namespace game
**/
game.module(
    'engine.analytics'
)
.body(function() {

/**
    Example: http://www.pandajs.net/tutorials/example-2/

    @class game.Analytics
**/
game.Analytics = game.Class.extend({
    init: function() {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        var id = window.pandaConfig.analyticsId || '';
        ga('create', id, 'auto');
        ga('send', 'pageview');
    },

    /**
        Send event to analytics.
        @method event
        @param {String} category
        @param {String} action
    **/
    event: function(category, action) {
        ga('send', 'event', category, action);
    }
});

});