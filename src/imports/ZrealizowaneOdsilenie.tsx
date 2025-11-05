function Checkbox() {
  return (
    <div className="relative shrink-0 size-0" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-[2px] pr-[655px] py-[2px] relative size-[20px]">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[16.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph1() {
  return <div className="absolute h-[21px] left-[52px] top-[4px] w-[271.531px]" data-name="Paragraph" />;
}

function Container1() {
  return (
    <div className="h-[22px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[22px] items-start relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2b7fff] text-[14px] text-nowrap whitespace-pre">Wydruk</p>
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[37.5px] left-[32px] top-0 w-[271.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37.5px] items-center relative w-[271.531px]">
        <Container1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] h-[37.5px] items-center relative shrink-0 w-full" data-name="Label">
      <Container />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[63.5px] items-start left-[32px] pb-px pt-[13px] px-[13px] rounded-[10px] top-[362px] w-[930px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Label />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[7.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[7.234px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-0 whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-slate-100 relative rounded-[3.35544e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[28px]">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[91.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[91.078px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">DEP42840946</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Paragraph3 />
    </div>
  );
}

function DepositItem() {
  return (
    <div className="bg-white h-[60px] relative rounded-[10px] shrink-0 w-[930px]" data-name="DepositItem">
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start pb-[2px] pt-[14px] px-[14px] relative w-[930px]">
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[7.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[7.234px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-slate-100 relative rounded-[3.35544e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[28px]">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[91.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[91.078px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">DEP42840947</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Paragraph5 />
    </div>
  );
}

function DepositItem1() {
  return (
    <div className="bg-white h-[60px] relative rounded-[10px] shrink-0 w-[930px]" data-name="DepositItem">
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start pb-[2px] pt-[14px] px-[14px] relative w-[930px]">
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[7.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[7.234px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-0 whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-slate-100 relative rounded-[3.35544e+07px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[28px]">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[91.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[91.078px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">DEP42840948</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Paragraph7 />
    </div>
  );
}

function DepositItem2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[930px]" data-name="DepositItem">
      <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-[2px] pt-[14px] px-[14px] relative w-[930px]">
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[196px] items-start left-[32px] top-[20px] w-[930px]" data-name="Container">
      <DepositItem />
      <DepositItem1 />
      <DepositItem2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container3 />
      <Container10 />
    </div>
  );
}

function Paragraph12() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph8() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-px whitespace-pre">Zrealizowane odsilenie</p>
    </div>
  );
}

function Container12() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph9() {
  return <div className="absolute h-[20px] left-[936.5px] top-[12px] w-[54.5px]" data-name="Paragraph" />;
}

function Paragraph10() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph12 />
      <Paragraph8 />
      <Container12 />
      <Paragraph9 />
      <Paragraph10 />
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

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[107.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[107.391px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zakończ</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[48px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[523px] w-[930px]" data-name="Button">
      <Paragraph11 />
    </div>
  );
}

export default function ZrealizowaneOdsilenie() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Zrealizowane odsilenie">
      <AddDrumAnimation />
      <Button />
    </div>
  );
}