import svgPaths from "./svg-oudj9i2ffx";

function Icon() {
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

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[37px] relative rounded-[8px] shrink-0 w-[92.422px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center px-[16px] py-0 relative w-[92.422px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="bg-[rgba(251,44,54,0.9)] h-[37px] relative rounded-[8px] shrink-0 w-[109.672px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center px-[16px] py-0 relative w-[109.672px]">
        <Icon1 />
        <Text1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#1e2939] box-border content-stretch flex h-[64px] items-center justify-between left-0 px-[16px] py-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1024px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[18px] top-[18px] w-[22.573px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Typ</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[46px] w-[428.5px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-[-0.33px] whitespace-pre">Wpłata</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-blue-50 grow h-[92px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[92px] relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.698px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[39.698px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-green-500 text-nowrap top-[-0.33px] whitespace-pre">Zsynchronizowano</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-green-50 grow h-[92px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start pb-[2px] pt-[18px] px-[18px] relative w-full">
          <Container2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[92px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[92px] items-start relative w-[945px]">
        <Container1 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p5c2b472} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3a61f900} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2736b400} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30587140} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M28 28V28.0133" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pa403690} id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 16H4.01333" id="Vector_7" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 4H16.0133" id="Vector_8" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 21.3333V21.3467" id="Vector_9" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 16H22.6667" id="Vector_10" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M28 16V16.0133" id="Vector_11" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 28V26.6667" id="Vector_12" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[118.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[118.719px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Dane z QR</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[945px]">
        <Icon2 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa lokalizacji klienta:</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Lokalizacja klienta S.A., ul.Piastowska 1, 00-999 Warszawa</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Numer bezpiecznej koperty/opakowanie pakietu</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">346720210531082005</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa odbiorcy klienta</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa Klienta S.A., ul. Piastowska 2, 02-999 Warszawa</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Kod likalizacji klienta</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">K43438998</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Rachunek odbiorcy</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">PL 1234 5678 9012 3456 7890 1234</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Imię i nazwisko wpłacającego</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Jan Testowy</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Struktura nominałowa:</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 500</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 200</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 100</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 50</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 20</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 10</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 5</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 2</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 1</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.5</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.2</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.1</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.05</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.02</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.01</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[464.5px]">
        <Paragraph18 />
        <Paragraph19 />
        <Paragraph20 />
        <Paragraph21 />
        <Paragraph22 />
        <Paragraph23 />
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
        <Paragraph30 />
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph17 />
      <Container15 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Data realizacji wpłaty</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2021-05-31 14:23:15</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
        <Paragraph33 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Kwota wpłaty</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">1 777,76</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[48px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
        <Paragraph35 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Waluta</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">PLN</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Tytułem</p>
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">WPŁATA/K01/20210531/K257</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
        <Paragraph39 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">ID BDW</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">346720210531082006</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[331px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[331px] relative w-[945px]">
        <Container16 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gray-200 h-px relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-[945px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p23bb4660} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2fc7d580} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p76546be} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p101a6580} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[36px] relative shrink-0 w-[200.125px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[200.125px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Dane z urządzenia</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[36px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[945px]">
        <Icon3 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Numer użytej karty</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">1234</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Id trezora</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">123</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Data, godzina wpłaty</p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[24px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2021-05-31 14:23:15</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph48 />
      <Paragraph49 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[400px]">Numer bezpiecznej koperty wprowadzony przez wpłacającego w trezorze/zeskanowanego z koperty (kod kreskowy)</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">87654321</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph50 />
      <Paragraph51 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">ID transakcji</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">1234567890</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[4px] h-[64px] items-start relative self-start shrink-0" data-name="Container">
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[197px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[44px_64px_minmax(0px,_1fr)] h-[197px] relative w-[945px]">
        <Container26 />
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[466px] items-start left-[24px] overflow-x-clip overflow-y-auto top-[18px] w-[945px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container8 />
      <Container11 />
      <Container14 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] overflow-clip rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[79px] w-[993px]" data-name="Container">
      <Container32 />
    </div>
  );
}

export default function Depozyt() {
  return (
    <div className="relative size-full" data-name="Depozyt">
      <Container />
      <Container33 />
    </div>
  );
}