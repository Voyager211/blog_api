import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { Application } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API Documentation',
            version: '1.0.0',
            description: 'API Documentation for Express Blog Application'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development Server'
            }
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'token'
                }
            }
        }
    },

    apis: ['./src/docs/*.ts']
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log(`Swagger Docs available at http://localhost:3000/api/docs`);
}