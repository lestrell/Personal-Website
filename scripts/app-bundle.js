define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><require from=\"./leftnav.html\"></require><leftnav></leftnav></template>"; });
define('text!leftnav.html', ['module'], function(module) { module.exports = "<template><div class=\"w3-light-grey w3-content\" style=\"max-width:1600px\"><nav class=\"w3-sidenav w3-collapse w3-white w3-animate-left\" style=\"z-index:3;width:300px\" id=\"mySidenav\"><br><div class=\"w3-container\"><a href=\"#\" onclick=\"w3_close()\" class=\"w3-hide-large w3-right w3-jumbo w3-padding\" title=\"close menu\"><i class=\"fa fa-remove\"></i> </a><img src=\"http://www.w3schools.com/w3images/avatar_g2.jpg\" style=\"width:45%\" class=\"w3-round\"><br><br><h4 class=\"w3-padding-0\"><b>PORTFOLIO</b></h4><p class=\"w3-text-grey\">Template by W3.CSS</p></div><a href=\"#portfolio\" onclick=\"w3_close()\" class=\"w3-padding w3-text-teal\"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>PORTFOLIO</a> <a href=\"#about\" onclick=\"w3_close()\" class=\"w3-padding\"><i class=\"fa fa-user fa-fw w3-margin-right\"></i>ABOUT</a> <a href=\"#contact\" onclick=\"w3_close()\" class=\"w3-padding\"><i class=\"fa fa-envelope fa-fw w3-margin-right\"></i>CONTACT</a><div class=\"w3-section w3-padding-top w3-large\"><a href=\"#\" class=\"w3-hover-white w3-hover-text-indigo w3-show-inline-block\"><i class=\"fa fa-facebook-official\"></i></a> <a href=\"#\" class=\"w3-hover-white w3-hover-text-purple w3-show-inline-block\"><i class=\"fa fa-instagram\"></i></a> <a href=\"#\" class=\"w3-hover-white w3-hover-text-yellow w3-show-inline-block\"><i class=\"fa fa-snapchat\"></i></a> <a href=\"#\" class=\"w3-hover-white w3-hover-text-red w3-show-inline-block\"><i class=\"fa fa-pinterest-p\"></i></a> <a href=\"#\" class=\"w3-hover-white w3-hover-text-light-blue w3-show-inline-block\"><i class=\"fa fa-twitter\"></i></a> <a href=\"#\" class=\"w3-hover-white w3-hover-text-indigo w3-show-inline-block\"><i class=\"fa fa-linkedin\"></i></a></div></nav></div><script type=\"text/javascript\" src=\"//www.w3schools.com/utilcave_com/inc/ezf-min.php?a=a&cb=3&shcb=5\" style=\"display:none\"></script></template>"; });
//# sourceMappingURL=app-bundle.js.map