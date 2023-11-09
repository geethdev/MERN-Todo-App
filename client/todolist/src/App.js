
import './App.css';

function App() {

//add new todo item to database


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form action="" className='form'>
        <input type="text" placeholder="Enter a task" />
        <button type="submit">Add </button>
      </form>
      <div className="todo-list-items">
        <div className="todo-item">
          <p className="item-content">This is the item 1</p>
          <button className="update-item
          ">Update</button>
          <button className='delete-item'>Delete</button>
        </div>

        <div className="todo-item">
          <p className="item-content">This is the item 2</p>
          <button className="update-item
          ">Update</button>
          <button className="delete-item">Delete</button>
        </div>

        <div className="todo-item">
          <p className="item-content">This is the item 3</p>
          <button className="update-item
          ">Update</button>
          <button className="delete-item">Delete</button>
        </div>

        <div className="todo-item">
          <p className="item-content">This is the item 4</p>
          <button className="update-item
          ">Update</button>
          <button className="delete-item">Delete</button>
        </div>

        <div className="todo-item">
          <p className="item-content">This is the item 5</p>
          <button className="update-item
          ">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
