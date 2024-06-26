import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'src/constants/constants';
import { UserEntity } from 'src/user/entities/user.entity';
import { CommentEntity } from 'src/comments/entities/comments.entity';
import { GroupEntity } from 'src/groups/entities/group.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostEntity,
      UserEntity,
      CommentEntity,
      GroupEntity,
    ]),
    JwtModule.register({
      global: true,
      secret: constants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
