define([
   "jquery",
   "underscore",
   "backbone",
   "helpers",
   "config"
], function(jQuery, _, Backbone, helpers, config) {
    return Backbone.Model.extend({
        initialize: function() {
            console.log(this.get('full_state'));
            this.set({
                "slug": helpers.slugify(this.get('full_state'))
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
            var slug = this.get('state');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURI(baseURL + "%23state/" + slug); 
        },

        createTwitterShareURL: function() {
            var slug = this.get('state');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURIComponent(baseURL + "#state/" + slug); 
        },

        createEmailLink: function(videoID) {
            return "mailto:?body=" + encodeURIComponent(this.get('sharelanguage')) +  "%0d%0d" + this.createTwitterShareURL(videoID) + "&subject=";
        }
    });
});
