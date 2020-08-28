import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormconfig';
import { ProductModule } from "./components/product/product.module";
import { SearchModule } from "./services/search/search.module";
import { ObserverModule } from "./observers/observer.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    ProductModule,
    SearchModule,
    ObserverModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
