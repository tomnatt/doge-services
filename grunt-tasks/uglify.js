module.exports = function(grunt) {

    grunt.config("uglify", {
        build: {
            files: {
                "dist/js/app.js": ["js/lib/*.js", "js/*.js"]
            }
        }
    });

};