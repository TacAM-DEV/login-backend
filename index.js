const Koa = require('koa'),
      Router = require('@koa/router');

let login = require('./src/login');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = "Nothing to see here ¯\\_(ツ)_/¯";
});

router.get('/signup', (ctx, next) => {
    ctx.body = login.signup(ctx);
})

router.get('/signin', (ctx, next) => {
    ctx.body = login.signin(ctx);
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1338);