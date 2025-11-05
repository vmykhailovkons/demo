import svgPaths from "./svg-pgez0osv3x";

function Container() {
  return (
    <div className="absolute h-[319px] left-0 rounded-[14px] top-0 w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[180px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-13.64%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 105">
            <path d={svgPaths.p29e74800} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SuccessIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80.63px] size-[180px] top-[122px]" data-name="SuccessIcon">
      <Icon />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]" data-name="Paragraph1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68.5px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Koperta została przyjenta</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]" data-name="Container">
      <SuccessIcon />
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-green-50 h-[319px] left-[297px] rounded-[14px] top-[111px] w-[400px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container2 />
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[24px] left-[734px] top-[157px] w-[21.359px]" data-name="Paragraph3" />;
}

function Paragraph5() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-px whitespace-pre">Deponowanie</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph2() {
  return <div className="absolute h-[20px] left-[936.5px] top-[12px] w-[54.5px]" data-name="Paragraph" />;
}

function Paragraph4() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph5 />
      <Paragraph />
      <Container4 />
      <Paragraph2 />
      <Paragraph4 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container3 />
      <Paragraph3 />
      <Navbar />
    </div>
  );
}

export default function KopertaZostalaPrzyjeta() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Koperta została przyjęta">
      <AddDrumAnimation />
    </div>
  );
}