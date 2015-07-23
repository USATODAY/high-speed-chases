define([
   "jquery",
   "underscore",
   "backbone",
   "helpers",
   "config"
], function(jQuery, _, Backbone, helpers, config) {
    return Backbone.Model.extend({
        initialize: function() {
            this.set({
                "total_pretty": this.get("total_dead").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                "slug": helpers.slugify(this.get('state'))
            });
            this.setShare();
        },
        setShare: function() {
            this.set({
                'fbShare': this.createFbShareURL(),
                'twitterShare': this.createTwitterShareURL(),
                'encodedShare': encodeURIComponent(config.defaultShareLanguage),
                'fb_id': config.fb_app_id,
                'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
                'email_link': this.createEmailLink(),
                'isMobile': config.isMobile,
                'stillimage': config.defaultShareImage
            });
        },
        createFbShareURL: function() {
            var slug = this.get('slug');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURI(baseURL + "%23search/" + slug); 
        },

        createTwitterShareURL: function() {
            var slug = this.get('slug');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURIComponent(baseURL + "#search/" + slug); 
        },

        createEmailLink: function(videoID) {
            return "mailto:?body=" + encodeURIComponent(this.get('sharelanguage')) +  "%0d%0d" + this.createTwitterShareURL(videoID) + "&subject=";
        }
    });
});
