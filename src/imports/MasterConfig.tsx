import svgPaths from "./svg-bejnt7ydzr";

function Container() {
  return <div className="absolute h-[28px] left-[172px] top-[254px] w-[196.5px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute contents inset-[8.36%_13.19%_8.95%_12.61%]" data-name="Icon">
      <div className="absolute inset-[8.36%_13.19%_8.95%_12.61%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 52">
            <path d={svgPaths.p20594280} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.69377" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.28%_37.87%_37.87%_37.28%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p2f0a7200} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.69377" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[56.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon />
    </div>
  );
}

function ConfigIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[200.67px] size-[56.656px] top-[29.27px]" data-name="ConfigIcon">
      <Icon1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[37.813px] left-[98.64px] top-[101.92px] w-[260.719px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[37.814px] left-[130.5px] not-italic text-[24.309px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Ogólne</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="[grid-area:1_/_1] bg-[#155dfc] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#1250e0] transition-colors"
      data-name="Button"
    >
      <ConfigIcon />
      <Paragraph />
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p27f5ed00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[37.813px] relative shrink-0 w-[298.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.813px] relative w-[298.484px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[37.814px] left-[149px] not-italic text-[24.309px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Kontrola systemu</p>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="[grid-area:1_/_2] bg-[#155dfc] content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#1249d6] transition-colors" 
      data-name="Button"
    >
      <Icon2 />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return <div className="[grid-area:2_/_1] shrink-0" data-name="Container" />;
}

function Container1a() {
  return <div className="[grid-area:2_/_2] shrink-0" data-name="Container" />;
}

function Container2({ onOgolneClick, onKontrolaClick }: { onOgolneClick?: () => void; onKontrolaClick?: () => void }) {
  return (
    <div className="gap-[23px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[361px] relative shrink-0 w-full" data-name="Container">
      <Button onClick={onOgolneClick} />
      <Button1 onClick={onKontrolaClick} />
      <Container1 />
      <Container1a />
    </div>
  );
}

function Container3({ onOgolneClick, onKontrolaClick }: { onOgolneClick?: () => void; onKontrolaClick?: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-0 pb-0 pt-[27px] px-[27px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[993px]" data-name="Container">
      <Container2 onOgolneClick={onOgolneClick} onKontrolaClick={onKontrolaClick} />
    </div>
  );
}

function Container4({ onOgolneClick, onKontrolaClick }: { onOgolneClick?: () => void; onKontrolaClick?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container />
      <Container3 onOgolneClick={onOgolneClick} onKontrolaClick={onKontrolaClick} />
    </div>
  );
}

export default function MasterConfig({ onOgolneClick, onKontrolaClick }: { onOgolneClick?: () => void; onKontrolaClick?: () => void }) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="MasterConfig">
      <Container4 onOgolneClick={onOgolneClick} onKontrolaClick={onKontrolaClick} />
    </div>
  );
}
