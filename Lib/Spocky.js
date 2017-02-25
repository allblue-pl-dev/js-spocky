'use strict';

const _Spocky = Object.create(null, {
    Debug: {
    get: function() {
        return _Spocky._Debug;
    }},

    App: { value:
    function(init_fn) {
        _Spocky.CheckInit();
        _Spocky._AppInitFns.push(init_fn);
    }},

    Config: { value:
    function() {
        return _Spocky.GetConfig().getPublic();
    }},

    Init: { value:
    function(debug) {
        return _Spocky.Initialize(debug);
    }},

    Package: { value:
    function(layout_names, init_fn) {
        _Spocky.CheckInit();
    }}

});
Spocky.Class.prototype = Spocky;
module.exports = Spocky;
