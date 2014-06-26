module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);

    grunt.initConfig({

        qunit: {
            all: ["test/*.html"]
        },

        uglify: {
            build: {
                files: {
                    "dist/js/app.js": ["js/lib/*.js", "js/*.js"]
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
            options: {
                livereload: true,
            },
            sass: {
                files: "sass/*.sass",
                tasks: ["sass"]
            },
            js: {
                files: ["js/*.js", "test/*.js"],
                tasks: ["qunit"]
            }
        },

        concurrent: {
            build: ["sass", "uglify"],
            dev: {
                tasks: ["connect", "watch"],
                options: {
                    logConcurrentOutput: true
                }
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
    grunt.registerTask("dev", ["concurrent:dev"]);

};