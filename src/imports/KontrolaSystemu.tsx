import svgPaths from "./svg-5zc61mx3lj";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Wróć</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[rgba(255,255,255,0.1)] h-[37px] relative rounded-[8px] shrink-0 w-[92.422px] cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors" 
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center px-[16px] py-0 relative w-[92.422px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p14ca9100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Wyloguj</p>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[rgba(251,44,54,0.9)] h-[37px] relative rounded-[8px] shrink-0 w-[109.672px] cursor-pointer hover:bg-[rgba(251,44,54,1)] transition-colors" 
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center px-[16px] py-0 relative w-[109.672px]">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container({ onBack, onLogout }: { onBack?: () => void; onLogout?: () => void }) {
  return (
    <div className="absolute bg-[#1e2939] box-border content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1024px]" data-name="Container">
      <Button onClick={onBack} />
      <Button1 onClick={onLogout} />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[28px] left-[172px] top-[254px] w-[196.5px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[37.813px] left-[98.64px] top-[101.92px] w-[260.719px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[118.36px] not-italic text-[20px] text-center text-nowrap text-white top-[8.08px] translate-x-[-50%] whitespace-pre">Restart aplikacji</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
            <path d={svgPaths.p1d9c1c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d="M18.5 3.08333V18.5H3.08333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function RestartIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[179px] size-[74px] top-[28px]" data-name="RestartIcon">
      <Icon3 />
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="[grid-area:1_/_1] bg-[#155dfc] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#1249d6] transition-colors" 
      data-name="Button"
    >
      <Paragraph />
      <RestartIcon />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
            <path d={svgPaths.p1d9c1c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d="M18.5 3.08333V18.5H3.08333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function RestartIcon1() {
  return (
    <div className="relative shrink-0 size-[74px]" data-name="RestartIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[74px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[37.813px] relative shrink-0 w-[298.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.813px] relative w-[298.484px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[149px] not-italic text-[20px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Restart urządzenia</p>
      </div>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="[grid-area:1_/_2] bg-[#155dfc] content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#1249d6] transition-colors" 
      data-name="Button"
    >
      <RestartIcon1 />
      <Paragraph1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute contents inset-[8.34%_12.35%_8.49%_12.65%]" data-name="Icon">
      <div className="absolute bottom-[50%] left-1/2 right-1/2 top-[8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-3.08px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 37">
            <path d="M3.08333 3.08333V33.9167" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16666" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.5%_12.35%_8.49%_12.65%]" data-name="Vector">
        <div className="absolute inset-[-6.51%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 54">
            <path d={svgPaths.p2d462c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.16666" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function PowerOffIcon() {
  return (
    <div className="relative shrink-0 size-[74px]" data-name="PowerOffIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[74px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[37.813px] relative shrink-0 w-[47.281px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.813px] relative w-[47.281px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[24px] not-italic text-[20px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Wyłącz urządzenie</p>
      </div>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="[grid-area:2_/_1] bg-[#155dfc] content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#1249d6] transition-colors" 
      data-name="Button"
    >
      <PowerOffIcon />
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return <div className="[grid-area:2_/_2] shrink-0" data-name="Container" />;
}

function Container3({ onRestartApp, onRestartDevice, onPowerOff }: { onRestartApp?: () => void; onRestartDevice?: () => void; onPowerOff?: () => void }) {
  return (
    <div className="gap-[23px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[361px] relative shrink-0 w-full" data-name="Container">
      <Button2 onClick={onRestartApp} />
      <Button3 onClick={onRestartDevice} />
      <Button4 onClick={onPowerOff} />
      <Container2 />
    </div>
  );
}

function Container4({ onRestartApp, onRestartDevice, onPowerOff }: { onRestartApp?: () => void; onRestartDevice?: () => void; onPowerOff?: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-0 pb-0 pt-[27px] px-[27px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[993px]" data-name="Container">
      <Container3 onRestartApp={onRestartApp} onRestartDevice={onRestartDevice} onPowerOff={onPowerOff} />
    </div>
  );
}

function Container5({ onRestartApp, onRestartDevice, onPowerOff }: { onRestartApp?: () => void; onRestartDevice?: () => void; onPowerOff?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container1 />
      <Container4 onRestartApp={onRestartApp} onRestartDevice={onRestartDevice} onPowerOff={onPowerOff} />
    </div>
  );
}

export default function KontrolaSystemu() {
  const handleRestartApp = () => {
    alert('Restart aplikacji zostanie wykonany...');
    // Tут можна додати логіку перезапуску додатку
  };

  const handleRestartDevice = () => {
    alert('Restart urządzenia zostanie wykonany...');
    // Тут можна додати логіку перезапуску пристрою
  };

  const handlePowerOff = () => {
    if (confirm('Czy na pewno chcesz wyłączyć urządzenie?')) {
      alert('Urządzenie zostanie wyłączone...');
      // Тут можна додати логіку вимкнення пристрою
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Kontrola systemu">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <div className="absolute box-border content-stretch flex flex-col h-[508px] items-start left-0 pb-0 pt-[27px] px-[27px] top-0 w-[993px]">
          <Container3 onRestartApp={handleRestartApp} onRestartDevice={handleRestartDevice} onPowerOff={handlePowerOff} />
        </div>
      </div>
    </div>
  );
}