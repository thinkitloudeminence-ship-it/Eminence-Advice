import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const ParticleBackground = () => {
    const containerRef = useRef(null);
    const [particles, setParticles] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const sizes = [5, 10, 15, 20, 25];
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#cfe035ff', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
    ];

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        const handleMouseDown = (event) => {
            createParticle(event.clientX, event.clientY);
        };

        const handleTouchStart = (event) => {
            const touch = event.touches[0];
            createParticle(touch.clientX, touch.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('touchstart', handleTouchStart);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    const createParticle = (x, y) => {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const negative = size / 2;
        const speedHorz = Math.random() * 10;
        const speedUp = Math.random() * 25;
        const spinVal = 360 * Math.random();
        const spinSpeed = ((36 * Math.random())) * (Math.random() <= 0.5 ? -1 : 1);
        const time = (1 + (0.5 * Math.random())) * 1000;
        const direction = Math.random() <= 0.5 ? -1 : 1;
        const life = 10;

        const particle = {
            id: Date.now() + Math.random(),
            size,
            color,
            top: y - negative,
            left: x - negative,
            speedHorz,
            speedUp,
            spinVal,
            spinSpeed,
            time,
            originalTime: time,
            direction,
            life,
            opacity: 1
        };

        setParticles(prev => [...prev, particle]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev =>
                prev.map(particle => {
                    const newTime = particle.time - particle.life;
                    const newLeft = particle.left - (particle.speedHorz * particle.direction);
                    const newTop = particle.top - particle.speedUp;
                    const newSpeedUp = Math.min(particle.size, particle.speedUp - 1);
                    const newSpinVal = particle.spinVal + particle.spinSpeed;
                    const newOpacity = ((newTime / particle.originalTime) / 2) + 0.25;

                    return {
                        ...particle,
                        time: newTime,
                        left: newLeft,
                        top: newTop,
                        speedUp: newSpeedUp,
                        spinVal: newSpinVal,
                        opacity: newOpacity
                    };
                }).filter(particle =>
                    particle.time > 0 &&
                    particle.left > -particle.size &&
                    particle.left < window.innerWidth + particle.size &&
                    particle.top < window.innerHeight + particle.size
                )
            );
        }, 1000 / 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                overflow: 'hidden'
            }}
        >
            {particles.map(particle => (
                <Box
                    key={particle.id}
                    sx={{
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: particle.color,
                        width: particle.size,
                        height: particle.size,
                        top: particle.top,
                        left: particle.left,
                        opacity: particle.opacity,
                        transform: `rotate(${particle.spinVal}deg)`,
                        transition: 'transform 0.1s linear'
                    }}
                />
            ))}
        </Box>
    );
};

export default ParticleBackground;