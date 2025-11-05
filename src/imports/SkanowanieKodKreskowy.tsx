import { useState, useRef, useEffect, useCallback } from 'react';
import { VirtualKeyboard950 } from '../components/VirtualKeyboard950';

function Container() {
  return (
    <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5({ value, onFocus }: { value?: string; onFocus?: () => void }) {
  return (
    <div onClick={onFocus} className="absolute content-stretch flex flex-col h-[37px] items-start left-0 rounded-[10px] top-0 w-[916px] cursor-text" data-name="Container5">
      <Container />
      <div className="absolute inset-0 flex items-center px-[12px] pointer-events-none">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px]" style={{ color: value ? '#101828' : '#99a1af' }}>
          {value || ''}
        </p>
      </div>
    </div>
  );
}

function LoginScreen1({ value, onFocus }: { value?: string; onFocus?: () => void }) {
  return (
    <div className="absolute bg-white h-[37px] left-[-25px] rounded-[10px] top-[184px] w-[916px]" data-name="LoginScreen1">
      <Container5 value={value} onFocus={onFocus} />
    </div>
  );
}

function Frame({ value, onFocus }: { value?: string; onFocus?: () => void }) {
  return (
    <div className="absolute h-[123px] left-[27px] top-0 w-[865px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[123px] relative w-[865px]">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[27px] leading-[24px] left-[433px] not-italic text-[#2b7fff] text-[60px] text-center top-[45px] translate-x-[-50%] w-[916px]">Zeskanuj lub wpisz kod kreskowy</p>
        <LoginScreen1 value={value} onFocus={onFocus} />
      </div>
    </div>
  );
}

function Container1({ value, onFocus, onClick }: { value?: string; onFocus?: () => void; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="absolute bg-blue-50 box-border content-stretch flex h-[128px] items-center justify-center left-[39px] p-[4px] rounded-[14px] top-[24px] w-[920px] cursor-pointer hover:bg-blue-100 transition-colors" 
      data-name="Container"
    >
      <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame value={value} onFocus={onFocus} />
    </div>
  );
}

function Container11({ barcode, onKeyPress, onBackspace, isFocused, setIsFocused, onBlueBoxClick }: { 
  barcode?: string; 
  onKeyPress?: (key: string) => void;
  onBackspace?: () => void;
  isFocused?: boolean;
  setIsFocused?: (focused: boolean) => void;
  onBlueBoxClick?: () => void;
}) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container1 
        value={barcode} 
        onFocus={() => setIsFocused?.(true)}
        onClick={onBlueBoxClick}
      />
      <div className="absolute h-[200px] left-[22px] top-[280px] w-[950px]">
        <VirtualKeyboard950
          onKeyPress={onKeyPress || (() => {})}
          onBackspace={onBackspace || (() => {})}
        />
      </div>
    </div>
  );
}

export default function SkanowanieKodKreskowy({ 
  onBarcodeChange, 
  onBarcodeComplete 
}: { 
  onBarcodeChange?: (code: string) => void; 
  onBarcodeComplete?: () => void;
}) {
  const [barcode, setBarcode] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && barcode.length >= 5) {
        onBarcodeComplete?.();
      } else if (e.key === 'Backspace') {
        const newValue = barcode.slice(0, -1);
        setBarcode(newValue);
        onBarcodeChange?.(newValue);
      } else if (e.key.length === 1) {
        const newValue = barcode + e.key;
        setBarcode(newValue);
        onBarcodeChange?.(newValue);
      }
    };

    if (isFocused) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [barcode, isFocused, onBarcodeChange, onBarcodeComplete]);

  const handleKeyPress = useCallback((key: string) => {
    const newValue = barcode + key;
    setBarcode(newValue);
    onBarcodeChange?.(newValue);
  }, [barcode, onBarcodeChange]);

  const handleBackspace = useCallback(() => {
    const newValue = barcode.slice(0, -1);
    setBarcode(newValue);
    onBarcodeChange?.(newValue);
  }, [barcode, onBarcodeChange]);

  const handleBlueBoxClick = useCallback(() => {
    // Симулюємо сканування - встановлюємо тестовий код
    const testBarcode = 'TEST123456';
    setBarcode(testBarcode);
    onBarcodeChange?.(testBarcode);
    // Викликаємо onBarcodeComplete для переходу на наступний екран
    onBarcodeComplete?.();
  }, [onBarcodeChange, onBarcodeComplete]);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="SkanowanieKodKreskowy">
      <input
        ref={inputRef}
        type="text"
        value={barcode}
        onChange={() => {}}
        className="absolute opacity-0 pointer-events-none"
        autoFocus
      />
      <Container11 
        barcode={barcode}
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        onBlueBoxClick={handleBlueBoxClick}
      />
    </div>
  );
}
