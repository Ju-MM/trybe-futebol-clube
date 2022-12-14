import * as express from 'express';
import 'express-async-errors';
import LoginRoutes from './routers/loginRoute';
import TeamRoutes from './routers/teamRoute';
import MatchRoutes from './routers/matchRoutes';
import LeaderboardRoutes from './routers/leaderboardRoute';
import errorMiddleware from './middlewares/errorHandlerMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/login', LoginRoutes);
    this.app.use('/teams', TeamRoutes);
    this.app.use('/matches', MatchRoutes);
    this.app.use('/leaderboard', LeaderboardRoutes);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
