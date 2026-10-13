import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public')
    }),
    MongooseModule.forRoot('mongodb://desarrollo_db_user:45WmCbGTYV7389GR@ac-f5su0ds-shard-00-00.ygxbtl6.mongodb.net:27017,ac-f5su0ds-shard-00-01.ygxbtl6.mongodb.net:27017,ac-f5su0ds-shard-00-02.ygxbtl6.mongodb.net:27017/?ssl=true&replicaSet=atlas-i8a2hw-shard-0&authSource=admin&appName=test01'),
    PokemonModule,
    CommonModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
