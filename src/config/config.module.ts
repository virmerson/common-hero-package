import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";

@Module({
    imports: [NestConfigModule.forRoot()],
    controllers: [],
    providers: []
})
export class ConfigModule {
   
}