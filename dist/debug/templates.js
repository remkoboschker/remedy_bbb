this['JST'] = this['JST'] || {};

this['JST']['app/templates/footer.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="footer" class="container-fluid">\n    <div class="row-fluid">\n        <footer>\n            <ul class="nav nav-footer pull-right">\n                <li><a href="/#regelingen/voorwaarden">voorwaarden</a></li>\n                <li><a href="/#regelingen/privacy">privacy</a></li>\n                <li><a href="/#regelingen/ip">intellectueel eigendom</a></li>\n                <li><a href="https://remedy.informatietuin.nl" data-bypass>Remedy</a></li>\n            </ul>\n        </footer>\n    </div>   \n</div>');}return __p.join('');
}(data, _)};

this['JST']['app/templates/helpdesk.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>helpdesk</h3>');}return __p.join('');
}(data, _)};

this['JST']['app/templates/home.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>home</h3>\n<ul>\n    <li><a href="#records">dossiers</a></li>\n    <li><a href="#register">kassa</a></li>\n    <li><a href="#store">magazijn</a></li>\n<ul>');}return __p.join('');
}(data, _)};

this['JST']['app/templates/ip.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>intellectueel eigendom</h3>');}return __p.join('');
}(data, _)};

this['JST']['app/templates/nav.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="navbar-inner">\n    <div class="container-fluid">\n\n        <!-- .btn-navbar is used as the toggle for collapsed navbar content -->\n        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n        </a>\n\n        <!-- Be sure to leave the brand out there if you want it shown -->\n        <a class="brand" href="#">Dokter Frodo</a>\n        <ul class="nav">\n            <li class="active"><a href="#">home</a></li>\n            <li><a href="#records">dossiers</a></li>\n            <li><a href="#register">kassa</a></li>\n            <li><a href="#store">magazijn</a></li>\n        </ul>\n        <ul class="nav pull-right">\n            <li><a href="#helpdesk">helpdesk</a></li>\n            <li><a href="#">test gebruiker</a></li>\n        </ul>\n\n\n        <!-- Everything you want hidden at 940px or less, place within here -->\n        <div class="nav-collapse">\n        <!-- .nav, .navbar-search, .navbar-form, etc --> \n        </div>\n\n    </div>\n</div>\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/privacy.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>privacy</h3>');}return __p.join('');
}(data, _)};

this['JST']['app/templates/terms.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>algemene voorwaarden</h3>');}return __p.join('');
}(data, _)};