const { Application } = require('./application');
const config = require('./config');

new Application(config)
.init()
.run();
