import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { zip } from 'rxjs';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/hero')],
})
export class DatabaseModule {}