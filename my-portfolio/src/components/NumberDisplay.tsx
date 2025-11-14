const baseShape = "h-[41px] w-[41px] transition-all duration-900 ease-in-out";

const shapes = {
  circle: `${baseShape} bg-[#FFC250] rounded-[100%]`,
  leftLeaf: `${baseShape} bg-[#485E2E] rounded-bl-[100%] rounded-tr-[100%]`,
  rightLeaf: `${baseShape} bg-[#485E2E] rounded-br-[100%] rounded-tl-[100%]`,
  redSquare: `${baseShape} bg-[#F22323] rounded-none`,
  redTopLeft: `${baseShape} bg-[#F22323] rounded-tl-[100%]`,
  redTopRight: `${baseShape} bg-[#F22323] rounded-tr-[100%]`,
  redBottomLeft: `${baseShape} bg-[#F22323] rounded-bl-[100%]`,
  redBottomRight: `${baseShape} bg-[#F22323] rounded-br-[100%]`,
  redTopLeftHalf: `${baseShape} bg-[#F22323] rounded-tl-[50%]`,
  redTopRightHalf: `${baseShape} bg-[#F22323] rounded-tr-[50%]`,
  redRoundedLeft: `${baseShape} bg-[#F22323] rounded-tl-[50%] rounded-br-[100%]`,
  redRoundedRight: `${baseShape} bg-[#F22323] rounded-tr-[50%] rounded-bl-[100%]`,
};

const numbers = {
  0: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redTopLeft,
    shapes.redTopRight,
    shapes.redSquare,
    shapes.redSquare,
    shapes.redBottomLeft,
    shapes.redBottomRight,
  ],
  1: [
    shapes.rightLeaf,
    shapes.circle,
    shapes.redTopRight,
    shapes.circle,
    shapes.redSquare,
    shapes.circle,
    shapes.redSquare,
    shapes.circle,
  ],
  2: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redBottomLeft,
    shapes.redTopRight,
    shapes.redTopLeft,
    shapes.redBottomRight,
    shapes.redSquare,
    shapes.redSquare,
  ],
  3: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redBottomLeft,
    shapes.redTopRight,
    shapes.redBottomLeft,
    shapes.redSquare,
    shapes.redBottomLeft,
    shapes.redBottomRight,
  ],
  4: [
    shapes.rightLeaf,
    shapes.circle,
    shapes.redTopRight,
    shapes.redSquare,
    shapes.redBottomLeft,
    shapes.redSquare,
    shapes.circle,
    shapes.redSquare,
  ],
  5: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redSquare,
    shapes.redSquare,
    shapes.redBottomLeft,
    shapes.redTopRight,
    shapes.redBottomLeft,
    shapes.redBottomRight,
  ],
  6: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redTopLeft,
    shapes.circle,
    shapes.redSquare,
    shapes.redTopRight,
    shapes.redBottomLeft,
    shapes.redBottomRight,
  ],
  7: [
    shapes.rightLeaf,
    shapes.circle,
    shapes.redBottomLeft,
    shapes.redSquare,
    shapes.circle,
    shapes.redSquare,
    shapes.circle,
    shapes.redSquare,
  ],
  8: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redTopLeft,
    shapes.redTopRight,
    shapes.redTopRightHalf,
    shapes.redTopLeftHalf,
    shapes.redRoundedRight,
    shapes.redRoundedLeft,
  ],
  9: [
    shapes.leftLeaf,
    shapes.rightLeaf,
    shapes.redTopLeft,
    shapes.redTopRight,
    shapes.redBottomLeft,
    shapes.redSquare,
    shapes.redBottomLeft,
    shapes.redBottomRight,
  ],
  10: [
    shapes.circle,
    shapes.circle,
    shapes.circle,
    shapes.circle,
    shapes.circle,
    shapes.circle,
    shapes.circle,
    shapes.circle,
  ],
} as const;

export type Digit = keyof typeof numbers;

export default function NumberDisplay({ digit }: { digit: Digit }) {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-0 ">
      {numbers[digit].map((shapeClass, index) => (
        <div key={index} className={shapeClass} />
      ))}
    </div>
  );
}
