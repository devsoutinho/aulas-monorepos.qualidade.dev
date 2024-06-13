import { NodePlopAPI } from 'plop';
import path from "path";

const ROOT_MONOREPO = path.resolve("..", "..");

export default function (plop: NodePlopAPI) {

  console.log("ROOT_MONOREPO", ROOT_MONOREPO);

	// create your generators here
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [], // Criar perguntas pra pessoa que ta rodando o script
		actions: []  // Executar ações em cima dessas perguntas
	});

  commonPackage(plop);
};

function commonPackage(plop: NodePlopAPI) {

  console.log("DEBUG", path.resolve(ROOT_MONOREPO, "commons", "{{packageName}}", "package.json"));

	plop.setGenerator('common-package', {
		description: 'Create a new common package inside `./commons` folder',
		prompts: [
      {
        type: "input",
        name: "packageName",
        message: "What is the pacakge name?",  
      }
    ], // Criar perguntas pra pessoa que ta rodando o script
		actions: [
      {
        type: "add",
        path: path.resolve(ROOT_MONOREPO, "commons", "{{lowerCase packageName}}", "package.json"),
        templateFile: "templates/common-package/package.json.hbs"
      }
    ]  // Executar ações em cima dessas perguntas
	});
}