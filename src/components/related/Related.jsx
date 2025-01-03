import React, { useState } from "react";

export default function Related() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "title of todo1",
      createDate: "2024-12-15",
      modifiedDate: "2024-12-19",
    },
    {
      id: 2,
      title: "title of todo2s",
      createDate: "2024-12-17",
      modifiedDate: "2024-12-19",
    },
  ]);

  const [plan, setPlan] = useState([
    {
      id: 1,
      title: "title of plan1",
      createDate: "2024-12-15",
      modifiedDate: "2024-12-19",
    },
    {
      id: 2,
      title: "title of plan2",
      createDate: "2024-12-17",
      modifiedDate: "2024-12-19",
    },
  ]);

  const [calendar, setCalendar] = useState([
    {
      id: 1,
      title: "title of calendar1",
      createDate: "2024-12-15",
      modifiedDate: "2024-12-19",
    },
    {
      id: 2,
      title: "title of calendar2",
      createDate: "2024-12-17",
      modifiedDate: "2024-12-19",
    },
  ]);

  console.log(todo);
  return (
    <>
      <div style={{ fontSize: "30px" }}>Todo</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "green",
        }}
      >
        <div>title</div> <div>modified</div> <div>created</div>
      </div>
      <hr />
      {todo.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{item.title}</div> <div>{item.modifiedDate}</div>{" "}
              <div>{item.createDate}</div>
            </div>
            <hr />
          </>
        );
      })}
      <br />
      <div style={{ fontSize: "30px" }}>plan</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "green",
        }}
      >
        <div>title</div> <div>modified</div> <div>created</div>
      </div>
      <hr />
      {plan.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{item.title}</div> <div>{item.modifiedDate}</div>{" "}
              <div>{item.createDate}</div>
            </div>
            <hr />
          </>
        );
      })}
      <br />
      <div style={{ fontSize: "30px" }}>Calendar</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "green",
        }}
      >
        <div>title</div> <div>modified</div> <div>created</div>
      </div>
      <hr />
      {calendar.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{item.title}</div> <div>{item.modifiedDate}</div>{" "}
              <div>{item.createDate}</div>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}
