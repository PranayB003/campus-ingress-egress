import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { StudentsModule } from './students/students.module';
import { TripsModule } from './trips/trips.module';

dotenv.config();

const { MONGO_HOST, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD, ENVIRONMENT } =
  process.env;
const dbName = ENVIRONMENT === 'dev' ? 'dev' : 'prod';
const connectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@campus-in-out-db@&authSource=${dbName}`;

@Module({
  imports: [
    MongooseModule.forRoot(connectionString),
    StudentsModule,
    TripsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
