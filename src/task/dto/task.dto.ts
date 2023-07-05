//Para decir que es lo que se esta enviando en la aplicacion ciente y el servidor
export class CreateTaskDTO {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly status: string;
  readonly deleted: number;
  readonly createdAt: Date;
}
