define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'dataManager',
    'config',
    'collections/EntriesCollection',
    'views/AppView'
  ],
  function(jQuery, _, Backbone, templates, DataManager, config, EntriesCollection, AppView){

    return {
        
        init: function() {
            var dataManager = new DataManager(config.dataURL);
            var $pageWrap = jQuery('.iapp-page-wrap');
            dataManager.getData(function(data) {
                var entriesCollection = new EntriesCollection(data);
                var appView = new AppView({collection: entriesCollection});
                $pageWrap.append(appView.el);
                Backbone.trigger("detail:draw");
            });

            $(window).resize(onResize);

            function onResize(e) {
                Backbone.trigger("window:resize");
            }

            if (config.isIframe) {
                $pageWrap.addClass('iapp-embed');
            }
        }

    };


});
