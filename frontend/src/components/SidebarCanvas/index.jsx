import React, { useEffect, useRef } from "react";

export default function SidebarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill background
    ctx.fillStyle = "#F0F0F0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a simple title
    ctx.fillStyle = "#36bffa";
    ctx.font = "16px sans-serif";
    ctx.fillText("Sidebar Canvas", 10, 24);

    // Draw grid
    ctx.strokeStyle = "#d3d3d3";
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }, []);

  return (
    <div className="hidden md:block w-[150px] p-2 bg-theme-bg-sidebar border-r border-theme-sidebar-border">
      <canvas ref={canvasRef} width={146} height={300} className="w-full h-full" />
    </div>
  );
}
