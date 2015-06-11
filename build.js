var NwBuilder = require('node-webkit-builder');
var nw = new NwBuilder({
    files: './**/**', // use the glob format
    platforms: ['osx64'],
    buildDir: './dist/builds',
    cacheDir: './dist/cache'
});

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});
