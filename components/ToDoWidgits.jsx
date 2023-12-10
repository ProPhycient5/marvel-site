import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToDoData } from "../redux/features/ToDoList";

const ToDoWidget = () => {
  const { toDoItems } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    if (e.key === "Enter") {
      const uniqueId = Math.random().toString(36).substring(7);
      if (newTodo.trim() !== "") {
        let tempData = [
          ...toDoItems,
          {
            id: uniqueId,
            text: newTodo,
            completed: false,
          },
        ];
        dispatch(setToDoData(tempData));
        setNewTodo("");
      }
    }
  };

  const toggleComplete = (id) => {
    let tempData = toDoItems.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(setToDoData(tempData));
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleModal}
        className="text-base font-medium text-white px-4 py-1 rounded-full focus:outline-none focus:ring focus:border-blue-300"
      >
        Todo
      </button>
      {showModal && (
        <div className="fixed bottom-16 right-4 bg-white border border-gray-200 shadow-lg p-4 max-h-60 overflow-y-auto custom-scl-bar rounded-md">
          {toDoItems?.length > 0 &&
            toDoItems.map((todo) => (
              <div key={todo.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="mr-2 mt-1"
                />
                <p
                  className={
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }
                >
                  {todo.text}
                </p>
              </div>
            ))}
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter new todo"
              value={newTodo}
              onChange={handleInputChange}
              onKeyDown={(e) => addTodo(e)}
              className="w-full border-none focus:outline-none focus:border-blue-500 text-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoWidget;
