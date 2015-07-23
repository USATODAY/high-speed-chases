define([
   "jquery",
   "underscore",
   "backbone",
   "config",
   "views/EntryView"
], function(jQuery, _, Backbone, config, EntryView) {
    return Backbone.View.extend({
        initialize: function() {
            this.subViews = [];
            this.hide();
        },
        render: function(models) {
            var _this = this;
            _.each(this.subViews, function(subView) {
                subView.remove();
            });
            _.each(models, function(entryModel) {
                var entryView = new EntryView({model: entryModel});
                _this.subViews.push(entryView);
                _this.$('.iapp-search-results-inner-wrap').append(entryView.el);
            });
            this.$('.no-results-entry').remove();
            if (models.length === 0) {
                this.$el.append(this.noResultsEntry);
            }
            this.show();
            return this;
        },
        noResultsEntry: "<div class='no-results-entry'><h2 class='iapp-search-entry-title'>No results</h2></div>",
        hide: function() {
            this.$el.hide();
        },
        show: function() {
            this.$el.show();
        }

    });
});
