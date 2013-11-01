module.exports = function(grunt) {
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        qunit: {
            files: ['test/**/*.html']
        },


        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/**/*.js',
                'test/**/*.js',
                '!test/lib/qunit.js'
            ],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.registerTask("default", []);
    grunt.registerTask('test', ['jshint', 'qunit']);

};