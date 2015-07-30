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
            this.listenTo(Backbone, "detail:draw", this.onDetailDraw);
            this.listenTo(Backbone, "window:resize", this.reDrawChart);
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
        onDetailDraw: function() {
            this.drawChart();
        },
        drawChart: function(simple) {
            this.$('.iapp-detail-chart').empty();
            var width = this.$(".iapp-detail-inner-wrap").width();

            // if (config.isMobile) {
                // width = window.innerWidth - 46;
            // }

            var colors = ["#2e76ff", "#d00028", "#a6db5e"];
            var barHeight = 30;
            var height = 30;
            var modelJSON = this.model.toJSON();
            var data = [modelJSON.police, modelJSON.fleeing_driver, modelJSON.bystanders + modelJSON.fleeing_other];
            var transition = 500;
            if (simple) {
                transition = 0;
            }

            var x = d3.scale.linear()
                .domain([0, d3.sum(data)])
                .range([0, width]);
            

            this.svg = d3.select('.iapp-detail-chart').append("svg")
                .attr("width", width)
                .attr("height", height);

            this.svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr("width", 0)
                .attr("height", barHeight)
                .attr("transform", function(d, i) { 
                    var previousWidth = x(data[i-1]);
                    return "translate(" + previousWidth + ", 0)";
                })
                .style('fill', function(d, i) { return colors[i];})
                .transition()
                .duration(transition)
                .attr("width", x);
        },
        reDrawChart: function() {
            _.throttle(function(){
                this.drawChart(true);
            }, 500).bind(this)();
        }

    });
});
