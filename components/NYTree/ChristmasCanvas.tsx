"use client";

import { useEffect, useRef } from "react";

export default function ChristmasCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let color = 3;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let mousex = 0;
    let mousey = 0;

    window.addEventListener("mousemove", (e) => {
      mousex = e.clientX;
      mousey = e.clientY;
    });

    const dist = (a: number, b: number, c: number, d: number) =>
      Math.sqrt((a - c) ** 2 + (b - d) ** 2);

    const random = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const ellipse = (x: number, y: number, w: number, h: number) => {
      ctx.beginPath();
      ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    };

    class Particle {
      x = random(-50, width + 50);
      y = -50;
      o = random(0.75, 0.85);
      xv = random(-3, -1);
      yv = random(1, 4);
      s = random(1, 3);
      dead = false;

      draw() {
        ctx.fillStyle = `rgba(255,255,255,${this.o})`;
        ctx.fillRect(this.x, this.y, this.s, this.s);
      }

      update() {
        this.y += this.yv;
        this.x += this.xv;

        if (this.y >= height - 200) this.o -= 0.01;
        if (this.y >= height) this.dead = true;
        if (this.x <= -this.s) this.x = width;

        this.draw();
      }
    }

    class Dot {
      constructor(public y: number, public r: number, public ra: number) {}

      s = 2;
      close = false;

      update() {
        const x = width / 2 + Math.cos(this.r) * this.ra;

        if (dist(x, this.y, mousex, mousey) < 60) {
          this.close = true;
        }

        ctx.fillStyle = "white";
        ellipse(x, this.y, this.s, this.s);

        if (this.close) {
          ctx.fillStyle = "rgba(255,255,255,0.05)";
          ellipse(x, this.y, this.s * 7, this.s * 7);
        }

        this.r += 0.04;
        this.close = false;
      }
    }

    const particles: Particle[] = [];
    const dots: Dot[] = [];

    for (let i = 0; i < 250; i++) {
      for (let j = 0; j < 10; j++) {
        dots.push(
          new Dot(
            (height - 370) / 2 + 320 - i * 1.5,
            random(0, Math.PI * 2),
            120 - i * 0.485
          )
        );
      }
    }

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 20; i++) {
        particles.push(new Particle());
      }

      particles.forEach((p, i) => {
        p.update();
        if (p.dead) particles.splice(i, 1);
      });

      dots.forEach((d) => d.update());
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        //   inset: 0,
        inset: "150px 0 50px 0",
        background: "black",
        cursor: "none",
      }}
    />
  );
}
