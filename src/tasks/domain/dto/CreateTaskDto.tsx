interface CreateTaskDto{
    title:string;
    date:Date;
    description?:string;
    isFavorite?:boolean;
    isCompleted?:boolean;
}
export default CreateTaskDto;