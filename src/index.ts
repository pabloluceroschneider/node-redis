import express, { Express } from 'express';

import routes from './routes';

const app: Express = express();
const PORT = 8080;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
