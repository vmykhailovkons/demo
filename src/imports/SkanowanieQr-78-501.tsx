function Container() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col h-[355px] items-start left-[50px] pb-[4px] pt-[36px] px-[36px] rounded-[14px] top-[76px] w-[894px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#fb2c36] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#fb2c36] text-[96px] text-center top-[149px] translate-x-[-50%] w-[894px]">Nie zeskanowano</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container />
    </div>
  );
}

function Paragraph43() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Container16() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph43 />
      <Container16 />
      <Paragraph />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container11 />
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