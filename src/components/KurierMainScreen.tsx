interface KurierMainScreenProps {
  onUnload: () => void;
  onLoadBag: () => void;
  onReplacePaper: () => void;
}

export function KurierMainScreen({ onUnload, onLoadBag, onReplacePaper }: KurierMainScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]">
            
            {/* Rozładuj Button */}
            <button
              onClick={onUnload}
              className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[23px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px] hover:bg-[#1450e0] transition-colors cursor-pointer"
            >
              <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
                <p className="leading-[49px]">Rozładuj</p>
              </div>
            </button>
            
            {/* Załaduj worek Button */}
            <button
              onClick={onLoadBag}
              className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[344px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px] hover:bg-[#1450e0] transition-colors cursor-pointer"
            >
              <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
                <p className="leading-[49px]">Załaduj worek</p>
              </div>
            </button>
            
            {/* Wymień papier Button */}
            <button
              onClick={onReplacePaper}
              className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[665px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px] hover:bg-[#1450e0] transition-colors cursor-pointer"
            >
              <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
                <p className="leading-[49px]">Wymień papier</p>
              </div>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
