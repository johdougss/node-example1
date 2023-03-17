import * as dotenv from 'dotenv';
import App from './App';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

dotenv.config();

export interface Argv {
  projectId: string;
}

yargs(hideBin(process.argv))
  .command(
    'redmine',
    'executa a busca de tarefas no redmine e cria um csv',
    () => {},
    async (argv: Argv) => {
      // console.info(argv)

      let projectId = parseInt(argv.projectId);

      console.log(projectId);
    }
  )
  .option('project-id', {
    type: 'number',
    description: 'Project Id',
  })
  .demandCommand(1)
  .parse();

// const [node, file, projectId] = process.argv;
// (new App()).run(parseInt(projectId));
