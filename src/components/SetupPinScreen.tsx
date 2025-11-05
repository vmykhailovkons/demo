import { useState, useEffect, useRef } from 'react';

interface SetupPinScreenProps {
  onPinSetup: (pin: string) => void;
}

export default function SetupPinScreen({ onPinSetup }: SetupPinScreenProps) {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [activeField, setActiveField] = useState<'pin' | 'confirm'>('pin');
  const pinInputRef = useRef<HTMLInputElement>(null);
  const confirmInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (key: string) => {
    if (activeField === 'pin') {
      setPin(prev => prev + key);
    } else {
      setConfirmPin(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    if (activeField === 'pin') {
      setPin(prev => prev.slice(0, -1));
    } else {
      setConfirmPin(prev => prev.slice(0, -1));
    }
  };

  const handleSave = () => {
    if (pin && pin === confirmPin && pin.length > 0) {
      onPinSetup(pin);
    }
  };

  const canSave = pin.length > 0 && pin === confirmPin;

  // Physical keyboard support
  useEffect(() => {
    const handlePhysicalKeyboard = (e: KeyboardEvent) => {
      // Prevent default for backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
        return;
      }

      // Handle Tab to switch between fields
      if (e.key === 'Tab') {
        e.preventDefault();
        setActiveField(prev => prev === 'pin' ? 'confirm' : 'pin');
        return;
      }

      // Handle Enter to save
      if (e.key === 'Enter') {
        e.preventDefault();
        if (canSave) {
          handleSave();
        }
        return;
      }

      // Handle alphanumeric keys
      const key = e.key.toLowerCase();
      if (/^[a-z0-9]$/.test(key)) {
        e.preventDefault();
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, [pin, confirmPin, activeField, canSave]);

  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const qwertyRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const qwertyRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const qwertyRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Auth Screen */}
        <div className="absolute h-[437px] left-[-18px] top-[-10px] w-[924px]" data-name="AuthScreen">
        {/* PIN Input Container */}
        <div className="absolute h-[64.031px] left-[14.66px] top-[134.06px] w-[490.906px]" data-name="Container2">
          {/* PIN Input */}
          <div 
            className="absolute bg-white h-[37.344px] left-[375.34px] rounded-[10px] top-[-61.05px] w-[266.797px] cursor-text" 
            data-name="LoginScreen"
            onClick={() => {
              setActiveField('pin');
              pinInputRef.current?.focus();
            }}
          >
            <div className="absolute content-stretch flex flex-col h-[37.344px] items-start left-0 rounded-[10px] top-0 w-[266.797px]" data-name="Container4">
              <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className={`absolute border-2 ${activeField === 'pin' ? 'border-[#155dfc]' : 'border-[#d1d5dc]'} border-solid inset-0 pointer-events-none rounded-[10px]`} />
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <div className="relative flex items-center justify-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 pointer-events-none absolute">
                      {'•'.repeat(pin.length)}
                    </p>
                    <input
                      ref={pinInputRef}
                      type="text"
                      value={pin}
                      onChange={() => {}}
                      onFocus={() => setActiveField('pin')}
                      autoFocus={activeField === 'pin'}
                      className="w-full bg-transparent border-none outline-none text-center"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* PIN Label */}
          <div className="absolute h-[24px] left-[439.86px] top-[-97.06px] w-[136.938px]" data-name="Paragraph1">
            <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Wprowadź kod PIN</p>
          </div>
        </div>

        {/* Confirm PIN Input */}
        <div 
          className="absolute bg-white h-[37.344px] left-[390px] rounded-[10px] top-[177px] w-[266.797px] cursor-text" 
          data-name="LoginScreen1"
          onClick={() => {
            setActiveField('confirm');
            confirmInputRef.current?.focus();
          }}
        >
          <div className="absolute content-stretch flex flex-col h-[37.344px] items-start left-0 rounded-[10px] top-0 w-[266.797px]" data-name="Container4">
            <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className={`absolute border-2 ${activeField === 'confirm' ? 'border-[#155dfc]' : 'border-[#d1d5dc]'} border-solid inset-0 pointer-events-none rounded-[10px]`} />
              <div className="absolute inset-0 flex items-center justify-center px-3">
                <div className="relative flex items-center justify-center w-full">
                  <p className="font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 pointer-events-none absolute">
                    {'•'.repeat(confirmPin.length)}
                  </p>
                  <input
                    ref={confirmInputRef}
                    type="text"
                    value={confirmPin}
                    onChange={() => {}}
                    onFocus={() => setActiveField('confirm')}
                    autoFocus={activeField === 'confirm'}
                    className="w-full bg-transparent border-none outline-none text-center"
                    style={{ color: 'transparent', caretColor: 'black' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm PIN Label */}
        <div className="absolute h-[24px] left-[455px] top-[134px] w-[136.938px]" data-name="Paragraph1">
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Powtórz kod PIN</p>
        </div>

        <div className="absolute h-[24px] left-[438.96px] top-[32.66px] w-[21.359px]" data-name="Paragraph3" />

        {/* Save Button - only visible when PINs match */}
        {canSave && (
          <button 
            onClick={handleSave}
            className="absolute box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[427px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[233px] w-[204px] transition-colors bg-[#155dfc] hover:bg-[#1250e0] cursor-pointer"
            data-name="Button"
          >
            <div className="h-[21px] relative shrink-0 w-[43px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[43px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zapisz</p>
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="absolute h-[24px] left-[618.09px] top-[18px] w-[113.828px]" data-name="Paragraph4" />

      {/* Virtual Keyboard */}
      <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
        {/* Number Row */}
        <div className="absolute h-[47px] left-0 top-0 w-[950px]" data-name="Container6">
          {numberKeys.slice(0, 9).map((num, idx) => (
            <div
              key={num}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[68.5px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${idx * 72.39}px` }}
              onClick={() => handleKeyPress(num)}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[68.5px]">
                <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{num}</p>
                </div>
              </div>
            </div>
          ))}
          {/* 0 key */}
          <div
            className="absolute bg-gray-100 h-[47px] left-[651.52px] rounded-[8px] top-0 w-[68.5px] cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => handleKeyPress('0')}
          >
            <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="absolute h-[47px] left-0 top-0 w-[68.5px]">
              <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">0</p>
              </div>
            </div>
          </div>
          {/* Backspace key */}
          <div
            className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px] cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={handleBackspace}
          >
            <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[217px]">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="absolute h-[47px] left-0 top-0 w-[217px]">
              <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
              </div>
            </div>
          </div>
        </div>

        {/* QWERTY Row 1 */}
        <div className="absolute h-[47px] left-0 top-[50px] w-[950px]" data-name="Container7">
          {qwertyRow1.map((letter, idx) => (
            <div
              key={letter}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[90.438px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${idx * 95.48}px` }}
              onClick={() => handleKeyPress(letter)}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[90.438px]">
                <div className="absolute h-[20px] left-[41.31px] top-[13.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{letter}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QWERTY Row 2 */}
        <div className="absolute h-[47px] left-0 top-[100px] w-[950px]" data-name="Container10">
          <div className="absolute h-[47px] left-0 top-0 w-[27.344px]" data-name="Container8" />
          {qwertyRow2.map((letter, idx) => (
            <div
              key={letter}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[93.469px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${32.73 + idx * 97.92}px` }}
              onClick={() => handleKeyPress(letter)}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[93.469px]">
                <div className="absolute h-[20px] left-[42.83px] top-[13.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{letter}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute h-[47px] left-[922.47px] top-0 w-[27.344px]" data-name="Container8" />
        </div>

        {/* QWERTY Row 3 */}
        <div className="absolute h-[47px] left-0 top-[150px] w-[950px]" data-name="Container17">
          {/* Shift key */}
          <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]">
            <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="absolute h-[47px] left-0 top-0 w-[128.297px]">
              <div className="absolute h-[20px] left-[51.3px] top-[13.5px] w-[25.688px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
              </div>
            </div>
          </div>
          {qwertyRow3.map((letter, idx) => (
            <div
              key={letter}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[98.313px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${133.8 + idx * 103.81}px` }}
              onClick={() => handleKeyPress(letter)}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[98.313px]">
                <div className="absolute h-[20px] left-[45.64px] top-[13.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{letter}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute h-[47px] left-[860.48px] top-0 w-[89.344px]" data-name="Container12" />
        </div>
      </div>
      </div>
    </div>
  );
}
