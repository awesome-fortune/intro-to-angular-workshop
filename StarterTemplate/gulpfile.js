const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const mmq = require('gulp-merge-media-queries');
const lineec = require('gulp-line-ending-corrector');

/**
 * A list of browsers that we would like to include vendor prefixes for.
 * @see https://github.com/browserslist/browserslist
 */
const AUTOPREFIX_BROWSER_LIST = [
  'last 2 version',
  'bb >= 10',
  '> 2%',
  'android >= 4',
  'ios >= 7',
  'opera >= 23',
  'safari >= 7',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
];

// default will also watch
gulp.task('default', ['watch']);

gulp.task('js-bundle', () => {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('watch', ['sass'], () => {
  browserSync.init({
    server: '.'
  });

  gulp.watch('./src/scss/**/*.scss', ['sass'], browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(AUTOPREFIX_BROWSER_LIST))
    .pipe(mmq({
      log: true
    }))
    .pipe(lineec())
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
});