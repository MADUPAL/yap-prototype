import React, { useState } from "react";

export default function PostList({ page }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "title of post1",
      createDate: "2024-12-15",
      modifiedDate: "2024-12-19",
    },
    {
      id: 2,
      title: "title of post2",
      createDate: "2024-12-17",
      modifiedDate: "2024-12-19",
    },
  ]);

  console.log(posts);
  return (
    <>
      <div style={{ fontSize: "30px" }}>Posts</div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "green",
        }}
      >
        <div>title</div> <div>modified</div> <div>created</div>
      </div>
      <hr />
      {posts.map((item) => {
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
