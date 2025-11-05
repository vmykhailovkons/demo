interface CheckSlotScreenProps {
  onClick: () => void;
}

export function CheckSlotScreen({ onClick }: CheckSlotScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-[16px] pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
            
            {/* Blue Container - clickable */}
            <div 
              onClick={onClick}
              className="bg-blue-50 h-[355px] relative rounded-[14px] shrink-0 w-full cursor-pointer hover:bg-blue-100 transition-colors" 
              data-name="Container"
            >
              <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col h-[355px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
                  <div className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#2b7fff] text-[96px] text-center top-[58px] translate-x-[-50%] w-[894px]">
                    <p className="mb-0">Sprawdż zawartość</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">wrzutnie i zamknij</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p>wrzutnie</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
