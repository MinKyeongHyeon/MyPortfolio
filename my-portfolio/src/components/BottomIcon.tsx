export default function BottomIcon() {
  const baseShape = "h-[41px] w-[41px]";
  const shapes = {
    leftLeaf: `${baseShape} bg-[#DBDBDB] rounded-bl-[100%] rounded-tr-[100%]`,
    rightLeaf: `${baseShape} bg-[#DBDBDB] rounded-br-[100%] rounded-tl-[100%]`,
    redTopLeft: `${baseShape} bg-[#DBDBDB] rounded-tl-[100%]`,
    redTopRight: `${baseShape} bg-[#DBDBDB] rounded-tr-[100%]`,
  };
  return (
    <div className="flex justify-center mt-12">
      <div className="grid grid-cols-2">
        <div className={shapes.leftLeaf} />
        <div className={shapes.rightLeaf} />
        <div className={shapes.redTopLeft} />
        <div className={shapes.redTopRight} />
      </div>
      <div className="grid grid-cols-2">
        <div className={shapes.leftLeaf} />
        <div className={shapes.rightLeaf} />
        <div className={shapes.redTopLeft} />
        <div className={shapes.redTopRight} />
      </div>
      <div className="grid grid-cols-2">
        <div className={shapes.leftLeaf} />
        <div className={shapes.rightLeaf} />
        <div className={shapes.redTopLeft} />
        <div className={shapes.redTopRight} />
      </div>
    </div>
  );
}
