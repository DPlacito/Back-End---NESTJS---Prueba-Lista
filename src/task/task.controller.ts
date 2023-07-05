import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  HttpStatus,
  Res,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';

import { CreateTaskDTO } from './dto/task.dto'; //Nos traemos la clase para poder manipularla desde aqui con su instancia es decir createTaskDTO
import { TaskService } from './task.service';

//Aqui puede ir cualquier ruta get, post etc etc
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
    //console.log(createTaskDTO);
    const task = await this.taskService.createTask(createTaskDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Task Created',
      task: task,
    });
  }

  @Get('/')
  async getTasks(@Res() res) {
    const tasks = await this.taskService.getTasks();
    return res.status(HttpStatus.OK).json(tasks);
  }

  @Get('/:taskID')
  async getTask(@Res() res, @Param('taskID') taskID) {
    const task = await this.taskService.getTask(taskID);
    if (!task) {
      throw new NotFoundException('Task Does Not Exists');
    }
    return res.status(HttpStatus.OK).json(task);
  }

  @Delete('/delete')
  async deleteTask(@Res() res, @Query('taskID') taskID) {
    const deleteTask = await this.taskService.deleteTask(taskID);
    if (!deleteTask) {
      throw new NotFoundException('Task Does Not Exists');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Task Deleted Succesfully',
      deleteTask,
    });
  }

  @Put('/update')
  async updateTask(
    @Res() res,
    @Body() createTaskDTO: CreateTaskDTO,
    @Query('taskID') taskID,
  ) {
    const updateTask = await this.taskService.updateTask(taskID, createTaskDTO);
    if (!updateTask) {
      throw new NotFoundException('Task Does Not Exists');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Task Updated Succesfully',
      updateTask,
    });
  }
}
