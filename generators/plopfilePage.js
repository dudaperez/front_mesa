module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'Gera uma pagina com o nome que você escolher',
        prompts: [
        {
            type: 'list',
            message: 'É dentro de uma página já existente ou uma nova?',
            name: 'isNew',
            choices: ['nova', 'existente'],
            default: 'nova'
        },
        {
            type: 'input',
            name: 'existingPagePath',
            message: 'Qual é o caminho do diretório da página existente?',
            when: answers => answers.isNew === 'existente'
        },
        {
            type: 'list',
            message: 'Essa página é um formulário?',
            name: 'isForm',
            choices: ['sim', 'não'],
            default: 'não'
        },
        {
            type: 'input',
            name: 'name',
            message: 'qual é o nome da pagina?'
        },
        {
            type: 'input',
            name: 'path',
            message: 'qual é o path dela? ex? /produto/detalhe/:id'
        },
        {
            type: 'input',
            name: 'titlePage',
            message: 'qual é o titulo da pagina que irá aparecer no header?',
            default: answers => answers.name
        },
        {
            type: 'list',
            name: 'template',
            message: 'Qual é o template que ela vai usar?',
            choices: ['default', 'blank'],
            default: 'default'
        },
        {
            type: 'confirm',
            name: 'isPublic',
            message: 'Ela é pública?',
            default: true
        }],
        actions: answers => {
            const path = answers.isNew === 'nova' ? `../src/pages/${answers.name}` : `../src/pages/${answers.existingPagePath}/${answers.name}`;
            return [
                {
                    type: 'add',
                    path: `${path}/index.page.js`,
                    templateFile: 'templates/page.js.hbs'
                },
                {
                    type: 'add',
                    path: `${path}/styles.js`,
                    templateFile: 'templates/styles.js.hbs'
                }
            ];
        }
    })
}