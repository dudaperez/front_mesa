module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.js',
                templateFile: 'templates/index.js.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.js',
                templateFile: 'templates/styles.js.hbs'
            }
        ]
    })
}