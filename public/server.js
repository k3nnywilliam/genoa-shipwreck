let path = require('path');
let os = require('os');
let express = require('express');
let app = express(), 
          DIST_DIR=__dirname,
          HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
});

app.set('port', process.env.PORT || 5000);

let server = app.listen(app.get('port'), function() {
  console.log(`Server running at http://${os.hostname()}:${server.address().port}/`);
});