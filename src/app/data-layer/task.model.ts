export class Task {
    taskID: number;
    taskTitle: string;
    taskDescription: string;
    taskDate: string;
    taskTime: string;
    taskPriority: number;

    constructor(taskID: number, taskTitle: string, taskDescription: string,
    taskDate: string, taskTime: string, taskPriority: number) { 
        this.taskID = taskID;
        this.taskTitle = taskTitle;
        this.taskDescription = taskDescription;
        this.taskDate = taskDate;
        this.taskTime = taskTime;
        this.taskPriority = taskPriority;
    }
}