const chokidar = require('chokidar');
const { buildRoutes } = require('./buildRoutes');

const watcher = chokidar.watch('../src/pages/**/*.page.js', {
    ignored: /(^|[\/\\])\../,
    persistent: true,
});

watcher
    .on('add', path => {
        console.log(`File ${path} has been added`);
        buildRoutes();
    })
    .on('change', path => {
        console.log(`File ${path} has been changed`);
        buildRoutes();
    })
    .on('unlink', path => {
        console.log(`File ${path} has been removed`);
        buildRoutes();
    });