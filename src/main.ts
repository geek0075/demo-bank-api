import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    const config = new DocumentBuilder()
        .setTitle('Fictitious Banking Application API')
        .setDescription('Fictitious Banking Application API for the Veegil Fullstack Developer Assessment.')
        .setVersion('1.0')
        .addTag('bank')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    const customOptions: SwaggerCustomOptions = {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: 'Bank API Swagger UI',
    };
    SwaggerModule.setup('api', app, document, customOptions);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
