function Paragraph1() {
  return <div className="absolute h-[24px] left-[95.63px] top-[155.5px] w-[136.938px]" data-name="Paragraph1" />;
}

function Frame() {
  return (
    <div className="h-[208px] relative shrink-0 w-[865px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
        <Paragraph1 />
        <div className="absolute font-['Arial:Regular',sans-serif] h-[36px] leading-[24px] left-[429px] not-italic text-[96px] text-center text-green-500 top-[50.5px] translate-x-[-50%] w-[909px]">
          <p className="mb-0">Koperta została</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>przyjenta</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex h-[321px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[93px] w-[920px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container />
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph() {
  return <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph" />;
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
      <Paragraph />
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