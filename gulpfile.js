var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require("gulp-sourcemaps"),
    buffer = require('vinyl-buffer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat');

gulp.task("scripts", function () {
    var browser = browserify({
        entries: "./scripts/main.js",
        debug: true
    });
    return browser.bundle()
        .pipe(source("Aspire.js"))
        .pipe(jshint())
        .pipe(buffer())
        //.pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(sourcemaps.write("."))
        .pipe(uglify())
        .pipe(gulp.dest("./scripts"));

});
//css任务
gulp.task('styles',function(){
    return gulp.src('styles/**/*.css')
        .pipe(concat('Aspire.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('styles'));
});

//重载浏览器
gulp.task('js-watch', ['scripts','styles'], function(){
    browserSync.reload();
});
//创建serve
gulp.task('server', ['scripts','styles'], function () {
    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // 添加 browserSync.reload 到任务队列里
   gulp.watch(["scripts/**/*.js","styles/**/*.css"], ['js-watch']);
});

gulp.task('clean', function(c) {
    del(['./build/**/*'],c);
});

gulp.task('default',['server']);