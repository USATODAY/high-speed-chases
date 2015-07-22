define([
   "jquery",
   "underscore",
   "backbone",
   "d3",
   "config",
   "router", 
   "templates",
   "api/analytics"
], function(jQuery, _, Backbone, d3, config, router, templates, Analytics) {
    return Backbone.View.extend({
        initialize: function() {
            router.navigate('search/' + this.model.get('slug'));
            this.render();
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        },
        template: templates["DetailView.html"],
        events: {
            "click .iapp-detail-share-button": "onShareClick",
            "click .iapp-share-icon": "onShareButtonClick"
        },
        onCloseClick: function(e) {
            router.navigate('search/');
            this.remove();
        },
        onShareClick: function(e) {
            this.$('.iapp-share-icon-wrap').toggleClass('iapp-show');
        },
        onShareButtonClick: function(e) {
            Analytics.trackEvent('Social share button clicked');
            e.preventDefault();
            

          this.windowPopup(e.currentTarget.href, 500, 300);
        },
        windowPopup: function(url, width, height) {
            // Calculate the position of the popup so
            // it’s centered on the screen.
            var left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

            window.open(
                url,
                "",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
            );
        },
        drawChart: function() {
            var width = this.$(".iapp-detail-inner-wrap").outerWidth();
            var height = 30;
            var $el = $('.iapp-detail-chart');
            var $el2 = this.$('.iapp-detail-chart');
            var modelJSON = this.model.toJSON();
            var colors = ["blue", "red", "green"];
            var data = [modelJSON.police, modelJSON.fleeing_driver, modelJSON.bystanders + modelJSON.fleeing_other];
            var svg = d3.select('.iapp-detail-chart').append("svg")
                .attr("width", width)
                .attr("height", height);
            svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr("width", 30)
                .attr("height", height)
                .attr("transform", function(d, i) { return "translate(" + i * 30 + ", 0)";})
                .style('fill', function(d, i) { return colors[i];});
        }

    });
});
