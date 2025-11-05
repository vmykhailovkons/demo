import svgPaths from "./svg-6t50hm6oj5";

function UnloadingStartScreen() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[23px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px]" data-name="UnloadingStartScreen">
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Rozładuj</p>
      </div>
    </div>
  );
}

function UnloadingStartScreen1() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[344px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px]" data-name="UnloadingStartScreen">
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Załaduj worek</p>
      </div>
    </div>
  );
}

function UnloadingStartScreen2() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex flex-col gap-[16px] h-[155px] items-start left-[665px] pb-[2px] pt-[26px] px-[26px] rounded-[10px] top-[21px] w-[307px]" data-name="UnloadingStartScreen">
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-[153.5px] not-italic text-[32px] text-center text-white top-[77.5px] translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Wymień papier</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <UnloadingStartScreen />
      <UnloadingStartScreen1 />
      <UnloadingStartScreen2 />
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Container1() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph />
      <Container1 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container />
      <Navbar />
    </div>
  );
}

function Icon() {
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

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Wyloguj</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.9)] box-border content-stretch flex gap-[8px] h-[37px] items-center left-[902px] px-[16px] py-0 rounded-[8px] top-[11px] w-[109.672px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

export default function Kurier() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Kurier">
      <AddDrumAnimation />
      <Button />
    </div>
  );
}