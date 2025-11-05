function Frame({ onQrScan }: { onQrScan?: () => void }) {
  return (
    <div 
      onClick={onQrScan}
      className="h-[208px] relative shrink-0 w-[865px] cursor-pointer" 
      data-name="Frame"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[36px] leading-[24px] left-[405px] not-italic text-[#2b7fff] text-[96px] text-center top-[86px] translate-x-[-50%] w-[778px]">Zeskanuj kod QR</p>
      </div>
    </div>
  );
}

function Container({ onQrScan }: { onQrScan?: () => void }) {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[298px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[20px] w-[920px] hover:bg-blue-100 transition-colors" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame onQrScan={onQrScan} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[107.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[107.391px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Pomiń</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[37px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[436px] w-[920px] hover:bg-[#1248d6] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <Paragraph />
    </button>
  );
}

function Container11({ onSkip, onQrScan }: { onSkip?: () => void; onQrScan?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container onQrScan={onQrScan} />
      <Button onClick={onSkip} />
    </div>
  );
}

export default function SkanowanieQr({ onSkip, onQrScan }: { onSkip?: () => void; onQrScan?: () => void }) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="AddDrumAnimation">
      <Container11 onSkip={onSkip} onQrScan={onQrScan} />
    </div>
  );
}
