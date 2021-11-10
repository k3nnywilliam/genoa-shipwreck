let path = require('path');
let os = require('os');
let express = require('express');
let webpackDevMiddleware = require('webpack-dev-middleware');
let config = require('../webpack.config.js');

let app = express(), 
          DIST_DIR=__dirname,
          HTML_FILE = path.join(DIST_DIR, 'index.html'),
          compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    })
});

app.set('port', process.env.PORT || 5000);

let server = app.listen(app.get('port'), function() {
  console.log(`Server running at http://${os.hostname()}:${server.address().port}/`);
});