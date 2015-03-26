module.exports = function(grunt) {

  require('babel/register')({
    experimental: true,
    extensions: ['.es6'],
  });

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.es6'],
    },
    watch: {
      files: ['lib/**/*.es6'],
      tasks: ['test']
    }
  });

  grunt.registerTask('test', ['mochaTest']);

};