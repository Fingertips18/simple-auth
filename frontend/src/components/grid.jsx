import { useGrid } from "@/lib/hooks/useGrid";

const size = 24;

const Grid = () => {
  const { columns, rows } = useGrid(size);

  return (
    <>
      <div
        className="w-full h-full fixed -top-1.5 backdrop-blur-2xl"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, ${size}px)`,
          gridTemplateRows: `repeat(${rows}, ${size}px)`,
          gap: "2px",
        }}
        aria-hidden="true"
      >
        {Array.from({ length: columns * rows }).map((_, i) => {
          return (
            <span
              key={i}
              className="border border-primary rounded-sm bg-background transition-all hover:drop-shadow-primary-glow hover:scale-75"
            />
          );
        })}
      </div>

      <span
        aria-hidden="true"
        className="fixed w-full h-full bg-gradient-to-r from-background via-transparent to-background pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="fixed w-full h-full bg-gradient-to-b from-background via-transparent to-background pointer-events-none"
      />
    </>
  );
};

export { Grid };
