/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        concat: {

            options: {

                paths: [ 'src' ],
                include: 'all',
                noncmd: true

            },

            full: {

                options: {

                    banner: '/*!\n' +
                        ' * ====================================================\n' +
                        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
                        ' * GitHub: <%= pkg.repository.url %> \n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                        ' * ====================================================\n' +
                        ' */\n\n' +
                        '(function () {\n',

                    footer: '})();'

                },

                files: {
                    'dist/kity-formula.all.js': [ '.tmp_build/kf.tmp.js', 'dev-lib/exports.js' ]
                }

            }

        },

        uglify: {

            options: {

                banner: '/*!\n' +
                    ' * ====================================================\n' +
                    ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
                    ' * GitHub: <%= pkg.repository.url %> \n' +
                    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                    ' * ====================================================\n' +
                    ' */\n',

                beautify: {
                    ascii_only: true
                }

            },

            minimize: {

                files: {
                    'dist/kity-formula.all.min.js': 'dist/kity-formula.all.js'
                }

            }

        },

        // 模块依赖合并
        dependence: {

            replace: {

                options: {
                    base: 'src',
                    entrance: 'kf.start'
                },

                files: [ {
                    src: [ 'src/**/*.js', 'dev-lib/start.js' ],
                    dest: '.tmp_build/kf.tmp.js'
                } ]

            }
        },

        jshint: {
            options: {
                ignores: [ 'src/base/canvg.js' ],
                jshintrc: '.jshintrc'
            },
            all: [ 'src/**/*.js' ]
        },

        clean: {
            files: [ '.tmp_build' ]
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-module-dependence');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask( 'default', [ 'dependence:replace', 'concat:full', 'uglify:minimize', 'clean' ] );
    grunt.registerTask( 'hint', [ 'jshint:all' ] );
    grunt.registerTask( 'commit', [] );

};
