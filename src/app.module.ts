import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { MongooseModule } from '@nestjs/mongoose'

const mongodb = 'mongodb://root:russell@localhost:27017/yummy_admin?authSource=admin'
@Module({
  imports: [MongooseModule.forRoot(mongodb), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
