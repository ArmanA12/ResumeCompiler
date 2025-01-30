import React, { useEffect, useState } from 'react';


const GridComponent = () => {
  const columns = 45;
  const rows = 11;
  const totalCells = columns * rows;
  const [animatedCells, setAnimatedCells] = useState([]);


  const randomizeAnimation = () => {
    const numberOfAnimatedCells = 10; 
    const newAnimatedCells = [];

    while (newAnimatedCells.length < numberOfAnimatedCells) {
      const randomIndex = Math.floor(Math.random() * totalCells);
      if (!newAnimatedCells.includes(randomIndex)) {
        newAnimatedCells.push(randomIndex);
      }
    }

    setAnimatedCells(newAnimatedCells);
  };
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
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50  shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                  : "bg-gray-50 "
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default GridComponent;
