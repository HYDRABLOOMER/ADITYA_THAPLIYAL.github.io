import React, { useEffect, useRef, useState } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const [unitCount, setUnitCount] = useState({ infantry: 40, cavalry: 12, elephants: 4 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse / Cursor Target Position
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      clickRipple: [],
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleClick = (e) => {
      mouse.clickRipple.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 120,
        opacity: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // --- ANCIENT LEGION UNIT CREATION ---

    // Unit Types: 'infantry', 'cavalry', 'elephant'
    class Unit {
      constructor(type, index, total) {
        this.type = type;
        this.index = index;

        // Position spawn around canvas center initially
        this.x = width / 2 + (Math.random() - 0.5) * 600;
        this.y = height / 2 + (Math.random() - 0.5) * 400 + 100;
        this.vx = 0;
        this.vy = 0;
        this.angle = 0;
        this.stepOffset = Math.random() * Math.PI * 2;
        this.bannerOffset = Math.random() * Math.PI * 2;

        if (type === 'elephant') {
          this.maxSpeed = 2.2;
          this.accel = 0.04;
          this.size = 28;
          this.color = '#dfb15b'; // Ancient Gold
          this.secondaryColor = '#94a3b8';
          this.formationOffset = {
            x: ((index - (total - 1) / 2) * 140),
            y: 120 + Math.abs(index - (total - 1) / 2) * 20,
          };
        } else if (type === 'cavalry') {
          this.maxSpeed = 4.8;
          this.accel = 0.08;
          this.size = 16;
          this.color = '#2dd4bf'; // Arcane Cyan
          this.secondaryColor = '#dfb15b';
          // Flank formation
          const isLeft = index % 2 === 0;
          const col = Math.floor(index / 2);
          this.formationOffset = {
            x: isLeft ? -180 - col * 40 : 180 + col * 40,
            y: -30 + col * 35,
          };
        } else {
          // Infantry / Warrior
          this.maxSpeed = 3.2;
          this.accel = 0.06;
          this.size = 10;
          this.color = '#f59e0b'; // Gold / Warm Amber
          this.secondaryColor = '#a855f7'; // Arcane Purple
          // Phalanx grid formation around target
          const row = Math.floor(index / 8);
          const col = index % 8;
          this.formationOffset = {
            x: (col - 3.5) * 32,
            y: 40 + row * 28,
          };
        }
      }

      update(targetX, targetY) {
        // Desired position in formation following commander beacon (mouse)
        const destX = targetX + this.formationOffset.x;
        const destY = targetY + this.formationOffset.y;

        const dx = destX - this.x;
        const dy = destY - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 5) {
          const targetAngle = Math.atan2(dy, dx);
          // Smooth rotation turn towards movement direction
          let angleDiff = targetAngle - this.angle;
          while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
          while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
          this.angle += angleDiff * 0.1;

          // Speed based on distance
          const speed = Math.min(this.maxSpeed, dist * 0.05);
          this.vx += Math.cos(this.angle) * this.accel;
          this.vy += Math.sin(this.angle) * this.accel;

          // Cap speed
          const currentSpeed = Math.hypot(this.vx, this.vy);
          if (currentSpeed > speed) {
            this.vx = (this.vx / currentSpeed) * speed;
            this.vy = (this.vy / currentSpeed) * speed;
          }
        } else {
          this.vx *= 0.85;
          this.vy *= 0.85;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.stepOffset += Math.hypot(this.vx, this.vy) * 0.15 + 0.02;
        this.bannerOffset += 0.04;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + Math.PI / 2);

        if (this.type === 'elephant') {
          this.drawElephant(ctx);
        } else if (this.type === 'cavalry') {
          this.drawCavalry(ctx);
        } else {
          this.drawInfantry(ctx);
        }

        ctx.restore();
      }

      drawElephant(ctx) {
        const bob = Math.sin(this.stepOffset) * 2;

        // Ground shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.ellipse(0, 5, 26, 18, 0, 0, Math.PI * 2);
        ctx.fill();

        // Armored Elephant Body Silhouette
        ctx.fillStyle = '#1e1b2e';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.ellipse(0, bob, 20, 26, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Armored Tusks (Glowing Gold Curves)
        ctx.strokeStyle = '#dfb15b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(-12, -22 + bob);
        ctx.quadraticCurveTo(-18, -36 + bob, -24, -40 + bob);
        ctx.moveTo(12, -22 + bob);
        ctx.quadraticCurveTo(18, -36 + bob, 24, -40 + bob);
        ctx.stroke();

        // War Howdah Castle Tower on Elephant Back
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#2dd4bf';
        ctx.lineWidth = 1;
        ctx.fillRect(-12, -6 + bob, 24, 16);
        ctx.strokeRect(-12, -6 + bob, 24, 16);

        // War Banner Pole & Waving Flag
        const flagWave = Math.sin(this.bannerOffset) * 6;
        ctx.strokeStyle = '#dfb15b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0 + bob);
        ctx.lineTo(0, -32 + bob);
        ctx.stroke();

        // Glowing Flag
        ctx.fillStyle = 'rgba(223, 177, 91, 0.85)';
        ctx.beginPath();
        ctx.moveTo(0, -32 + bob);
        ctx.lineTo(18 + flagWave, -26 + bob);
        ctx.lineTo(0, -18 + bob);
        ctx.closePath();
        ctx.fill();

        // Runic Sigil on Flag
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px serif';
        ctx.fillText('AT', 4, -22 + bob);
      }

      drawCavalry(ctx) {
        const gallop = Math.sin(this.stepOffset * 1.5) * 3;

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 3, 14, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        // War Horse Body
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.ellipse(0, gallop, 8, 16, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Armored Rider with Glowing Lance
        ctx.fillStyle = '#2dd4bf';
        ctx.beginPath();
        ctx.arc(0, gallop - 2, 4, 0, Math.PI * 2);
        ctx.fill();

        // Charging Lance (Extended Forward)
        ctx.strokeStyle = '#dfb15b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(4, gallop - 4);
        ctx.lineTo(8, gallop - 24);
        ctx.stroke();

        // Lance Tip Glow
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(8, gallop - 24, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      drawInfantry(ctx) {
        const march = Math.sin(this.stepOffset) * 2;

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 2, 7, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Warrior Body
        ctx.fillStyle = '#111827';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, march, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Runic Shield (Left Hand)
        ctx.fillStyle = 'rgba(223, 177, 91, 0.8)';
        ctx.beginPath();
        ctx.ellipse(-5, march - 1, 3, 5, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();

        // Spear / Sword (Right Hand)
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(5, march + 4);
        ctx.lineTo(6, march - 12);
        ctx.stroke();

        // Spearhead Glow
        ctx.fillStyle = '#2dd4bf';
        ctx.beginPath();
        ctx.arc(6, march - 12, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // --- BATTLEFIELD DUST & EMBERS ---
    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 0.8 + 0.2);
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.color = Math.random() < 0.6 ? '#dfb15b' : (Math.random() < 0.5 ? '#2dd4bf' : '#a855f7');
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.002;
        if (this.opacity <= 0 || this.y < 0) {
          this.reset();
          this.y = height + 10;
        }
      }
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create Army Units
    const units = [];

    // 4 War Elephants
    for (let i = 0; i < 4; i++) {
      units.push(new Unit('elephant', i, 4));
    }
    // 12 Cavalry
    for (let i = 0; i < 12; i++) {
      units.push(new Unit('cavalry', i, 12));
    }
    // 40 Infantry
    for (let i = 0; i < 40; i++) {
      units.push(new Unit('infantry', i, 40));
    }

    // Create 80 Battlefield Embers
    const embers = Array.from({ length: 80 }, () => new Ember());

    // --- MAIN ANIMATION LOOP ---
    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw Commander Beacon Target Ring under Mouse
      ctx.save();
      ctx.translate(mouse.x, mouse.y);

      // Pulsing Runic Crosshair Ring
      const pulse = Math.sin(Date.now() * 0.005) * 4;
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 24 + pulse, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(45, 212, 191, 0.4)';
      ctx.beginPath();
      ctx.arc(0, 0, 36 + pulse, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshair lines
      ctx.strokeStyle = '#dfb15b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-12, 0); ctx.lineTo(12, 0);
      ctx.moveTo(0, -12); ctx.lineTo(0, 12);
      ctx.stroke();

      ctx.restore();

      // Draw Click Shockwaves
      for (let i = mouse.clickRipple.length - 1; i >= 0; i--) {
        const ripple = mouse.clickRipple[i];
        ripple.radius += 4;
        ripple.opacity -= 0.025;

        ctx.save();
        ctx.strokeStyle = `rgba(223, 177, 91, ${ripple.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        if (ripple.opacity <= 0) {
          mouse.clickRipple.splice(i, 1);
        }
      }

      // Draw Battlefield Embers
      embers.forEach((ember) => {
        ember.update();
        ember.draw(ctx);
      });

      // Sort units by Y position for depth sorting (back to front rendering)
      units.sort((a, b) => a.y - b.y);

      // Update and Draw Army Units
      units.forEach((unit) => {
        unit.update(mouse.x, mouse.y);
        unit.draw(ctx);
      });
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Tactical Commander Pill */}
      <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-950/80 border border-amber-500/30 text-amber-300 text-xs font-mono backdrop-blur-md shadow-lg">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span>LEGION COMMAND ACTIVE: 40 Warriors • 12 Cavalry • 4 War Elephants Tracking Mouse</span>
      </div>
    </div>
  );
}
