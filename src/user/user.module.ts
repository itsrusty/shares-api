import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'src/constants/constants';
import { PostEntity } from 'src/posts/entities/post.entity';
import { CommentEntity } from 'src/comments/entities/comments.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { GroupEntity } from 'src/groups/entities/group.entity';
import { BookmarkEntity } from 'src/bookmarks/entities/bookmark.entity';
import { EventsService } from 'src/events/events.service';
import { CacheChecked } from 'src/common/checked.cache';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      CommentEntity,
      EventEntity,
      GroupEntity,
      BookmarkEntity,
    ]),
    JwtModule.register({
      global: true,
      secret: constants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, EventsService, CacheChecked],
})
export class UserModule {}
