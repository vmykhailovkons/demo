import { useState } from 'react';
import svgPaths from "./svg-qev8br9fh6";

export default function SkanowanieKodKreskowyScreen({ onBarcodeComplete }: { onBarcodeComplete?: (barcode: string) => void }) {
  const [barcode, setBarcode] = useState('');

  const generateRandomBarcode = () => {
    // Generate 13-digit random barcode
    const randomBarcode = Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
    setBarcode(randomBarcode);
    if (onBarcodeComplete) {
      setTimeout(() => {
        onBarcodeComplete(randomBarcode);
      }, 300);
    }
  };

  const handleKeyPress = (key: string) => {
    const newBarcode = barcode + key;
    setBarcode(newBarcode);
    
    // Автоматичний перехід після введення (можна налаштувати довжину)
    if (newBarcode.length >= 5 && onBarcodeComplete) {
      setTimeout(() => {
        onBarcodeComplete(newBarcode);
      }, 300);
    }
  };

  const handleBackspace = () => {
    setBarcode(barcode.slice(0, -1));
  };

  const KeyButton = ({ letter, left, onClick }: { letter: string; left: string; onClick: () => void }) => (
    <div 
      onClick={onClick}
      className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[68.5px] hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors" 
      style={{ left }}
    >
      <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]">
        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute h-[47px] left-0 top-0 w-[68.5px]">
        <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{letter}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="SkanowanieKodKreskowy">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        
        {/* Синій блок з полем введення */}
        <div 
          onClick={generateRandomBarcode}
          className="absolute bg-blue-50 box-border h-[128px] left-[39px] rounded-[14px] top-[24px] w-[920px] cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
          
          <div className="absolute h-[123px] left-[27px] top-0 w-[865px]">
            <div className="h-[123px] relative w-[865px]">
              <p className="absolute font-['Arial:Regular',sans-serif] h-[27px] leading-[24px] left-[433px] not-italic text-[#2b7fff] text-[60px] text-center top-[45px] translate-x-[-50%] w-[916px]">
                Zeskanuj lub wpisz kod kreskowy
              </p>
              
              {/* Поле введення */}
              <div className="absolute bg-white h-[37px] left-[-25px] rounded-[10px] top-[184px] w-[916px]">
                <div className="absolute content-stretch flex flex-col h-[37px] items-start left-0 rounded-[10px] top-0 w-[916px]">
                  <div className="h-[37px] relative rounded-[10px] shrink-0 w-full flex items-center px-4">
                    <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <p className="relative font-['Arial:Regular',sans-serif] text-[18px] text-neutral-950 tracking-widest">
                      {barcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Віртуальна клавіатура */}
        <div className="absolute h-[200px] left-[22px] top-[280px] w-[950px]">
          {/* Number Row */}
          <div className="absolute h-[47px] left-0 top-0 w-[950px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, idx) => (
              <KeyButton 
                key={num}
                letter={num}
                left={`${idx * 72.39}px`}
                onClick={() => handleKeyPress(num)}
              />
            ))}
            
            {/* Backspace button */}
            <div 
              onClick={handleBackspace}
              className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px] hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors"
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
          <div className="absolute h-[47px] left-0 top-[50px] w-[950px]">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter, idx) => (
              <div 
                key={letter}
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[90.438px] hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors" 
                style={{ left: `${idx * 95.48}px` }}
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
          <div className="absolute h-[47px] left-0 top-[100px] w-[950px]">
            <div className="absolute h-[47px] left-0 top-0 w-[27.344px]" />
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter, idx) => (
              <div 
                key={letter}
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[93.469px] hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors" 
                style={{ left: `${32.73 + idx * 97.92}px` }}
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
            <div className="absolute h-[47px] left-[922.47px] top-0 w-[27.344px]" />
          </div>

          {/* QWERTY Row 3 */}
          <div className="absolute h-[47px] left-0 top-[150px] w-[950px]">
            <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[128.297px] opacity-50 cursor-not-allowed">
              <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]">
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute h-[47px] left-0 top-0 w-[128.297px]">
                <div className="absolute h-[20px] left-[51.3px] top-[13.5px] w-[25.688px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
                </div>
              </div>
            </div>
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter, idx) => (
              <div 
                key={letter}
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] top-0 w-[98.313px] hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-colors" 
                style={{ left: `${133.8 + idx * 103.81}px` }}
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
            <div className="absolute h-[47px] left-[860.48px] top-0 w-[89.344px]" />
          </div>
        </div>
      </div>
    </div>
  );
}