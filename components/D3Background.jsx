import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Background() {
  const ref = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const points = d3.range(60).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    const circles = svg
      .selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("r", 2)
      .attr("fill", "#6D5DFC");

    function animate() {
      points.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });

      circles
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      svg.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 opacity-30 pointer-events-none"
    />
  );
}
