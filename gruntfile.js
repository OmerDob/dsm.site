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
        },
        remove: {
            bin: {
                dirList: ['bin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-remove');

    grunt.registerTask('build', ['remove:bin', 'copy:dev', 'exec:tsc']);
};