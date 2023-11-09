
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form action="" className='form'>
        <input type="text" placeholder="Enter a task" />
        <button type="submit">Add </button>
      </form>
      <div className="todo-list-items">
        <div className="todo-item">
          <p classname="item-content">This is the item 1</p>
          <button classname="update-item
          ">Update</button>
          <button>Delete</button>
        </div>

        <div className="todo-item">
          <p classname="item-content">This is the item 2</p>
          <button classname="update-Item
          ">Update</button>
          <button>Delete</button>
        </div>

        <div className="todo-item">
          <p classname="item-content">This is the item 3</p>
          <button classname="update-item
          ">Update</button>
          <button>Delete</button>
        </div>

        <div className="todo-item">
          <p classname="item-content">This is the item 4</p>
          <button classname="update-item
          ">Update</button>
          <button>Delete</button>
        </div>

        <div className="todo-item">
          <p classname="item-content">This is the item 5</p>
          <button classname="update-item
          ">Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
