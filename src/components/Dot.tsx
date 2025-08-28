//add the identifier to any html element to prevent a dot
// from appearing when interacting with the element
export const NO_DOT_IDENTIFIER = '[data-no-dot=true]';

type DotProps = {
  x: number;
  y: number;
};

const Dot = ({ x, y }: DotProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x - 10,
        top: y - 10,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'red',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Dot;
