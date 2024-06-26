import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from 'src/posts/entities/post.entity';
import { CommentEntity } from 'src/comments/entities/comments.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { GroupEntity } from 'src/groups/entities/group.entity';
import { BookmarkEntity } from 'src/bookmarks/entities/bookmark.entity';
import { FollowingEntity } from 'src/following/entities/following.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  username: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('simple-array')
  preferences: string[];

  @Column('text')
  description: string;

  @Column('simple-array')
  tecnologies: string[];

  @Column({ default: 'normal-user' })
  role: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => EventEntity, (events) => events.user)
  events: EventEntity[];

  @OneToMany(() => GroupEntity, (group) => group.user)
  groups: GroupEntity[];

  @OneToMany(() => BookmarkEntity, (bookmark) => bookmark.user)
  bookmarks: BookmarkEntity[];

  @OneToMany(() => FollowingEntity, (following) => following.user)
  following: FollowingEntity[];
}
