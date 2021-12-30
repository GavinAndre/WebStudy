const Koa = require('koa');

const app = new Koa();

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

// parse request body:
app.use(bodyParser());

// add controller:
app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
