const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const multer = require('@koa/multer');
const cors = require('@koa/cors');

const { chatMembers } = require('./db/db');

const upload = multer();

const app = new Koa();

app.use(cors());
app.use(require('koa-bodyparser')());
app.use(require('koa-static')(path.join(__dirname, 'public')));




const router = new Router({prefix: '/api'});

// app.use(async (ctx, next) => {
//   const { nickname } = ctx.query;
//   if (!nickname) return next();
//
//   ctx.nickname = nickname;
//   return next();
// })

router.post('/login', upload.any(), (ctx, next) => {
  console.log('tut')
  const { nickname } = ctx.request.body;

  if(chatMembers.length > 0) {
    const user = chatMembers.find(member => member === nickname);

    if (user) {
      ctx.status = 404;
      ctx.body = {
        error: 'Такой пользователь существует',
      }
      return;
    }
  }

  chatMembers.push(nickname);

  ctx.status = 204;

})


app.use(router.routes());

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
