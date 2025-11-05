import svgPaths from "./svg-dnno0w0mur";

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

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-[786px]" data-name="Container">
      <Icon2 />
      <p className="font-['Arial:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">Zdarzenia</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[15px] h-[36px] items-center px-[2px] py-0 right-[29px] top-[calc(50%-212px)] translate-y-[-50%] w-[940px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[200px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Data</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[40px] left-[200px] top-0 w-[150px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Typ</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[40px] left-[459px] top-[4px] w-[180px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Status</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[40px] left-[811px] top-0 w-[105px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Akcje</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[949px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[14.25px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2025-10-17 14:23:15</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[200px]" data-name="Table Cell">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[3px] w-[37.359px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-0 whitespace-pre">Wpłata</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#155dfc] h-[24px] left-[12px] rounded-[8px] top-[13.75px] w-[61.359px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[200px] top-0 w-[150px]" data-name="Table Cell">
      <Container3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[9px] top-[3px] w-[100.062px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#00a63e] text-[12px] text-nowrap top-0 whitespace-pre">Zsynchronizowano</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[24px] left-[81px] rounded-[8px] top-[13px] w-[118.062px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[350px] top-0 w-[180px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Szczegóły</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gray-200 h-[32px] relative rounded-[8px] shrink-0 w-[111.812px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-px relative w-[111.812px]">
        <Icon3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[134px] top-[9px] w-[395px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[680px] top-0 w-[268px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[14px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2025-10-17 11:30:22</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[200px]" data-name="Table Cell">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[3px] w-[75.391px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-0 whitespace-pre">Rozładowanie</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#155dfc] h-[24px] left-[12px] rounded-[8px] top-[13.5px] w-[99.391px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[200px] top-0 w-[150px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[9px] top-[3px] w-[100.062px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[17px] not-italic text-[#e7000b] text-[12px] text-nowrap top-[0.5px] whitespace-pre">Nie wysłano</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[24px] left-[12px] rounded-[8px] top-[13.5px] w-[118.062px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[417px] top-0 w-[180px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Szczegóły</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gray-200 h-[32px] relative rounded-[8px] shrink-0 w-[111.812px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-px relative w-[111.812px]">
        <Icon4 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[285px] top-[10px] w-[254px]" data-name="Container">
      <Button3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Synchronizuj</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#00a63e] box-border content-stretch flex gap-[6px] h-[32px] items-center left-[152px] px-[12px] py-0 rounded-[8px] top-[9px] w-[126.156px]" data-name="Button">
      <Icon5 />
      <Paragraph8 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[530px] top-0 w-[419px]" data-name="Table Cell">
      <Container8 />
      <Button4 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[14px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2025-10-17 11:29:22</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[200px]" data-name="Table Cell">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[18px] left-[11px] top-[3px] w-[59px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-0 whitespace-pre">Log</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#155dfc] h-[24px] left-[12px] rounded-[8px] top-[14px] w-[42px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[200px] top-0 w-[150px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[18px] left-[9px] top-[3px] w-[100.062px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[17px] not-italic text-[#e7000b] text-[12px] text-nowrap top-[0.5px] whitespace-pre">Nie wysłano</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[24px] left-[12px] rounded-[8px] top-[13.5px] w-[118.062px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[417px] top-0 w-[180px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Szczegóły</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-gray-200 h-[32px] relative rounded-[8px] shrink-0 w-[111.812px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-px relative w-[111.812px]">
        <Icon6 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[285px] top-[10px] w-[254px]" data-name="Container">
      <Button5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Synchronizuj</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#00a63e] box-border content-stretch flex gap-[6px] h-[32px] items-center left-[152px] px-[12px] py-0 rounded-[8px] top-[9px] w-[126.156px]" data-name="Button">
      <Icon7 />
      <Paragraph13 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[530px] top-0 w-[419px]" data-name="Table Cell">
      <Container11 />
      <Button6 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[147px] left-0 top-[40px] w-[949px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[187.5px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[394px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[398px] left-[16px] rounded-[10px] top-[92px] w-[953px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[398px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
      <Container2 />
      <Container13 />
    </div>
  );
}

export default function DepozytIOdsilenia() {
  return (
    <div className="relative size-full" data-name="Depozyt i odsilenia">
      <Container />
      <Container14 />
    </div>
  );
}