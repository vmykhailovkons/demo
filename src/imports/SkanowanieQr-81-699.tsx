function Paragraph1() {
  return <div className="absolute h-[24px] left-[95.63px] top-[155.5px] w-[136.938px]" data-name="Paragraph1" />;
}

function Frame() {
  return (
    <div className="h-[208px] relative shrink-0 w-[865px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
        <Paragraph1 />
        <div className="absolute font-['Arial:Regular',sans-serif] h-[110px] leading-[24px] left-[429.5px] not-italic text-[#fb2c36] text-[96px] text-center top-[25px] translate-x-[-50%] w-[778px]">
          <p className="mb-0">Koperta nie</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>została przyjęta</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex h-[298px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[20px] w-[920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[53px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[53px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zakończ</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[32px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[434px] w-[925px]" data-name="Button">
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container />
      <Button />
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Container2() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph2() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph3 />
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container1 />
      <Navbar />
    </div>
  );
}

export default function SkanowanieQr() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Skanowanie QR">
      <AddDrumAnimation />
    </div>
  );
}