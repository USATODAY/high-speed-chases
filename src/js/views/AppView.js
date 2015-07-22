define([
   "jquery",
   "underscore",
   "lib/BackboneRouter",
   "templates",
   "helpers",
   "config",
   "router",
   "views/ResultsView",
   "views/DetailView",
   "views/VideoView"
], function(jQuery, _, Backbone, templates, helpers, config, router, ResultsView, DetailView, VideoView) {
    return Backbone.View.extend({
        initialize: function() {
            this.listenTo(Backbone, "detail:show", this.onDetailShow);
            this.listenTo(Backbone, "video:end", this.onVideoEnd);
            this.listenTo(Backbone, "router:search", this.skipVideo);
            this.listenTo(Backbone, "router:detail", this.onDetailRoute);
            this.listenTo(Backbone, "router:info", this.onInfoRoute);
            this.render();
        },
        render: function() {
            this.$el.html(this.template({isMobile: config.isMobile || config.isTablet}));
            var videoView = new VideoView();

            var usModel = this.collection.findWhere({'full_state': 'US Total'});

            if (config.isMobile || config.isTablet) {
                this.$('.iapp-mobile-video-container').html(videoView.render().el);
            } else {
                this.$el.append(videoView.render().el);
            }
            this.resultsView = new ResultsView({el: this.$(".iapp-search-results-wrap")});
            Backbone.trigger("detail:show", usModel);
            Backbone.history.start();
            return this;
        },
        events: {
            "keyup .iapp-search-input": "onSearchChange",
            "focus .iapp-search-input": "onSearchFocus",
            "click .iapp-info-button": "showInfo",
            "click .iapp-play-button": "showVideo",
            "click .iapp-info-close": "closeInfo",
            "click .js-iapp-info-background": "closeInfo"

        },
        template: templates["AppView.html"],
        filterItems: _.throttle(function(filterTerm) {
            filterTerm = helpers.slugify(filterTerm);
            var filteredArray = this.collection.filter(function(entryModel) {
                return entryModel.get("slug").indexOf(filterTerm) > -1 || helpers.slugify(entryModel.get("full_state")).indexOf(filterTerm) > -1;
            });
            return filteredArray;
        }, 300),
        onSearchFocus: function(e) {
            //get offset height of input
            $searchInput = this.$('.iapp-search-input');
            offset = $searchInput.offset().top;
            $('article').scrollTop(offset + 100);
        },
        onSearchChange: function(e) {
            var _this = this;
            this.resultsView.show();
            var filterTerm = this.$('.iapp-search-input').val();
            var filteredItems = this.filterItems(filterTerm);
            if (filterTerm !== "") {
                this.resultsView.render(filteredItems);
            } else {
                this.resultsView.hide();
            }
        },
        skipVideo: function() {
            this.$('.iapp-search-wrap').removeClass('iapp-fade');
        },
        onDetailRoute: function(slug) {
            this.skipVideo();
            var entryModel = this.collection.findWhere({slug: slug});
            this.onDetailShow(entryModel);
        },
        onDetailShow: function(entryModel) {
            this.$('.iapp-search-input').val('');
            this.onSearchChange();
            this.detailView = new DetailView({model: entryModel});
            this.$('.iapp-detail-container').html(this.detailView.el);
            this.detailView.drawChart();
        },
        onVideoEnd: function() {
            this.$('.iapp-search-wrap').removeClass('iapp-fade');
            router.navigate('search/');
        },
        showVideo: function() {
            Backbone.trigger('video:show');
            this.$('.iapp-search-wrap').addClass('iapp-fade');
        },
        onInfoRoute: function() {
            this.skipVideo();
            this.showInfo();
        },
        showInfo : function(e) {
            this.$('.iapp-info-wrap').show();
            router.navigate("info/");
        },
        closeInfo: function(e) {
            router.navigate("search/");
            this.$('.iapp-info-wrap').hide();
        }

    });
});
