interface InvalidQRScreenProps {
  onTimeout: () => void;
}

export function InvalidQRScreen({ onTimeout }: InvalidQRScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
            
            {/* Red Error Container - clickable */}
            <div 
              onClick={onTimeout}
              className="absolute bg-red-50 box-border content-stretch flex flex-col h-[355px] items-start left-[50px] pb-[4px] pt-[36px] px-[36px] rounded-[14px] top-[76px] w-[894px] cursor-pointer hover:bg-red-100 transition-colors" 
              data-name="Container"
            >
              <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#fb2c36] text-[96px] text-center top-[149px] translate-x-[-50%] w-[894px]">Nie zeskanowano</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
