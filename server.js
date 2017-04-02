import Koa from 'koa';
import _ from 'koa-route';

const PORT = 3000;
const app = new Koa();

var server = app.listen(PORT);

module.exports = server;
