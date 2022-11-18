export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={listStyle(data.completed)} key={data.id}>
          <p>
            <input
              type='checkbox'
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked={data.completed}
            />{' '}
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
