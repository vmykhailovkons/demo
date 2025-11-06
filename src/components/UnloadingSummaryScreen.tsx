import { useState } from 'react';

interface UnloadingSummaryScreenProps {
  deposits: string[];
  onMenu: () => void;
  onFinish: () => void;
}

export function UnloadingSummaryScreen({ deposits, onMenu, onFinish }: UnloadingSummaryScreenProps) {
  const [isPrintChecked, setIsPrintChecked] = useState(false);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* White Container - 993x508px */}
      <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]">
        
        {/* First Table - Deposits */}
        <div className="absolute h-[189px] left-[20px] rounded-[10px] top-[22px] w-[953px]">
          <div className="box-border content-stretch flex flex-col h-[189px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
            <div className="content-stretch flex flex-col h-[188px] items-start overflow-clip relative shrink-0 w-full">
              <div className="h-[187.5px] relative shrink-0 w-full">
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
                
                {/* Table Body */}
                <div className="absolute h-[147px] left-0 top-[40px] w-[949px] overflow-y-auto">
                  {deposits.length === 0 ? (
                    <div className="h-[49px] w-[949px] flex items-center justify-center relative">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[#6b7280] text-[14px]">Brak depozytów</p>
                    </div>
                  ) : (
                    deposits.map((deposit, index) => (
                      <div key={deposit + index} className="absolute h-[49px] left-0 w-[949px]" style={{ top: `${index * 49}px` }}>
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                        <div className="absolute h-[49px] left-0 top-0 w-[200px]">
                          <div className="absolute h-[21px] left-[12px] top-[14.25px] w-[176px]">
                            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{deposit}</p>
                          </div>
                        </div>
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[214px] not-italic text-[#101828] text-[14px] text-nowrap top-[14px] whitespace-pre">Potwierdzone</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>

        {/* Second Table - Confirmation Method */}
        <div className="absolute h-[140px] left-[22px] rounded-[10px] top-[232px] w-[953px]">
          <div className="box-border content-stretch flex flex-col h-[140px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
            <div className="content-stretch flex flex-col h-[138px] items-start overflow-clip relative shrink-0 w-full">
              <div className="h-[187.5px] relative shrink-0 w-full">
                {/* Table Header */}
                <div className="absolute h-[40px] left-0 top-0 w-[949px]">
                  <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]">
                    <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
                    <div className="absolute h-[40px] left-0 top-0 w-[200px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[54px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Metoda potwierdzenia</p>
                    </div>
                  </div>
                </div>
                
                {/* Table Body - Wydruk checkbox */}
                <div className="absolute h-[147px] left-0 top-[40px] w-[949px]">
                  <div className="absolute h-[49px] left-0 top-0 w-[949px]">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                    <button 
                      onClick={() => setIsPrintChecked(!isPrintChecked)}
                      className="absolute left-[13px] rounded-[4px] size-[20px] top-[15px] cursor-pointer transition-colors hover:bg-gray-50"
                    >
                      <div aria-hidden="true" className="absolute border-2 border-neutral-950 border-solid inset-0 pointer-events-none rounded-[4px]" />
                      {isPrintChecked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                            <path d="M3 8L6.5 11.5L13 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </button>
                    <button 
                      onClick={() => setIsPrintChecked(!isPrintChecked)}
                      className="absolute content-stretch flex gap-[8px] h-[37.5px] items-center left-[52px] top-[6px] w-[271.531px] cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <div className="h-[22px] relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[22px] items-start relative">
                          <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Wydruk</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>

        {/* Menu Button */}
        <button
          onClick={onMenu}
          className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[24px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[442px] w-[347px] hover:bg-[#1250e0] transition-colors"
        >
          <div className="h-[21px] relative shrink-0 w-[112.078px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[112.078px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[31.55px] not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">Menu</p>
            </div>
          </div>
        </button>

        {/* Zakończ Button */}
        <button
          onClick={onFinish}
          className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[622px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[442px] w-[347px] hover:bg-[#1250e0] transition-colors"
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