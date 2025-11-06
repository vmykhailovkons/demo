import { useState } from 'react';
import svgPaths from '../imports/svg-uwd7oq0qad';

interface EditUserScreenProps {
  userId: string;
  role: string;
  status: 'aktywny' | 'nieaktywny';
  onSave: (userId: string, newCardId: string, role: string, status: 'aktywny' | 'nieaktywny') => void;
  onBack?: () => void;
  onLogout?: () => void;
}

export default function EditUserScreen({ 
  userId: initialUserId, 
  role: initialRole, 
  status: initialStatus, 
  onSave,
  onBack,
  onLogout 
}: EditUserScreenProps) {
  const [scannedCard, setScannedCard] = useState<string>('');
  const [role, setRole] = useState(initialRole);
  const [status, setStatus] = useState(initialStatus);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [scanState, setScanState] = useState<'prompt' | 'scanning' | 'scanned' | 'not-scanned'>('prompt');

  const roles = ['Klient', 'Kurier', 'Master'];
  const statuses: Array<{ value: 'aktywny' | 'nieaktywny'; label: string }> = [
    { value: 'aktywny', label: 'Aktywny' },
    { value: 'nieaktywny', label: 'Nieaktywny' }
  ];

  // Function to generate random ID (5 digits)
  const generateRandomId = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  // Handle card scan click
  const handleCardScanClick = () => {
    if (scanState === 'prompt') {
      setScanState('scanning');
    } else if (scanState === 'scanning') {
      // If in scanning state, clicking moves to result immediately
      const randomSuccess = Math.random() > 0.3; // 70% success rate
      
      if (randomSuccess) {
        const newId = generateRandomId();
        setScannedCard(newId);
        setScanState('scanned');
      } else {
        setScanState('not-scanned');
      }
    } else if (scanState === 'not-scanned') {
      // If "Nie zeskanowano" is clicked, go back to prompt
      setScanState('prompt');
    }
  };

  // Current user ID to display
  const currentUserId = scannedCard || initialUserId;

  // Track if form has been modified
  const hasChanges = (scannedCard !== '' && scannedCard !== initialUserId) || 
                     role !== initialRole || 
                     status !== initialStatus;

  const handleSave = () => {
    if (currentUserId && role) {
      onSave(initialUserId, currentUserId, role, status);
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-[16px] pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[16px] h-[363px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="App">
          
          {/* Top Container - Zbliż nową kartę / Skanowanie / Zeskanowano / Nie zeskanowano */}
          <div 
            onClick={handleCardScanClick}
            className={`h-[199px] relative rounded-[14px] shrink-0 w-full ${
              scanState === 'scanned' ? 'bg-green-50' : 
              scanState === 'not-scanned' ? 'bg-red-50' : 
              'bg-blue-50'
            } ${
              scanState !== 'scanned' 
                ? 'cursor-pointer hover:opacity-90 transition-opacity' 
                : ''
            }`}
            data-name="Container"
          >
            <div aria-hidden="true" className={`absolute border-4 border-solid inset-0 pointer-events-none rounded-[14px] ${
              scanState === 'scanned' ? 'border-green-500' : 
              scanState === 'not-scanned' ? 'border-[#fb2c36]' : 
              'border-[#2b7fff]'
            }`} />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col h-[199px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
                {scanState === 'prompt' && (
                  <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[467px] not-italic text-[#2b7fff] text-[96px] text-center top-[80px] translate-x-[-50%] w-[782px]">Zbliż nową kartę</p>
                )}
                {scanState === 'scanning' && (
                  <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[433px] not-italic text-[#2b7fff] text-[96px] text-center top-[80px] translate-x-[-50%] w-[556px]">Skanowanie</p>
                )}
                {scanState === 'scanned' && (
                  <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[96px] text-center text-green-500 top-[80px] translate-x-[-50%] w-[894px]">Zeskanowano</p>
                )}
                {scanState === 'not-scanned' && (
                  <p className="absolute font-['Arial:Bold',sans-serif] h-[57px] leading-[27px] left-[429px] not-italic text-[#fb2c36] text-[96px] text-center top-[80px] translate-x-[-50%] w-[858px]">Nie zeskanowano</p>
                )}
              </div>
            </div>
          </div>

          {/* ID użytkownika - Read-only field */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
              <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ID użytkownika</p>
            </div>
            
            <div className="bg-[#f3f3f5] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
                  <div className="h-[20px] relative shrink-0 w-[86.719px]" data-name="Primitive.span">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[86.719px]">
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">{currentUserId}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Role Dropdown Container */}
          <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
              <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Rola użytkownika</p>
            </div>
            
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[77.672px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[77.672px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{role}</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
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

          {/* Status Dropdown Container */}
          <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
              <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Status</p>
            </div>
            
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
                  <div className="h-[21px] relative shrink-0 w-[77.672px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[77.672px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                        {statuses.find(s => s.value === status)?.label}
                      </p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showStatusDropdown && (
              <div className="absolute top-[58px] left-0 w-full bg-white border border-[#d1d5dc] rounded-[8px] shadow-lg z-10">
                {statuses.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      setStatus(s.value);
                      setShowStatusDropdown(false);
                    }}
                    className="w-full px-[13px] py-[8px] text-left font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px]"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Zapisz Button - Only show when there are changes */}
        {hasChanges && (
          <button
            onClick={handleSave}
            className="absolute bg-[#2b7fff] h-[36px] left-[50px] rounded-[8px] top-[444px] w-[894px] cursor-pointer hover:bg-[#1d6de8] transition-colors"
            data-name="Button"
          >
            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[444.5px] not-italic text-[14px] text-center text-white top-[6px] translate-x-[-50%] w-[117px]">Zapisz</p>
          </button>
        )}
      </div>
    </div>
  );
}