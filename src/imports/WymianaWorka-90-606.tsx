function Paragraph() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.047px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] w-[75.047px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#1e2939] box-border content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1024px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-green-50 h-[355px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[355px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <div className="flex flex-col font-['Arial:Regular',sans-serif] h-[265px] justify-center leading-[27px] not-italic relative shrink-0 text-[96px] text-center text-green-500 w-full">
            <p className="mb-0">Drukarka działa</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p>{` poprawnie`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-[16px] pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function WymianaWorka() {
  return (
    <div className="relative size-full" data-name="Wymiana worka">
      <Container />
      <Container2 />
    </div>
  );
}