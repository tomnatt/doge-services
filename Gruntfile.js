module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

        qunit: {
            all: ["test/*.html"]
        },

        uglify: {
            build: {
                files: {
                    "dist/js/app.js": ["js/lib/jquery.min.js", "js/accordian.js"]
                }
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'dist/css/main.css': 'sass/style.sass'       // 'destination': 'source'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    keepalive: true
                }
            }
        },

        watch: {
            sass: {
                files: "sass/*.sass",
                tasks: ["sass"]
            },
            js: {
                files: ["js/*.js", "test/*.js"],
                tasks: ["qunit"]
            }
        }

    });

    // load the plugins - commented out after switch to load-grunt-tasks
    /*
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-sass");
    */

    // run these tasks in order, stopping if one fails
    grunt.registerTask("default", ["qunit", "uglify:build", "sass:dist"]);

    // this is an alias
    grunt.registerTask("serve", ["connect"]);
};