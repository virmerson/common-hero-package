import { Module } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { ConfigModule } from '../../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({

      imports: [ConfigModule],

      useFactory: (configService: ConfigService) => ({
          type: 'mysql',
          host:configService.getOrThrow('MYSQL_HOST'),
          port: parseInt(configService.getOrThrow('MYSQL_PORT')),
          database: configService.getOrThrow('MYSQL_DATABASE'),
          username: configService.getOrThrow('MYSQL_USER'),
          synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
          autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmDatabaseModule {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
}