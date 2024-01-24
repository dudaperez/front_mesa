const { writeFileSync, readFileSync } = require('fs');
const glob = require('glob');
const path = require('path');
const { lazy } = require('react');

const routesDirectory = path.join(__dirname, '../src/pages');

function extractInfoFromString(str, key) {
    const regex = new RegExp(`\\*\\s*${key}:\\s*(.+)`, 'i');
    const match = str.match(regex);
    return match && match[1].trim();
}

function buildRoutes() {
    try {
        const routeFiles = glob.sync(`${routesDirectory}/**/*.page.js`);

        const routes = []

        for (const file of routeFiles) {
            const fileContent = readFileSync(file, 'utf8');

            const relativePath = path.relative(routesDirectory, file);


            const titlePage = extractInfoFromString(fileContent, 'titlePage');
            const routePath = extractInfoFromString(fileContent, 'path');
            const componentName = extractInfoFromString(fileContent, 'componentName');
            const template = extractInfoFromString(fileContent, 'template');
            const isPublic = extractInfoFromString(fileContent, 'isPublic');
            const isForm = extractInfoFromString(fileContent, 'isForm');

            routes.push({
                path: routePath,
                page: componentName,
                relativePath,
                isPublic,
                template,
                titlePage,
                isForm
            })
        }

        return routes;
    } catch (error) {
        console.log(error);
    }
}

const routes = buildRoutes();

writeFileSync(
    path.join(__dirname, '../src/routes/index.js'),
    `import { lazy } from "react";
    
    ${routes.map(route => `const ${route.page} = lazy(() => import('@/pages/${route.relativePath}'));`).join('\n')}
    
    export const routes = [
        ${routes.map(route => `{ path: "${route.path}", page: ${route.page}, isPublic: ${route.isPublic}, template: "${route.template}", title: "${route.titlePage}", isForm: "${route.isForm}" }`).join(',\n')}
    ];
    `
);
