var gulp = require('gulp');
var clean = require('gulp-clean');
var builder = require('gulp-node-webkit-builder');

gulp.task('clean', function(){
    return gulp.src('dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('build', ['clean'], function(){
    return gulp.src(['./src/**/**'])
        .pipe(builder({
            platforms: ['osx64'],
            buildDir: './dist/builds',
            cacheDir: './dist/cache',
            macIcns: './resources/icon.icns'
        }));
});
