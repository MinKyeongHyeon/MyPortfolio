interface MoreButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

export default function MoreButton({ onClick, isExpanded }: MoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex items-center justify-center w-[42px] h-[42px] rounded-full overflow-hidden"
    >
      {/* 블렌드 오버레이 */}
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply rounded-full" />

      {/* 십자 아이콘 */}
      <div className="relative z-10 flex flex-col items-center">
        {isExpanded ? (
          <div className="w-6 h-1 bg-[#d9d9d9]" />
        ) : (
          <>
            <div className="w-1 h-2.5 bg-[#d9d9d9]" />
            <div className="w-6 h-1 bg-[#d9d9d9]" />
            <div className="w-1 h-2.5 bg-[#d9d9d9]" />
          </>
        )}
      </div>
    </button>
  );
}
