import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-p5870pmfvn';

interface CardInputScreenProps {
  onCardSubmit?: (cardCode: string) => void;
}

export default function CardInputScreen({ onCardSubmit }: CardInputScreenProps) {
  const [cardCode, setCardCode] = useState('');
  const [isShiftActive, setIsShiftActive] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === 'shift') {
      setIsShiftActive(!isShiftActive);
      return;
    }
    
    const char = isShiftActive ? key.toUpperCase() : key;
    setCardCode(prev => prev + char);
    if (isShiftActive) {
      setIsShiftActive(false);
    }
  };

  const handleBackspace = () => {
    setCardCode(prev => prev.slice(0, -1));
  };

  const handleSimulateCard = () => {
    if (cardCode.length > 0) {
      onCardSubmit?.(cardCode);
    }
  };

  // Physical keyboard support
  useEffect(() => {
    const handlePhysicalKeyboard = (e: KeyboardEvent) => {
      // Prevent default for backspace and enter
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        handleSimulateCard();
        return;
      }

      // Handle Shift key
      if (e.key === 'Shift') {
        e.preventDefault();
        setIsShiftActive(prev => !prev);
        return;
      }

      // Handle alphanumeric keys
      const key = e.key.toLowerCase();
      if (/^[a-z0-9]$/.test(key)) {
        e.preventDefault();
        const char = e.shiftKey ? key.toUpperCase() : key;
        setCardCode(prev => prev + char);
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, [cardCode, isShiftActive]);

  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const qwertyRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const qwertyRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const qwertyRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* AuthScreen */}
        <div className="absolute h-[436.875px] left-[253px] top-[34px] w-[533.594px]" data-name="AuthScreen">
        {/* Card Simulation Button Container */}
        <div className="absolute bg-slate-50 h-[170px] left-[178px] rounded-[14px] top-[33px] w-[467px]" data-name="Container1">
          <div className="absolute content-stretch flex flex-col h-[92px] items-start left-0 rounded-[14px] top-[-7px] w-[377px]" data-name="Container">
            <div 
              className={`absolute h-[174px] left-0 rounded-[14px] top-[3px] w-[467px] ${cardCode.length > 0 ? 'cursor-pointer hover:bg-slate-100' : 'cursor-not-allowed'} transition-colors`} 
              data-name="Container"
              onClick={handleSimulateCard}
              role="button"
              tabIndex={cardCode.length > 0 ? 0 : -1}
            >
              <div 
                aria-hidden="true" 
                className="absolute border-4 border-solid inset-0 pointer-events-none rounded-[14px] border-[#cad5e2]" 
              />
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[73px] not-italic text-[#45556c] text-[16px] text-nowrap top-[53px] whitespace-pre pointer-events-none">
                Nacisnij żeby symulować przyłożenie karty
              </p>
            </div>
          </div>

          {/* Card Icon */}
          <div className="absolute box-border content-stretch flex flex-col items-start left-[206px] overflow-clip pb-0 pr-[544.391px] size-[53.906px] top-[85px]" data-name="Icon1">
            <div className="h-0 relative shrink-0 w-full" data-name="Icon">
              <div className="absolute content-stretch flex flex-col h-[35.859px] items-start left-[492.73px] top-[290.95px] w-[49.313px]" data-name="Container">
                <div className="h-[35.859px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[6.23%_5.84%_6.59%_4.48%]" data-name="Vector">
                    <div className="absolute inset-[-7.11%_-5.02%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 36">
                        <path d={svgPaths.p70bdb00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.44414" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute content-stretch flex flex-col h-[4.484px] items-start left-[492.73px] top-[302.16px] w-[49.313px]" data-name="Container">
                <div className="h-[4.484px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[44.84%_5.84%_55.16%_4.48%]" data-name="Vector_2">
                    <div className="absolute inset-[-2.11px_-4.77%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 5">
                        <path d="M2.1085 2.1085H46.3298" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.217" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute h-[24px] left-[132.64px] top-[-1.33px] w-[141.375px]" data-name="Paragraph" />

        {/* Title */}
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[-107px] not-italic text-[#45556c] text-[16px] text-nowrap top-[82px] whitespace-pre">
          Wpisz kod karty
        </p>

        <div className="absolute h-[24px] left-[438.96px] top-[32.66px] w-[21.359px]" data-name="Paragraph3" />

        {/* Input Field */}
        <div className="absolute content-stretch flex flex-col h-[37.344px] items-start left-[-183.25px] rounded-[10px] top-[138px] w-[266.797px]" data-name="Container5">
          <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
            {/* Display card code with system cursor */}
            <div className="absolute inset-0 flex items-center px-3">
              <div className="relative flex items-center w-full">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
                  {cardCode || ''}
                </p>
                <input
                  type="text"
                  value={cardCode}
                  onChange={() => {}}
                  autoFocus
                  className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] text-[14px]"
                  style={{ color: 'transparent', caretColor: 'black' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VirtualKeyboard950X */}
      <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
        {/* Row 1 - Numbers */}
        <div className="absolute h-[47px] left-0 top-0 w-[950px]" data-name="Container6">
          {numberKeys.map((num, index) => (
            <button
              key={num}
              type="button"
              onClick={() => handleKeyPress(num)}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[68.5px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: index < 9 ? `${index * 72.39}px` : '651.52px' }}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[68.5px]">
                <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{num}</p>
                </div>
              </div>
            </button>
          ))}
          {/* Backspace */}
          <button
            type="button"
            onClick={handleBackspace}
            className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px] cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[217px]">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="absolute h-[47px] left-0 top-0 w-[217px]">
              <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
              </div>
            </div>
          </button>
        </div>

        {/* Row 2 - QWERTYUIOP */}
        <div className="absolute h-[47px] left-0 top-[50px] w-[950px]" data-name="Container7">
          {qwertyRow1.map((letter, index) => (
            <button
              key={letter}
              type="button"
              onClick={() => handleKeyPress(letter)}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[90.438px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${index * 95.48}px` }}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[90.438px]">
                <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Row 3 - ASDFGHJKL */}
        <div className="absolute h-[47px] left-0 top-[100px] w-[950px]" data-name="Container10">
          <div className="absolute h-[47px] left-0 top-0 w-[27.344px]" data-name="Container8" />
          {qwertyRow2.map((letter, index) => (
            <button
              key={letter}
              type="button"
              onClick={() => handleKeyPress(letter)}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[93.469px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${32.73 + index * 97.92}px` }}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[93.469px]">
                <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </div>
            </button>
          ))}
          <div className="absolute h-[47px] left-[922.47px] top-0 w-[27.344px]" data-name="Container8" />
        </div>

        {/* Row 4 - Shift + ZXCVBNM */}
        <div className="absolute h-[47px] left-0 top-[150px] w-[950px]" data-name="Container17">
          {/* Shift Button */}
          <button
            type="button"
            onClick={() => handleKeyPress('shift')}
            className={`absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px] cursor-pointer transition-colors ${
              isShiftActive ? 'bg-blue-200' : 'bg-gray-100'
            } hover:bg-blue-100`}
          >
            <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]">
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="absolute h-[47px] left-0 top-0 w-[128.297px]">
              <div className="absolute h-[20px] left-[51.3px] top-[13.5px] w-[25.688px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
              </div>
            </div>
          </button>
          {qwertyRow3.map((letter, index) => (
            <button
              key={letter}
              type="button"
              onClick={() => handleKeyPress(letter)}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[98.313px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${133.8 + index * 103.81}px` }}
            >
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[98.313px]">
                <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </div>
            </button>
          ))}
          <div className="absolute h-[47px] left-[860.48px] top-0 w-[89.344px]" data-name="Container12" />
        </div>
      </div>
      </div>
    </div>
  );
}