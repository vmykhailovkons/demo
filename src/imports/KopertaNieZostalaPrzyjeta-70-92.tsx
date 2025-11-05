function Container() {
  return (
    <div className="absolute h-[319px] left-0 rounded-[14px] top-0 w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]" data-name="Paragraph1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68.5px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Błędny kod kreskowy</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[106.63px] size-[128px] top-[148.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="Icon">
          <path d="M96 32L32 96" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
          <path d="M32 32L96 96" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
          <path d="M32 32L96 96" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="21.3333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]" data-name="Container">
      <Paragraph1 />
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-red-50 h-[319px] left-[297px] rounded-[14px] top-[62px] w-[400px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container2 />
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[24px] left-[734px] top-[157px] w-[21.359px]" data-name="Paragraph3" />;
}

function Paragraph43() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-px whitespace-pre">Skanowanie QR</p>
    </div>
  );
}

function Container16() {
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
      <Paragraph43 />
      <Paragraph />
      <Container16 />
      <Paragraph2 />
      <Paragraph4 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container11 />
      <Paragraph3 />
      <Navbar />
    </div>
  );
}

export default function KopertaNieZostalaPrzyjeta() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Koperta nie została przyjęta">
      <AddDrumAnimation />
    </div>
  );
}