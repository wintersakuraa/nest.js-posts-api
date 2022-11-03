import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
    const PORT = process.env.PORT || 8080;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Nest.js Posts REST API')
        .setDescription('API documentation')
        .setVersion('1.0.0')
        .addTag('wintersakura')
        .build();
    const docs = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, docs);

    await app.listen(PORT, () =>
        console.log(`Server is listening on PORT: ${PORT}`)
    );
}

start();
