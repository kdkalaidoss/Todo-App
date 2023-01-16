import { useState } from "react";

interface Todo {
  task: string;
  index: number;
  editedData: any;
  taskList: string[];
  deletedData:any;
}
function Todo({ task, index, editedData, taskList,deletedData }: Todo) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editInput, setEditInput] = useState(task);

  const handleEdit = (index:number) => {
    const task= editInput
    const arr = [...taskList];
   arr.splice(index, 1, task);    
    editedData(arr);
    setIsEdit(false)
  };
  const handleDelete=(index:number,taskList:any)=>{
    // const del=taskList.filter((task:any,ind:number)=> ind != index)
    const arr=[...taskList]
    arr.splice(index,1)
    // console.log(arr);
    
    deletedData(arr)
  }
  return (
    <div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={()=>handleEdit(index)}>{isEdit ?'Save': 'Edit'}</button>
          
        </>
      ) : (
        <>
          {task}
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={()=>handleDelete(index,taskList)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Todo;
