module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'source/',
                        src: ['**/*.html', '**/*.css'],
                        dest: 'bin/'
                    },
                    {
                        src: ['systemjs.config.js'],
                        dest: 'bin/'
                    }
                ]
            }
        },
        exec: {
            tsc: 'tsc'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build', ['copy:dev', 'exec:tsc']);
};