import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/create.post';
import { AuthGuard } from 'src/guard/jwt.guard';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
  ) { }

  @Get()
  getPost() {
    return this.postsService.getUsersWithPosts()
  }

  @Post('/create-post/:userId')
  @UseGuards(AuthGuard)
  createPostUser(
    @Param('userId') userId: any,
    @Body() postData: PostDto) {
    return this.postsService.createPost(userId, postData)
  }

  @Put('/edit-post/:id')
  @UseGuards(AuthGuard)
  editPostUser(@Param('id') id: number, @Body() postData: PostDto) {
    return this.postsService.editPostUser(id, postData)
  }

  @Delete('/delete-post/:postId')
  @UseGuards(AuthGuard)
  deletePostUser(@Param('postId') postId: any, @Req() req) {
    const userId = req.user

    return this.postsService.deletePostUser(postId)
  }
}