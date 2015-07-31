define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["AppView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-search-wrap iapp-fade">\n    <div class="iapp-search ">\n        <div class="iapp-header">Police chases kill thousands</div>\n                <p class="iapp-chatter">Nearly every day, someone is killed during a high-speed chase between police and a suspect. Almost half of the 11,500 people killed since 1979 have been bystanders or passengers in fleeing cars. The following interactive graphic lets you analyze the number of deaths in every state and in major counties. It also explains what kinds of people were killed and why deadly chases began.</p>\n        <div class="iapp-search-input-group">\n            <img class="iapp-search-icon" src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/search-icon.svg" alt="Info">\n            <input class="iapp-search-input" type="text" placeholder="Search states">\n        </div>\n        <div class="iapp-search-results-wrap" style="display: none">\n            <div class="iapp-search-results-inner-wrap"></div>\n        </div>\n        <div class="iapp-detail-container"></div>\n    </div>\n    <div class="iapp-info-button" style="display: none">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/question-icon.svg" alt="Info">\n    </div>\n    <div class="iapp-play-button">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/play-icon-white.svg" alt="Play video"> <span>Play Video</span>\n    </div>\n</div>\n\n<div class="iapp-info-wrap">\n    <div class="iapp-info-close"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/close-icon-white.svg" alt="close"></div>\n    <div class="iapp-info-inner-wrap">\n        <h3 class="iapp-info-header">Credits</h3>\n        <p class="iapp-info-p">Tom Frank, John Kelly, Shawn Sullivan, Mitchell Thorson, Zachary Walker, USA TODAY</p>\n    </div>\n    <div class="iapp-detail-background js-iapp-info-background"></div>\n</div>\n<div class="iapp-mobile-video-container"></div>\n';

}
return __p
};

this["templates"]["DetailView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-detail-inner-wrap">\n    <h2 class="iapp-detail-head">' +
((__t = (full_state)) == null ? '' : __t) +
'</h2>\n    <div class="iapp-detail-group">\n            <span class="iapp-detail-data-label">Total Dead: </span>\n            <span class="iapp-detail-data-text label label-primary">' +
((__t = ( total_pretty )) == null ? '' : __t) +
'</span>\n        </div>\n    <h3 class="iapp-detail-sub-head">Breakdown of deaths</h3>\n    <div class="iapp-detail-chart"></div>\n    <div class="iapp-detail-key">\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color police"></span>\n            <span class="iapp-detail-key-text">Police: </span>\n            <br/>\n            <span class="iapp-detail-key-item-number">' +
((__t = (police)) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color driver"></span>\n            <span class="iapp-detail-key-text">Fleeing Drivers:</span>\n            <br/>\n            <span class="iapp-detail-key-item-number">' +
((__t = (fleeing_driver)) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color non-violator"></span>\n            <span class="iapp-detail-key-text">Non-violators: </span>\n            <br/>\n            <span class="iapp-detail-key-item-number">';
print(bystanders + fleeing_other);
__p += '</span>\n        </div>\n    </div>\n    <h3 class="iapp-detail-sub-head">Top Counties</h3>\n    <table class="table table-condensed">\n        <thead>\n            <tr>\n                <th>County</th>\n                <th>Total Dead</th>\n                <th>Police</th>\n                <th>Fleeing Drivers</th>\n                <th>Non-violators</th>\n            </tr>\n        </thead>\n        <tbody>\n        ';
 _.each(top_10, function(county) { ;
__p += '\n            <tr>\n                <td>' +
((__t = ( county.county )) == null ? '' : __t) +
'</td>\n                <td class="table-number">' +
((__t = ( county.total_dead )) == null ? '' : __t) +
'</td>\n                <td class="table-number">' +
((__t = ( county.police )) == null ? '' : __t) +
'</td>\n                <td class="table-number">' +
((__t = ( county.fleeing_driver )) == null ? '' : __t) +
'</td>\n                <td class="table-number">';
 print(county.bystanders + county.fleeing_other) ;
__p += '</td>\n            </tr>\n        ';
 }); ;
__p += '\n        </tbody>\n    </table>\n</div>\n<div class="iapp-detail-share-wrap">\n    <span class="iapp-detail-share-button">Share</span>\n    <div class="iapp-share-icon-wrap">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-icon iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-icon iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/facebook.svg" alt="Facebook share"></a>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["EntryView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="iapp-search-entry-title">' +
((__t = ( full_state )) == null ? '' : __t) +
'</h2>\n';

}
return __p
};

this["templates"]["IntroVideo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (isMobile || isTablet) { ;
__p += '\n    <div class="video-wrap video-wrap-mobile"> \n';
 } else { ;
__p += '\n    <div class="video-wrap"> \n';
 } ;
__p += '\n    <div class="video-intro-overlay">\n        <div class="video-intro-overlay-content">\n            <h2 class="iapp-header">Police chases kill thousands</h2>\n                <p class="video-intro-overlay-chatter">Nearly every day, someone is killed during a high-speed chase between police and a suspect. Almost half of the 11,500 people killed since 1979 have been bystanders or passengers in fleeing cars. The following interactive graphic lets you analyze the number of deaths in every state and in major counties. It also explains what kinds of people were killed and why deadly chases began.</p>\n            ';
 if (!isMobile) {;
__p += '\n                <div class="iapp-tablet-play-button"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/play-icon-white.svg" alt="Play video"></div>\n                <div class="iapp-button iapp-video-skip-button"><div class="iapp-button-text">Search Data</div></div>\n            ';
 } ;
__p += '\n        </div>\n        </div>\n        ';
 if (!isMobile) { ;
__p += '\n        <!-- Video Controls -->\n        <div class="video-close-button iapp-button" style="display: none"><div class="iapp-button-text">Skip Video</div></div>\n        <div id="video-controls" class="">\n            <div id="play-pause" class="play"></div>\n            <div id="seek-bar">\n                <div id="video-dot"></div>\n            </div>\n        </div> \n        ';
 } ;
__p += '\n        ';
 if (!isMobile) { ;
__p += '\n        <video id="introvid" class="bgvideo" poster="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/img/video_still.jpg">\n        ';
 } else { ;
__p += '\n        <video id="introvid" class="bgvideo" controls poster="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/img/video_still.jpg">\n        ';
 } ;
__p += '\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.mp4" type="video/mp4" />\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.ogv" type="video/ogg" />\n        </video>\n        ';
 if (isMobile || isTablet) { ;
__p += '\n            <div class="iapp-button iapp-video-skip-button"><div class="iapp-button-text">Search Data</div></div>\n        ';
 } ;
__p += '\n</div>\n\n\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});