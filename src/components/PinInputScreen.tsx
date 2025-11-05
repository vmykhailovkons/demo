import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PinInputScreenProps {
  onPinEnter?: (pin: string) => void;
  onBack?: () => void;
}

export default function PinInputScreen({ onPinEnter, onBack }: PinInputScreenProps) {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const handleKeyPress = (key: string) => {
    const newPin = pin + key;
    setPin(newPin);
    // Auto-check PIN on every key press
    onPinEnter?.(newPin);
  };

  const handleBackspace = () => {
    const newPin = pin.slice(0, -1);
    setPin(newPin);
  };

  // Physical keyboard support
  useEffect(() => {
    const handlePhysicalKeyboard = (e: KeyboardEvent) => {
      // Prevent default for backspace to avoid navigation
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
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
  }, [pin]); // Re-attach listener when pin changes

  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const qwertyRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const qwertyRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const qwertyRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Auth Screen */}
        <div className="absolute h-[436.875px] left-[44px] top-[-60px] w-[533.594px]" data-name="AuthScreen">
        {/* Container2 - PIN input area */}
        <div className="absolute h-[64.031px] left-[14.66px] top-[134.06px] w-[490.906px]" data-name="Container2">
          {/* PIN Input Field */}
          <div className="absolute bg-white h-[37.344px] left-[294.97px] rounded-[10px] top-[56.59px] w-[266.797px]" data-name="LoginScreen">
            <div className="absolute content-stretch flex flex-col h-[37.344px] items-start left-0 rounded-[10px] top-0 w-[266.797px]" data-name="Container4">
              <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
                {/* Display PIN with system cursor */}
                <div className="absolute inset-0 flex items-center px-3">
                  <div className="relative flex items-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
                      {showPin ? pin : '•'.repeat(pin.length)}
                    </p>
                    <input
                      type="text"
                      value={pin}
                      onChange={() => {}}
                      autoFocus
                      className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] text-[14px]"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
                {/* Show/Hide Button */}
                {pin.length > 0 && (
                  <button
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
                    type="button"
                  >
                    {showPin ? (
                      <EyeOff className="size-4 text-gray-500" />
                    ) : (
                      <Eye className="size-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="absolute h-[24px] left-[359.48px] top-[20.58px] w-[136.938px]" data-name="Paragraph1">
            <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Wprowadź kod PIN</p>
          </div>
        </div>

        <div className="absolute h-[24px] left-[438.96px] top-[32.66px] w-[21.359px]" data-name="Paragraph3" />
      </div>

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
