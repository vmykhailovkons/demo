import { useState } from 'react';

interface CompletedDepositsScreenProps {
  deposits: Array<{ envelopeNumber: string; status: 'Potwierdzone' | 'Niepotwierdzone' }>;
  onFinish: () => void;
  onNextDeposit: () => void;
}

export function CompletedDepositsScreen({ deposits, onFinish, onNextDeposit }: CompletedDepositsScreenProps) {
  const [isPrintSelected, setIsPrintSelected] = useState(false);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white box-border h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
            
            {/* First Table - Deposits List */}
            <div className="absolute h-[189px] left-[20px] rounded-[10px] top-[22px] w-[953px]">
              <div className="box-border content-stretch flex flex-col h-[189px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
                <div className="content-stretch flex flex-col h-[188px] items-start overflow-clip relative shrink-0 w-full">
                  {/* Table Header */}
                  <div className="absolute h-[40px] left-0 top-0 w-[949px]">
                    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
                      <div className="absolute h-[40px] left-0 top-0 w-[200px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Numer</p>
                      </div>
                      <div className="absolute h-[40px] left-[200px] top-0 w-[200px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Status</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Table Body - Scrollable */}
                  <div className="absolute h-[147px] left-0 top-[40px] w-[949px] overflow-y-auto">
                    {deposits.length === 0 ? (
                      <div className="h-[49px] w-[949px] flex items-center justify-center relative">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                        <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[#6b7280] text-[14px]">Brak depozytów</p>
                      </div>
                    ) : (
                      deposits.map((deposit, index) => (
                        <div key={index} className="absolute h-[49px] left-0 w-[949px]" style={{ top: `${index * 49}px` }}>
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                          <div className="absolute h-[49px] left-0 top-0 w-[200px]">
                            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#101828] text-[14px] text-nowrap top-[14px] whitespace-pre">{deposit.envelopeNumber}</p>
                          </div>
                          <p 
                            className={`absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[214px] not-italic text-[14px] text-nowrap top-[14px] whitespace-pre ${
                              deposit.status === 'Potwierdzone' ? 'text-[#101828]' : 'text-[#fb2c36]'
                            }`}
                          >
                            {deposit.status}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
            
            {/* Second Table - Confirmation Method */}
            <div className="absolute h-[140px] left-[22px] rounded-[10px] top-[232px] w-[953px]">
              <div className="box-border content-stretch flex flex-col h-[140px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
                <div className="content-stretch flex flex-col h-[138px] items-start overflow-clip relative shrink-0 w-full">
                  {/* Table Header */}
                  <div className="absolute h-[40px] left-0 top-0 w-[949px]">
                    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
                      <div className="absolute h-[40px] left-0 top-0 w-[200px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[54px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Metoda potwierdzenia</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Table Body */}
                  <div className="absolute h-[147px] left-0 top-[40px] w-[949px]">
                    {/* Row 1 with checkbox */}
                    <div className="absolute h-[49px] left-0 top-0 w-[949px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                      {/* Clickable Checkbox */}
                      <button
                        onClick={() => setIsPrintSelected(!isPrintSelected)}
                        className="absolute left-[13px] rounded-[4px] size-[20px] top-[15px] cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <div aria-hidden="true" className="absolute border-2 border-neutral-950 border-solid inset-0 pointer-events-none rounded-[4px]" />
                        {isPrintSelected && (
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="box-border content-stretch flex items-center justify-center size-[20px]">
                              <svg className="size-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3327 4L5.99935 11.3333L2.66602 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                      {/* Text */}
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[52px] not-italic text-[14px] text-neutral-950 text-nowrap top-[14px] whitespace-pre">Wydruk</p>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="absolute h-[49px] left-0 top-[49px] w-[949px]">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
            
            {/* Następny depozyt Button - Left */}
            <button
              onClick={onNextDeposit}
              className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[24px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[442px] w-[347px] hover:bg-[#1450e0] transition-colors"
            >
              <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Następny depozyt</p>
            </button>
            
          </div>
        </div>
      </div>
      
      {/* Zakończ Button - Bottom Right - Outside white container */}
      <button
        onClick={onFinish}
        className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[644px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[523px] w-[347px] hover:bg-[#1450e0] transition-colors"
      >
        <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Zakończ</p>
      </button>
    </div>
  );
}
