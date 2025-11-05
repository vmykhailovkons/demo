import { useEffect } from 'react';

interface BarcodeScannedScreenProps {
  barcode: string;
  onTimeout?: () => void;
}

function Frame() {
  return (
    <div className="h-[208px] relative shrink-0 w-[865px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[36px] leading-[24px] left-[405px] not-italic text-[96px] text-center text-green-500 top-[86px] translate-x-[-50%] w-[778px]">Zeskanowano</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex h-[321px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[93px] w-[920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame />
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

export default function BarcodeScannedScreen({ barcode, onTimeout }: BarcodeScannedScreenProps) {
  useEffect(() => {
    if (onTimeout) {
      const timer = setTimeout(() => {
        onTimeout();
      }, 10000); // 10 секунд для відображення "Zeskanowano"
      
      return () => clearTimeout(timer);
    }
  }, [onTimeout]);
  
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="BarcodeScannedScreen">
      <Container11 />
    </div>
  );
}
