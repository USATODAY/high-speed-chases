define([
   "jquery",
], function(jQuery) {
    //set project data URL here
    var dataURL = "http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/data/data.json";
    //set project image path here
    var imagePath = "http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/img/";

    //set project default share language here
    var defaultShareLanguage = "Check police chase deaths state by state";
    var defaultShareImage = imagePath + "fb-post.jpg";

    var isMobile, fb_app_id;
    var isTablet = false;

    var blnIframeEmbed = window != window.parent;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile = true;
    }

    if (isMobile === false) {
        if (Modernizr.touch && window.innerWidth < 1100) {
            isTablet = true;
        }
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        image_path: imagePath,
        dataURL: dataURL,
        staticInfo: staticInfo,
        fb_app_id: fb_app_id,
        isMobile: isMobile,
        isTablet: isTablet,
        defaultShareLanguage: defaultShareLanguage,
        defaultShareImage: defaultShareImage,
        isIframe: blnIframeEmbed
    };
});
