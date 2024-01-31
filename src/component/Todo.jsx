import React from "react";
import AppName from "./AppName";

const Todo = () => {
  return (
    <>
      <center class="todo-container">
        <div class="center_div">
          <AppName/>
          <div class="row">
            <div className="col-4">
              <input type="text" placeholder="Add Items" />
              <input type="date" />
              <button>+</button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Todo;
