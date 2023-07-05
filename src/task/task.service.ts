import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/task.dto';
import { TaskModule } from './task.module';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getTask(taskID: string): Promise<Task> {
    const task = await this.taskModel.findById(taskID);
    return task;
  }

  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskModel.find();
    return tasks;
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const newTask = new this.taskModel(createTaskDTO);
    return newTask.save();
  }

  async updateTask(
    taskID: string,
    createTaskDTO: CreateTaskDTO,
  ): Promise<Task> {
    const updateTask = await this.taskModel.findByIdAndUpdate(
      taskID,
      createTaskDTO,
    );
    return updateTask;
  }

  async deleteTask(taskID: string): Promise<Task> {
    const deleteTask = await this.taskModel.findByIdAndDelete(taskID);
    return deleteTask;
  }
}
