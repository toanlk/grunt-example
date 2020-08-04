module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // minify javascript files
        uglify: {
            build: {
                files: {
                    'built/js/main.min.js': ['src/js/jquery.min.js', 'src/js/main.js']
                }
            }
        },

        // minify css files
        cssmin: {
            target: {
                files: {
                    'built/css/main.min.css' : ['src/css/main.css'],
                }
            }
        },

        // watch file change
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/css/*.css'],
                tasks: []
            },
            js: {
                files: ['src/js/*.js'],
                tasks: []
            },
            html: {
                files: ['*.html'],
                tasks: []
            },
        },
    });

    grunt.registerTask('default', ['uglify', 'cssmin']);
}