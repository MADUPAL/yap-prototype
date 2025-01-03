import React, { act, useEffect, useRef, useState } from "react";
import { Canvas, Point, Rect, Textbox, Path } from "fabric";
import {
  EditOutlined,
  BorderOuterOutlined,
  BoldOutlined,
  CheckOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const BlackboardPage = () => {
  const canvasRef = useRef(null);
  const [objects, setObject] = useState([]);
  const [canvas, setCanvas] = useState(null);
  const [currentMode, setCurrentMode] = useState("paint"); // Default mode is 'paint'
  const [rectStart, setRectStart] = useState(null);
  const [isFinish, setIsFinish] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [tempRect, setTempRect] = useState(null);
  const [isRectDrawStartFinish, setIsRectDrawStartFinish] = useState(false);
  const [oneDrawPoints, setOneDrawPoints] = useState([]);
  const [tempPath, setTempPath] = useState([]);
  useEffect(() => {
    if (canvas === undefined || canvas === null) {
      const fabricCanvas = new Canvas(canvasRef.current, {
        width: 1400,
        height: 700,
      });
      setCanvas(fabricCanvas);

      // Set initial mode
      // fabricCanvas.isDrawingMode = true;
      // fabricCanvas.freeDrawingBrush.color = "black";
      // fabricCanvas.freeDrawingBrush.width = 5;

      return () => {
        fabricCanvas.dispose(); // Clean up canvas when the component unmounts
      };
    }
  }, []); // <-- Add canvasRef.current to dependency array

  useEffect(() => {
    if (!canvas) return;

    // Reset canvas mode when mode changes
    canvas.isDrawingMode = currentMode === "paint";
    canvas.selection = currentMode !== "paint";

    if (currentMode === "draw-rect") {
      canvas.off("mouse:down");
      canvas.off("mouse:move");
      canvas.off("mouse:up");
      setIsFinish(false);
      canvas.on("mouse:down", startRectDraw);
      canvas.on("mouse:move", handleRectMouseMove);
      canvas.on("mouse:up", handleRectMouseUp);
    } else if (currentMode === "write-text") {
      canvas.off("mouse:down");
      canvas.on("mouse:down", startWritingText);
    } else if (currentMode === "paint") {
      canvas.off("mouse:down");
      canvas.off("mouse:move");
      canvas.off("mouse:up");
      canvas.on("mouse:down", handleMouseDown);
      canvas.on("mouse:move", handleMouseMove);
      canvas.on("mouse:up", handleMouseUp);
    } else {
      canvas.off("mouse:down");
      canvas.off("mouse:move");
      canvas.off("mouse:up");
      canvas.renderAll();
    }
  }, [
    currentMode,
    canvas,
    isFinish,
    rectStart,
    objects,
    isDrawing,
    oneDrawPoints,
  ]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/98d7869000.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleMouseDown = (e) => {
    if (isDrawing) return;
    //console.log("handleMouseDown");
    const startPoint = { x: e.pointer.x, y: e.pointer.y };
    setIsDrawing(true);
    setPoints([startPoint]);
    setOneDrawPoints([startPoint]);
  };

  const handleMouseMove = (e) => {
    //console.log("handleMouseMove before");
    //console.log(isDrawing);
    if (!isDrawing) return; // Check drawing state from ref
    //console.log("handleMouseMove");
    const newPoint = { x: e.pointer.x, y: e.pointer.y };
    const currentPoints = points;
    currentPoints.push(newPoint);
    //console.log("points: ");
    //console.log(points);
    //console.log("new Points: ");
    //console.log(currentPoints);
    // Update the path array with new points
    let pathInfo = `M ${currentPoints[0].x} ${currentPoints[0].y} `;
    for (let i = 1; i < currentPoints.length; i++) {
      pathInfo += `L ${currentPoints[i].x} ${currentPoints[i].y} `;
    }
    pathInfo += "Z";

    console.log(pathInfo);

    const path = new Path(pathInfo, {
      stroke: "white", // Set stroke color
      strokeWidth: 2, // Set stroke width
      fill: "transparent", // Set fill color (transparent in this case)
    });

    canvas.add(path);
    canvas.renderAll();
    //console.log("oneDrawPoints");
    //console.log(oneDrawPoints);

    // Set the updated path data
    // Update the points state for future moves

    currentPoints.shift();
    setPoints(currentPoints);
    const newOneDrawPoints = oneDrawPoints;
    newOneDrawPoints.push(newPoint);
    setOneDrawPoints(newOneDrawPoints);
    const newTempPath = tempPath;
    newTempPath.push(path);
    setTempPath(newTempPath);
    //console.log("newoneDrawPoints");
    //console.log(newOneDrawPoints);
  };
  const handleMouseUp = () => {
    //console.log("handleMouseUp");
    setIsDrawing(false);
    //console.log("onedrawpoint at up");
    //console.log(oneDrawPoints);
    // Update the path array with new points
    let pathInfo = `M ${oneDrawPoints[0].x} ${oneDrawPoints[0].y} `;
    for (let i = 1; i < oneDrawPoints.length; i++) {
      pathInfo += `L ${oneDrawPoints[i].x} ${oneDrawPoints[i].y} `;
    }
    //pathInfo += "Z";

    console.log("mouseup pathinfo");
    console.log(pathInfo);
    const path = new Path(pathInfo, {
      stroke: "white", // Set stroke color
      strokeWidth: 2, // Set stroke width
      fill: "transparent", // Set fill color (transparent in this case)
    });

    canvas.add(path);
    for (let i = 0; i < tempPath.length; i++) {
      canvas.remove(tempPath[i]);
    }
    canvas.renderAll();
    setPoints([]);
    setTempPath([]);
    setOneDrawPoints([]);
  };

  // Change drawing mode
  const setMode = (mode) => {
    setCurrentMode(mode);
  };

  // Start drawing a rectangle
  const startRectDraw = (e) => {
    // Check if drawing is already finished
    if (isFinish) return;
    if (isRectDrawStartFinish) return;

    const startPoint = new Point(e.pointer.x, e.pointer.y);
    const rect = new Rect({
      left: startPoint.x,
      top: startPoint.y,
      width: 0,
      height: 0,
      fill: "rgba(235, 0, 0, 0.3)", // Semi-transparent red
      stroke: "blue", // Blue outline
      strokeWidth: 2,
    });

    canvas.add(rect);
    canvas.renderAll();
    setTempRect(rect);
    setRectStart(startPoint);
    setIsRectDrawStartFinish(true);
  };

  function handleRectMouseMove(e) {
    //console.log("mouse:move");
    if (!rectStart) return;
    const pointer = canvas.getPointer(e.e);
    tempRect.set({
      width: pointer.x - rectStart.x,
      height: pointer.y - rectStart.y,
      fill: "rgba(235, 0, 0, 0.3)", // Semi-transparent red
      stroke: "blue", // Blue outline
      strokeWidth: 2,
    });
  }

  function handleRectMouseUp() {
    //console.log("mouse:up");
    const rect = tempRect;
    canvas.add(rect);
    canvas.renderAll();
    setObject([...objects, rect]); // Add the drawn rect to the objects array
    setIsFinish(true);
    setIsRectDrawStartFinish(false);
    setRectStart(null);
    setMode("select");
  }

  // Start writing text
  const startWritingText = (e) => {
    const pointer = canvas.getPointer(e.e);
    const text = new Textbox("Click to edit text", {
      left: pointer.x,
      top: pointer.y,
      width: 150,
      fontSize: 20,
      fill: "black",
    });

    canvas.add(text);
    canvas.setActiveObject(text);
    text.enterEditing();
    canvas.off("mouse:down");
    setMode("select");
  };

  const handleDelete = () => {
    const activeObject = canvas.getActiveObjects();
    //console.log("activeObject");
    //console.log(activeObject);
    if (activeObject) {
      for (let i = 0; i < activeObject.length; i++) {
        canvas.remove(activeObject[i]);
      }
    }
    console.log("canvas");
    console.log();
    canvas._onMouseDown((e) => {});
  };

  return (
    <div>
      <div className="toolbar">
        <EditOutlined
          onClick={() => setMode("paint")}
          className="button-hover"
          style={{ fontSize: "30px", marginRight: "15px" }}
        />
        <BorderOuterOutlined
          onClick={() => setMode("draw-rect")}
          className="button-hover"
          style={{ fontSize: "30px", marginRight: "15px" }}
        />
        <BoldOutlined
          onClick={() => setMode("write-text")}
          className="button-hover"
          style={{ fontSize: "30px", marginRight: "15px" }}
        />
        <CheckOutlined
          onClick={() => setMode("select")}
          className="button-hover"
          style={{ fontSize: "30px", marginRight: "15px" }}
        />
        <DeleteOutlined
          onClick={handleDelete}
          className="button-hover"
          style={{ fontSize: "30px", marginRight: "15px" }}
        />
      </div>

      <canvas ref={canvasRef} jsx="true" />

      <style jsx="true">{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f7f7f7;
        }
        canvas {
          border: 1px solid black;
          background: rgba(0, 0, 0, 0.11);
          margin-top: 20px;
        }
        .toolbar {
          margin-bottom: 10px;
        }
        .toolbar button {
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default BlackboardPage;
