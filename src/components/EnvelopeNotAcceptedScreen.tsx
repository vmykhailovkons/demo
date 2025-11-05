interface EnvelopeNotAcceptedScreenProps {
  onCheck: () => void;
  onFinish: () => void;
}

export function EnvelopeNotAcceptedScreen({ onCheck, onFinish }: EnvelopeNotAcceptedScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-[16px] pb-0 pl-[37px] pr-[36px] pt-[20px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
            
            {/* Red Container */}
            <div className="bg-red-50 box-border content-stretch flex h-[298px] items-center justify-center mb-[116px] p-[4px] rounded-[14px] w-[920px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid left-[37px] top-[20px] w-[920px] h-[298px] pointer-events-none rounded-[14px]" />
              
              {/* Frame */}
              <div className="h-[208px] relative shrink-0 w-[865px]" data-name="Frame">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
                  <div className="absolute font-['Arial:Regular',sans-serif] h-[110px] leading-[27px] left-[431.5px] not-italic text-[#fb2c36] text-[96px] text-center top-[25px] translate-x-[-50%] w-[916px]">
                    <p className="mb-0">{`Koperta nie została `}</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p>potwierdzona</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-[16px] w-full">
              {/* Sprawdż Button */}
              <button
                onClick={onCheck}
                className="bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center pl-0 pr-[0.016px] py-0 rounded-[8px] flex-1 hover:bg-[#1450e0] transition-colors"
              >
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Sprawdż</p>
              </button>
              
              {/* Zakończ Button */}
              <button
                onClick={onFinish}
                className="bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex-1 hover:bg-[#1450e0] transition-colors"
              >
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Zakończ</p>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
