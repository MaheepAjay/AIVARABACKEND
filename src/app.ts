import { AiVaraServer } from './setupServer';
import express, { Express } from 'express';
import vvv from './setupDatabase';
import { config } from './config';





class Application {

    public initialize(): void {

      vvv();
      
      const app: Express = express();
      const server: AiVaraServer = new AiVaraServer(app);
      console.log('Attempting to connect to database123');

      server.start();


    }

    private loadConfig(): void {
      config.validateConfig();
    }
  

}

const application: Application = new Application();
application.initialize();