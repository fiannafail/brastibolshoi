import bodyParser from 'koa2-formidable'

export default (app) => {
  app.use(bodyParser());
}