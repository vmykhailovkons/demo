interface EnvelopeAcceptedScreenProps {
  onClick: () => void;
}

export function EnvelopeAcceptedScreen({ onClick }: EnvelopeAcceptedScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]">
            
            {/* Green Container - clickable */}
            <div 
              onClick={onClick}
              className="absolute bg-green-50 box-border content-stretch flex h-[321px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[93px] w-[920px] cursor-pointer hover:bg-green-100 transition-colors"
            >
              <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
              
              {/* Frame */}
              <div className="h-[208px] relative shrink-0 w-[865px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
                  <div className="absolute font-['Arial:Regular',sans-serif] h-[36px] leading-[24px] left-[429px] not-italic text-[96px] text-center text-green-500 top-[50.5px] translate-x-[-50%] w-[909px]">
                    <p className="mb-0">Koperta została</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className="mb-0">&nbsp;</p>
                    <p>przyjęta</p>
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