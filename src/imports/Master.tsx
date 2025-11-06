import svgPaths from "./svg-qw41ngjjiz";

function Container() {
  return <div className="absolute h-[28px] left-[172px] top-[254px] w-[196.5px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute contents inset-[8.36%_13.19%_8.95%_12.61%]" data-name="Icon">
      <div className="absolute inset-[8.36%_13.19%_8.95%_12.61%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 52">
            <path d={svgPaths.p20594280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.69377" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.28%_37.87%_37.87%_37.28%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p2f0a7200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.69377" />
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

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[23px] top-[21px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1250e0] transition-colors" 
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Konfiguracja urządzenia</p>
      </div>
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p8cc7f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p1188c080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p13458d00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p77b1b80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[56px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[344px] top-[21px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1249d6] transition-colors"
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Zarządzanie użytkownikami</p>
      </div>
    </button>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p388e8780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p286f8f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p1ee680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p37ff5a00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d="M28 28V18.6667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[56px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[665px] top-[21px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1249d6] transition-colors" 
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[49px]">Sieć</p>
      </div>
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[55.188px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p3cb32a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.59896" />
          <path d={svgPaths.p35235700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.59896" />
          <path d="M22.9954 20.6953H18.3964" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.59896" />
          <path d="M36.7922 29.8935H18.3964" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.59896" />
          <path d="M36.7922 39.0909H18.3964" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.59896" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[56px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[23px] top-[199px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1250e0] transition-colors" 
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[49px]">Zdarzenia</p>
      </div>
    </button>
  );
}

function Container4() {
  return <div className="[grid-area:3_/_1] shrink-0" data-name="Container" />;
}

function Container5({ onConfigClick, onUsersClick, onNetworkClick, onZdarzeniaClick }: { onConfigClick?: () => void; onUsersClick?: () => void; onNetworkClick?: () => void; onZdarzeniaClick?: () => void }) {
  return (
    <div className="relative h-[508px] w-full" data-name="Container">
      <Button onClick={onConfigClick} />
      <Button1 onClick={onUsersClick} />
      <Button2 onClick={onNetworkClick} />
      <Button3 onClick={onZdarzeniaClick} />
    </div>
  );
}

function Container6({ onConfigClick, onUsersClick, onNetworkClick, onZdarzeniaClick }: { onConfigClick?: () => void; onUsersClick?: () => void; onNetworkClick?: () => void; onZdarzeniaClick?: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[993px]" data-name="Container">
      <Container5 onConfigClick={onConfigClick} onUsersClick={onUsersClick} onNetworkClick={onNetworkClick} onZdarzeniaClick={onZdarzeniaClick} />
    </div>
  );
}

function Container7({ onConfigClick, onUsersClick, onNetworkClick, onZdarzeniaClick }: { onConfigClick?: () => void; onUsersClick?: () => void; onNetworkClick?: () => void; onZdarzeniaClick?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container />
      <Container6 onConfigClick={onConfigClick} onUsersClick={onUsersClick} onNetworkClick={onNetworkClick} onZdarzeniaClick={onZdarzeniaClick} />
    </div>
  );
}

export default function Master({ onConfigClick, onUsersClick, onNetworkClick, onZdarzeniaClick }: { onConfigClick?: () => void; onUsersClick?: () => void; onNetworkClick?: () => void; onZdarzeniaClick?: () => void }) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Master">
      <Container7 onConfigClick={onConfigClick} onUsersClick={onUsersClick} onNetworkClick={onNetworkClick} onZdarzeniaClick={onZdarzeniaClick} />
    </div>
  );
}