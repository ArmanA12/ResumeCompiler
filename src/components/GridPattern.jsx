import React, { useEffect, useState } from 'react';


const GridComponent = () => {
  const columns = 51;
  const rows = 11;
  const totalCells = columns * rows;
  const [animatedCells, setAnimatedCells] = useState([]);

  // Function to randomly select cells for animation
  const randomizeAnimation = () => {
    const numberOfAnimatedCells = 10; // Number of cells to animate
    const newAnimatedCells = [];

    while (newAnimatedCells.length < numberOfAnimatedCells) {
      const randomIndex = Math.floor(Math.random() * totalCells);
      if (!newAnimatedCells.includes(randomIndex)) {
        newAnimatedCells.push(randomIndex);
      }
    }

    setAnimatedCells(newAnimatedCells);
  };

  // Randomize animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(randomizeAnimation, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-container">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          const isAnimated = animatedCells.includes(index);

          return (
            <div
              key={`${col}-${row}`}
              className={`cell ${index % 2 === 0 ? 'alternate' : ''} ${
                isAnimated ? 'animated-cell' : ''
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default GridComponent;
