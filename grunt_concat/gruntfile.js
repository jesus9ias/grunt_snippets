var grunt = require('grunt');

grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['stylus'],
          import: [
            'nib/*'
          ]
        },
        files: {
          'public/css/app.css': 'public/style/app/app.styl',
          'public/css/admin.css': 'public/style/admin/admin.styl'
        },
      },
    },
    concat: {
      app: {
        src: ['public/plantillas/app/**/*.js','public/plantillas/services/*.js','public/plantillas/components/**/*.js'],
        dest: 'public/plantillas/myApp.js',
      },
      admin: {
        src: ['public/plantillas/admin/**/*.js','public/plantillas/services/*.js','public/plantillas/components/**/*.js'],
        dest: 'public/plantillas/myAdmin.js',
      },
    },
    uglify: {
      my_target: {
        options: {
          mangle: false,
        },
        files: {
          'public/plantillas/myApp_ugly.js': ['public/plantillas/myApp.js']
        }
      }
    },
    watch: {
      options: {
          livereload: true
      },
      stylesheets: {
          files: ['public/style/app/*.styl', 'public/style/admin/*.styl'],
          tasks: ['stylus']
      },
      javascripts: {
          files: ['public/plantillas/app/**/*.js','public/plantillas/admin/**/*.js','public/plantillas/components/**/*.js','public/plantillas/services/*.js'],
          tasks: ['concat']
      },
      views: {
          files: ['public/plantillas/app/**/*.html','public/plantillas/admin/**/*.html'],
      },
      api: {
          files: ['app/Http/Controllers/**/*.php'],
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-newer');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', []);
grunt.registerTask('server', ['watch']);