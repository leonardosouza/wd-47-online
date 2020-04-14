var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('css', function(done) {
  console.log('Otimizando o CSS...');

  gulp
    .src('dev/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('prod'));

    done();
});

gulp.task('html', function(done) {
  console.log('Otimizando o HTML...');

  gulp
    .src('dev/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('prod'));

  done();
});

gulp.task('js', function(done) {
  console.log('Otimizando o JS...');

  gulp
    .src('dev/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('prod'));

  done();
});
