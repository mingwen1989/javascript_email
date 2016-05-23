ENVIRONMENT VARIABLE (PRODUCTION/DEVELOPMENT BUILD)
var utilities = require('gulp-util');
$ npm install gulp-util --save-dev

  gulp.task("build", ['clean'], function(){
    if (buildProduction) {
      gulp.start('minifyScripts');
    } else {
      gulp.start('jsBrowserify');
    }
  });

GULP
var gulp = require('gulp');
$ npm install gulp --save-dev
$ npm install gulp -g

BROWSERIFY
var browserify = require('browserify');
$ npm install browserify --save-dev
$ npm install browserify -g

BROWSERIFY CODE INTO NEW FILE
var source = require('vinyl-source-stream');
$ npm install vinyl-source-stream --save-dev

  gulp.task('jsBrowserify', ['concatInterface'], function() {
    return browserify({ entries: ['./tmp/allConcat.js'] })
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build/js'));
  });


MINIFI
var uglify = require('gulp-uglify');
$ npm install gulp-uglify --save-dev

  gulp.task("minifyScripts", ['jsBrowserify'], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
  });

DELETE BETWEEN RUNS
var del = require('del');
$ npm install gulp-util --save-dev

  gulp.task("clean", function(){
    return del(['build', 'tmp']);
  });

CONCAT FILES
var concat = require('gulp-concat');
$ npm install gulp-concat --save-dev

gulp.task('concatInterface', function() {
  return gulp.src(['./js/message-interface.js', './js/message.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
  });

LINT
var jshint = require('gulp-jshint');
$ npm install jshint --save-dev
$ npm install gulp-jshint --save-dev

  gulp.task('jshint', function(){
    return gulp.src(['js/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });
/*

PRODUCTION ENVIRONMENT
var buildProduction = utilities.env.production;
