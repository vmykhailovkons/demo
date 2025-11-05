function Container() {
  return (
    <div className="absolute bg-red-50 h-[256px] left-[32px] rounded-[14px] top-[127px] w-[894px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[78px] top-[240px]">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[27px] left-[78px] not-italic text-[#fb2c36] text-[96px] text-nowrap top-[240px] whitespace-pre">Nie zeskanowano</p>
    </div>
  );
}

function Paragraph1() {
  return <div className="absolute h-[24px] left-[375px] top-[68px] w-[136.938px]" data-name="Paragraph1" />;
}

function Container1() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container />
      <Group />
      <Paragraph1 />
    </div>
  );
}

function Paragraph4() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-px whitespace-pre">Przerwa</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph2() {
  return <div className="absolute h-[20px] left-[936.5px] top-[12px] w-[54.5px]" data-name="Paragraph" />;
}

function Paragraph3() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph4 />
      <Paragraph />
      <Container2 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

export default function Przerwa() {
  return (
    <div className="relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Przerwa" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container1 />
      <Navbar />
    </div>
  );
}