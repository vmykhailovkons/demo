import { useState, useEffect } from 'react';
import svgPathsButton from '../imports/svg-fhuqlct3ew';

interface AddUserScreenProps {
  onSave: (userId: string, role: string) => void;
  onBack?: () => void;
  onLogout?: () => void;
}

export default function AddUserScreen({ onSave, onBack, onLogout }: AddUserScreenProps) {
  const [scannedCard, setScannedCard] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [scanError, setScanError] = useState(false);

  const roles = ['Klient', 'Kurier', 'Master'];

  // Function to generate random ID (5 digits)
  const generateRandomId = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  // Function to start scanning animation when card box is clicked
  const handleCardBoxClick = () => {
    if (!isLoading && !isScanned && !scanError) {
      setIsLoading(true);
    } else if (isLoading) {
      // If in scanning state, clicking moves to result immediately
      setIsLoading(false);
      const isSuccess = Math.random() > 0.5;
      
      if (isSuccess) {
        setIsScanned(true);
        setScannedCard(generateRandomId());
      } else {
        setScanError(true);
      }
    }
  };

  // Function to retry scanning after error
  const handleRetryClick = () => {
    setScanError(false);
    setIsScanned(false);
    setScannedCard('');
  };



  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      {/* Container91 - Adaptive wrapper with flex center */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full h-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          
          {/* White Container - 993x508px */}
          <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-1/2 -translate-x-1/2 pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container">
            
            {/* Card Scan Box */}
            <div 
              onClick={scanError ? handleRetryClick : handleCardBoxClick}
              className={`h-[199px] relative rounded-[14px] shrink-0 w-full ${
                scanError ? 'bg-red-50 cursor-pointer hover:bg-red-100 transition-colors' : 
                isScanned ? 'bg-green-50' : 
                'bg-blue-50'
              } ${!isScanned && !scanError ? 'cursor-pointer hover:bg-blue-100 transition-colors' : ''}`}
              data-name="Container"
            >
              <div aria-hidden="true" className={`absolute border-4 border-solid inset-0 pointer-events-none rounded-[14px] ${
                scanError ? 'border-[#fb2c36]' :
                isScanned ? 'border-green-500' : 
                'border-[#2b7fff]'
              }`} />
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col h-[199px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
                  {isLoading ? (
                    <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#2b7fff] text-[96px] text-center top-[80px] translate-x-[-50%] w-[894px]">Skanowanie</p>
                  ) : scanError ? (
                    <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-[447px] not-italic text-[#fb2c36] text-[96px] text-nowrap top-[80px] translate-x-[-50%] whitespace-pre">Nie zeskanowano</p>
                  ) : isScanned ? (
                    <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[96px] text-center text-green-500 top-[80px] translate-x-[-50%] w-[894px]">Zeskanowano</p>
                  ) : (
                    <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#2b7fff] text-[96px] text-center top-[80px] translate-x-[-50%] w-[894px]">Zbliż kartę</p>
                  )}
                </div>
              </div>
            </div>

            {/* ID użytkownika - only show when scanned */}
            {isScanned && (
              <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="Container">
                {/* Label */}
                <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
                  <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ID użytkownika</p>
                </div>
                
                {/* ID Display */}
                <div className="bg-[#f3f3f5] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
                      <div className="h-[20px] relative shrink-0 w-[86.719px]" data-name="Primitive.span">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[86.719px]">
                          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">
                            {scannedCard}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Role Dropdown Container - only show when scanned */}
            {isScanned && (
              <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
                {/* Label */}
                <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
                  <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Rola użytkownika</p>
                </div>
                
                {/* Dropdown Button */}
                <button
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full opacity-100 cursor-pointer"
                  data-name="Primitive.button"
                >
                  <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[8px] border-[#d1d5dc]" />
                  <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
                    {/* Text */}
                    <div className="h-[21px] relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative">
                        <p className={`font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap ${role ? 'text-neutral-950' : 'text-[#717182]'}`}>
                          {role || 'Wybierz rolę...'}
                        </p>
                      </div>
                    </div>
                    {/* Icon */}
                    <div className="relative shrink-0 size-[16px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d="M4 6L8 10L12 6" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {showRoleDropdown && (
                  <div className="absolute top-[58px] left-0 w-full bg-white border border-[#d1d5dc] rounded-[8px] shadow-lg z-10">
                    {roles.map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setShowRoleDropdown(false);
                        }}
                        className="w-full px-[13px] py-[8px] text-left font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px]"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Add User Button - only show when role is selected */}
            {role && isScanned && (
              <button
                onClick={() => {
                  onSave(scannedCard, role);
                  // Reset form
                  setScannedCard('');
                  setRole('');
                  setIsLoading(false);
                  setIsScanned(false);
                }}
                className="bg-[#2b7fff] h-[36px] mt-[20px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#1f6de6] transition-colors"
                data-name="Button"
              >
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-1/2 not-italic text-[14px] text-center text-white top-[6px] -translate-x-1/2 w-[117px]">Dodaj użytkownika</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}