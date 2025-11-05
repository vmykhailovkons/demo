import svgPaths from "./svg-degqvs17j4";

function Paragraph() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.047px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[75.047px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-0 whitespace-pre">Odsilenie</p>
      </div>
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

function Text() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[104.016px]" data-name="Text">
      <ol className="[white-space-collapse:collapse] block font-['Arial:Regular',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[#2b7fff] text-[18px] text-center text-nowrap" start="1">
        <li className="list-inside ms-[27px]">
          <span className="leading-[27px]">Otwórz drzwi</span>
        </li>
      </ol>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[27px] left-[5px] top-0 w-[176px]" data-name="List Item">
      <Text />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[78px] left-[35px] top-[32px] w-[70px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
        <g id="Icon">
          <path d={svgPaths.p20483a80} fill="var(--stroke-0, white)" id="Vector 5" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#d9d9d9] left-[111px] rounded-[3.35544e+07px] size-[17px] top-[62.5px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] rounded-[10px] top-[51px] w-[140px]" data-name="Container">
      <Icon />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <ListItem />
      <Container2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[129.891px]" data-name="Text">
      <ol className="[white-space-collapse:collapse] block font-['Arial:Regular',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[#2b7fff] text-[18px] text-center text-nowrap" start="2">
        <li className="list-inside ms-[27px]">
          <span className="leading-[27px]">Wyciągnij worek</span>
        </li>
      </ol>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[27px] left-[-9.5px] top-0 w-[175px]" data-name="List Item">
      <Text1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#030213] h-[119px] left-[12px] rounded-[10px] top-[11px] w-[115px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-[#9d8364] h-[86px] left-[45px] rounded-[10px] top-[28px] w-[53.5px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="absolute h-[78px] left-[35px] top-[55px] w-[70px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
        <g id="Icon">
          <path d={svgPaths.p2b507180} fill="var(--stroke-0, white)" id="Vector 2" />
          <path d={svgPaths.p2b507180} fill="var(--stroke-0, white)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] overflow-clip rounded-[10px] top-[51px] w-[140px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Icon1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
      <ListItem1 />
      <Container6 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[27px] left-[10.22px] top-0 w-[161.062px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-[81px] not-italic text-[#2b7fff] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">3. Włóż pusty worek</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#030213] h-[119px] left-[12px] rounded-[10px] top-[11px] w-[115px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[#9d8364] h-[86px] left-[45px] rounded-[10px] top-[28px] w-[53.5px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="absolute h-[78px] left-[35px] top-[55px] w-[70px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
        <g clipPath="url(#clip0_9_1107)" id="Icon">
          <path d={svgPaths.p8f0f100} fill="var(--stroke-0, white)" id="Vector 4" />
        </g>
        <defs>
          <clipPath id="clip0_9_1107">
            <rect fill="white" height="78" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] overflow-clip rounded-[10px] top-[51px] w-[140px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Icon2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_3] relative shrink-0" data-name="Container">
      <Paragraph1 />
      <Container10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[110.016px]" data-name="Text">
      <ol className="absolute block font-['Arial:Regular',sans-serif] leading-[0] left-[32.75px] list-decimal not-italic text-[#2b7fff] text-[18px] text-center top-0 translate-x-[-50%] w-[140px]" start="4">
        <li className="list-inside ms-[27px]">
          <span className="leading-[27px]">Zamknij drzwi</span>
        </li>
      </ol>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[27px] left-[25.73px] top-0 w-[130.031px]" data-name="List Item">
      <Text2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[78px] left-[35px] top-[32px] w-[70px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
        <g id="Icon">
          <path d={svgPaths.p26a05f00} fill="var(--stroke-0, white)" id="Vector 6" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#d9d9d9] left-[111px] rounded-[3.35544e+07px] size-[17px] top-[62.5px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] rounded-[10px] top-[51px] w-[140px]" data-name="Container">
      <Icon3 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_4] relative shrink-0" data-name="Container">
      <ListItem2 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[283px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container7 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-blue-50 h-[355px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[355px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-1/2 -translate-x-1/2 pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container">
      <Container16 />
    </div>
  );
}

export default function WymianaWorka() {
  return (
    <div className="relative size-full" data-name="Wymiana worka">
      <Container />
      <Container17 />
    </div>
  );
}