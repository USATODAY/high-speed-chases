define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["AppView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-search-wrap">\n    <img class="iapp-branding-logo" src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/logo.png" alt="Untested rape kits">\n    <div class="iapp-mobile-video-container"></div>\n    <div class="iapp-search iapp-fade">\n        <p class="iapp-chatter">Chatter chatter chatter Elit laudantium blanditiis repellat error consectetur. Beatae doloremque aliquid neque corporis tenetur culpa et veritatis. Optio facere minima enim obcaecati corporis, voluptates nisi veniam similique facilis! Quia officia iure facere.</p>\n        <div class="iapp-search-input-group">\n            <img class="iapp-search-icon" src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/search-icon.svg" alt="Info">\n            <input class="iapp-search-input" type="text" placeholder="Search police departments">\n        </div>\n        <div class="iapp-search-results-wrap"></div>\n    </div>\n    <div class="iapp-info-button">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/question-icon.svg" alt="Info">\n    </div>\n    <div class="iapp-play-button">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/play-icon-white.svg" alt="Play video">\n    </div>\n</div>\n\n<div class="iapp-info-wrap">\n    <div class="iapp-info-close"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/close-icon-white.svg" alt="close"></div>\n    <div class="iapp-info-inner-wrap">\n        <h3 class="iapp-info-header">Info</h3>\n        <p class="iapp-info-p">Adipisicing tenetur similique amet voluptatibus nihil veniam delectus? Natus quis sint necessitatibus quos impedit. Obcaecati ex sint recusandae quo explicabo animi repellendus ratione consectetur voluptatum esse! Praesentium doloribus veritatis praesentium?</p>\n    \n        <h3 class="iapp-info-header">Credits</h3>\n    </div>\n    <div class="iapp-detail-background js-iapp-info-background"></div>\n</div>\n';

}
return __p
};

this["templates"]["DetailView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-detail-wrap">\n    <div class="iapp-detail-inner-wrap">\n        <div class="iapp-detail-close-button"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/close-icon-grey-2.svg" alt="close"></div>\n        <h2 class="iapp-detail-head">' +
((__t = (Agency)) == null ? '' : __t) +
'</h2>\n        <h4 class="iapp-detail-sub-head">' +
((__t = (State)) == null ? '' : __t) +
'</h4>\n        <div class="iapp-detail-group">\n            <span class="iapp-detail-data-label">Total untested kits: </span>\n            <span class="iapp-detail-data-text label label-primary">' +
((__t = ( Total_untested_kits_pretty )) == null ? '' : __t) +
'</span>\n        </div>\n        <h4 class="iapp-detail-info">Current as of: ' +
((__t = (Current_as_of_date )) == null ? '' : __t) +
'</h4>\n        <h4 class="iapp-detail-info">Source: ' +
((__t = (Source )) == null ? '' : __t) +
'</h4>\n    </div>\n    <div class="iapp-detail-share-wrap">\n        <div class="iapp-detail-share-button">Share</div>\n        <div class="iapp-share-icon-wrap">\n            <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-icon iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/twitter.svg" alt="Twitter share"></a>\n            <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-icon iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/facebook.svg" alt="Facebook share"></a>\n        </div>\n    </div>\n    <div class="iapp-detail-background"></div>\n</div>\n';

}
return __p
};

this["templates"]["EntryView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="iapp-search-entry-title">' +
((__t = ( Agency )) == null ? '' : __t) +
'</h2>\n<h4 class="iapp-search-entry-sub">' +
((__t = ( State )) == null ? '' : __t) +
'</h4>\n';

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
__p += '\n    <div class="video-inner-wrap">\n        <div class="video-close-button iapp-button"><div class="iapp-button-text">Skip Video</div></div>\n        ';
 if (!isMobile) { ;
__p += '\n        <!-- Video Controls -->\n        <div id="video-controls" class="">\n            <div id="play-pause" class="play"></div>\n            <div id="seek-bar">\n                <div id="video-dot"></div>\n            </div>\n        </div> \n        ';
 } ;
__p += '\n        ';
 if (isTablet) {;
__p += '\n            <div class="iapp-tablet-play-button"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/play-icon-white.svg" alt="Play video"></div>\n        ';
 } ;
__p += '\n        <video id="introvid" class="bgvideo" autoplay poster="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/video_still.jpg">\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.mp4" type="video/mp4" />\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.ogv" type="video/ogg" />\n        </video>\n    </div>\n        ';
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