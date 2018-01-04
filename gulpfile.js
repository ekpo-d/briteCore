var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber-notifier')

gulp.task('css', function(){
  gulp.src('src/assets/css/app.scss')
      .pipe(plumber())
      .pipe(sass({
        outputStyle : 'compressed'
      }))
      .pipe(gulp.dest('assets/css/'))
})

gulp.task('watch', function(){
  gulp.watch('src/assets/css/**/*.scss', ['css'])
})

gulp.task('default', ['css', 'watch'])
