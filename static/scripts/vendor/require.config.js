var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "jquery.js"
        },
        {
            "name": "registry",
            "location": "vendor/registry"
        },
        {
            "name": "text",
            "location": "vendor/text",
            "main": "text.js"
        },
        {
            "name": "css",
            "location": "vendor/css",
            "main": "css.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.7",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}