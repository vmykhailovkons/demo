interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
}

export function VirtualKeyboard({ onKeyPress, onBackspace }: VirtualKeyboardProps) {
  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]">
      {/* Number Row */}
      <div className="absolute h-[47px] left-0 top-0 w-[950px]">
        {numberKeys.map((key, idx) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[68.5px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
            style={{ left: `${idx * 72.5}px` }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{key}</p>
          </button>
        ))}
        <button
          onClick={onBackspace}
          className="absolute bg-gray-100 h-[47px] left-[725px] rounded-[8px] w-[225px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
        >
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">←</p>
        </button>
      </div>

      {/* Top Row */}
      <div className="absolute h-[47px] left-0 top-[51px] w-[950px]">
        {topRow.map((key, idx) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[91px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
            style={{ left: `${idx * 95}px` }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{key}</p>
          </button>
        ))}
      </div>

      {/* Middle Row */}
      <div className="absolute h-[47px] left-0 top-[102px] w-[950px]">
        <div className="absolute h-[47px] left-0 top-0 w-[26px]" />
        {middleRow.map((key, idx) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[93px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
            style={{ left: `${32 + idx * 97.5}px` }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{key}</p>
          </button>
        ))}
        <div className="absolute h-[47px] left-[923px] top-0 w-[27px]" />
      </div>

      {/* Bottom Row */}
      <div className="absolute h-[47px] left-0 top-[153px] w-[950px]">
        <button className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] w-[128px] border border-[#d1d5dc] flex items-center justify-center text-xs">
          shift
        </button>
        {bottomRow.map((key, idx) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[98px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
            style={{ left: `${133 + idx * 102.5}px` }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">{key}</p>
          </button>
        ))}
        <button 
          onClick={() => onKeyPress(' ')}
          className="absolute bg-gray-100 h-[47px] left-[852px] rounded-[8px] w-[98px] hover:bg-gray-200 transition-colors cursor-pointer border border-[#d1d5dc] flex items-center justify-center"
        >
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">space</p>
        </button>
      </div>
    </div>
  );
}
