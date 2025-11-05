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

function Paragraph() {
  return (
    <div className="absolute h-[37.813px] left-[98.64px] top-[101.92px] w-[260.719px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[37.814px] left-[130.5px] not-italic text-[24.309px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Ogólne</p>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:1_/_1] bg-[#155dfc] relative rounded-[10px] shrink-0" data-name="Button">
      <ConfigIcon />
      <Paragraph />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p27f5ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
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

function Button1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#155dfc] content-stretch flex flex-col gap-[16px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Button">
      <Icon2 />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return <div className="[grid-area:2_/_2] shrink-0" data-name="Container" />;
}

function Container2() {
  return (
    <div className="gap-[23px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[361px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-0 pb-0 pt-[27px] px-[27px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[993px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container />
      <Container3 />
    </div>
  );
}

function Paragraph2() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Container5() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Icon3() {
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

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] h-[37px] items-center left-[16px] px-[16px] py-0 rounded-[8px] top-[14px] w-[92.422px]" data-name="Button">
      <Icon3 />
      <Text />
    </div>
  );
}

function Icon4() {
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

function Button3() {
  return (
    <div className="absolute bg-[rgba(251,44,54,0.9)] box-border content-stretch flex gap-[8px] h-[37px] items-center left-[899px] px-[16px] py-0 rounded-[8px] top-[14px] w-[109.672px]" data-name="Button">
      <Icon4 />
      <Text1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph2 />
      <Container5 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container4 />
      <Navbar />
    </div>
  );
}

export default function Master() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Master">
      <AddDrumAnimation />
    </div>
  );
}