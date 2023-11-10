import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./Checkbox.css";

const Checkbox = (props) => {


const mappingTaskList = props.taskList.map((item) => {
  return item.completed;
})



  console.log("CompletedChange", props.checkboxHandler)

  return (
    <div className="round">
      <input
        value={props.completed}
        checked={props.completed}
        onChange={props.handleCheckboxChange}
        // onClick={props.handleCheckboxChange}
        type="checkbox"
        completed={props.completed}
      />
      <label
        className={clsx("checkbox", props.completed ? "checkbox--active" : "checkbox--active:after")}
        // className={clsx("checkbox", checked.onChange && "checkbox--active")}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
