const List = ({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) => {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 border rounded`}
    >
      <div className='items-center'>
        <input type='checkbox' onChange={() => handleCompleteChange(id)} />
        <span className={completed ? 'line-through' : undefined}>{title}</span>
      </div>
      <div>
        <button
          className='px-4 py-2 float-right'
          onClick={() => handleClick(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default List;
