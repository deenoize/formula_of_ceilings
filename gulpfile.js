var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var changed = require('gulp-changed');

gulp.task('img1024', function () {
    gulp.src("common-files/img/photo/*.{jpg,jpeg,JPG,png}")
        .pipe(changed("common-files/img/photo_web/"))
        .pipe(imageResize({
            width : 1024
        }))
        .pipe(rename(function (path) { path.basename += "-1024"; }))
        .pipe(gulp.dest("common-files/img/photo_web/"));
});

gulp.task('img270', function () {
    gulp.src("common-files/img/photo/*.{jpg,jpeg,JPG,png}")
        .pipe(changed("common-files/img/photo_web/"))
        .pipe(imageResize({
            width : 270,
            height : 220,
            crop : true
        }))
        .pipe(rename(function (path) { path.basename += "-270"; }))
        .pipe(gulp.dest("common-files/img/photo_web/"));
});