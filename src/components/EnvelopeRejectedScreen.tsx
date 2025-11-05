interface EnvelopeRejectedScreenProps {
  onCheck: () => void;
  onFinish: () => void;
}

export function EnvelopeRejectedScreen({ onCheck, onFinish }: EnvelopeRejectedScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Error Message Container */}
        <div className="absolute bg-red-50 h-[319px] left-[297px] rounded-[14px] top-[62px] w-[400px]">
          <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
          
          {/* Inner Container for Text and Icon */}
          <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]">
            {/* Text */}
            <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Koperta nie została przyjęta</p>
            </div>
            
            {/* Red X Icon */}
            <div className="absolute left-[106.63px] size-[128px] top-[148.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
                <g>
                  <path d="M96 32L32 96" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
                  <path d="M32 32L96 96" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
                  <path d="M32 32L96 96" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Sprawdź Button */}
        <button
          onClick={onCheck}
          className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[51px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[434px] w-[382px] hover:bg-[#1250e0] transition-colors"
        >
          <div className="h-[21px] relative shrink-0 w-[55px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[55px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Sprawdź</p>
            </div>
          </div>
        </button>
        
        {/* Zakończ Button */}
        <button
          onClick={onFinish}
          className="absolute bg-[#030213] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[561px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[434px] w-[387px] hover:bg-[#1a1a2e] transition-colors"
        >
          <div className="h-[21px] relative shrink-0 w-[53px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[53px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zakończ</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
