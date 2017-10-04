var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', function () {
    gulp.src('index.less')
        .pipe(less())
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('*.less', ['testLess']);
});
