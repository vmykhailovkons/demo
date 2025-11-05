import { useEffect } from 'react';

interface InvalidBarcodeScreenProps {
  onTimeout: () => void;
}

function Container() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[355px] items-start left-[50px] pb-[4px] pt-[36px] px-[36px] rounded-[14px] top-[76px] w-[894px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#fb2c36] text-[96px] text-center top-[149px] translate-x-[-50%] w-[894px]">Nie zeskanowano</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container />
    </div>
  );
}

export function InvalidBarcodeScreen({ onTimeout }: InvalidBarcodeScreenProps) {
  useEffect(() => {
    // Auto-transition after 10 seconds back to barcode scan screen
    const timer = setTimeout(() => {
      onTimeout();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="InvalidBarcodeScreen">
      <Container11 />
    </div>
  );
}
