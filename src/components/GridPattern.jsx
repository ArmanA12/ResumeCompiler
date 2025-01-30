import React from 'react';

const GridComponent = () => {
  const columns = 45;
  const rows = 11;

  return (
    <div className="flex  flex-wrap justify-center items-center gap-x-px gap-y-px w-full h-full">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                index % 2 === 0
                  ? "bg-gray-50 hoverbox shadow-[0px_0px_1px_2px_rgba(255,255,255,2)_inset]"
                  : "bg-gray-50 hoverbox "
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default GridComponent;
