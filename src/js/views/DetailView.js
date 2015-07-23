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
        drawChart: function() {
            this.$('.iapp-detail-chart').empty();
            var width = this.$(".iapp-detail-inner-wrap").width();
            var colors = ["#1874B4", "#A72116", "#177C37"];
            var barHeight = 30;
            var height = 50;
            var modelJSON = this.model.toJSON();
            var data = [modelJSON.police, modelJSON.fleeing_driver, modelJSON.bystanders + modelJSON.fleeing_other];

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
                .duration(500)
                .attr("width", x);

            var key = this.svg.append("g")
                .attr("class", "iapp-chart-key")
                .attr("transform", "translate(0, " + (barHeight + 16) + ")");
            
            key.selectAll('.key-item')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'key-item')
                .attr("transform", function(d, i) {
                    return "translate(" + ((width / 3) * i) + ", 0)";
                })
                .append('rect')
                .attr("width", 16)
                .attr("height", 16)
                .attr("x", 0)
                .attr("y", -12)
                .attr("fill", function(d, i) {
                    return colors[i];
                });

            key.selectAll('.key-item')
                .append("text")
                .attr("transform", "translate(20, 0)")
                .text(function(d, i) {
                    if (i < 1) {
                        return "Police";
                    } else if (i < 2) {
                        return "Fleeing Drivers";
                    } else {
                        return "Non-violators";
                    }
                });
        }

    });
});
