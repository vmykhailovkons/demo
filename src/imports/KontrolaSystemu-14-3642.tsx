import svgPaths from "./svg-866o2qg5ib";

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

function Container1() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph5">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">1</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function KeyButton() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph6">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function KeyButton1() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[72.39px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton1">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph7">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">3</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function KeyButton2() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[144.78px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton2">
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph8">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">4</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function KeyButton3() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[217.17px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton3">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph9">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">5</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function KeyButton4() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[289.56px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton4">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph10">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">6</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function KeyButton5() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[361.95px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton5">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph11">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">7</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function KeyButton6() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[434.34px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton6">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph12">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">8</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function KeyButton7() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[506.73px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton7">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph13">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">9</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function KeyButton8() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[579.13px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton8">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph14">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">0</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function KeyButton9() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[651.52px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton9">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[217px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]" data-name="Paragraph15">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[217px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function KeyButton10() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px]" data-name="KeyButton10">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[950px]" data-name="Container6">
      <KeyButton />
      <KeyButton1 />
      <KeyButton2 />
      <KeyButton3 />
      <KeyButton4 />
      <KeyButton5 />
      <KeyButton6 />
      <KeyButton7 />
      <KeyButton8 />
      <KeyButton9 />
      <KeyButton10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph16">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">q</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function KeyButton11() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton11">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[40.14px] top-[13.5px] w-[10.125px]" data-name="Paragraph17">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">w</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function KeyButton12() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[95.48px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton12">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph18">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">e</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function KeyButton13() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[190.97px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton13">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[42.88px] top-[13.5px] w-[4.672px]" data-name="Paragraph19">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">r</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function KeyButton14() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[286.45px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton14">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[20px] left-[43.27px] top-[13.5px] w-[3.891px]" data-name="Paragraph20">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">t</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function KeyButton15() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[381.94px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton15">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-[41.7px] top-[13.5px] w-[7px]" data-name="Paragraph21">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">y</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function KeyButton16() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[477.42px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton16">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph22">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">u</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function KeyButton17() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[572.91px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton17">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20px] left-[43.64px] top-[13.5px] w-[3.125px]" data-name="Paragraph23">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">i</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function KeyButton18() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[668.39px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton18">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph24">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">o</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function KeyButton19() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[763.88px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton19">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph25">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">p</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function KeyButton20() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[859.36px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton20">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[47px] left-0 top-[50px] w-[950px]" data-name="Container7">
      <KeyButton11 />
      <KeyButton12 />
      <KeyButton13 />
      <KeyButton14 />
      <KeyButton15 />
      <KeyButton16 />
      <KeyButton17 />
      <KeyButton18 />
      <KeyButton19 />
      <KeyButton20 />
    </div>
  );
}

function Container8() {
  return <div className="absolute h-[47px] left-0 top-0 w-[27.344px]" data-name="Container8" />;
}

function Container49() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph26">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">a</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function KeyButton21() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[32.73px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton21">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-[43.22px] top-[13.5px] w-[7px]" data-name="Paragraph27">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">s</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function KeyButton22() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[131.59px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton22">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph28">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">d</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function KeyButton23() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[230.45px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton23">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-[44.78px] top-[13.5px] w-[3.891px]" data-name="Paragraph29">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">f</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function KeyButton24() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[329.31px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton24">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph30">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">g</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function KeyButton25() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[428.17px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton25">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph31">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">h</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function KeyButton26() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[527.03px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton26">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-[45.16px] top-[13.5px] w-[3.125px]" data-name="Paragraph32">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">j</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph27 />
    </div>
  );
}

function KeyButton27() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[625.89px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton27">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20px] left-[43.22px] top-[13.5px] w-[7px]" data-name="Paragraph33">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">k</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function KeyButton28() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[724.75px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton28">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[20px] left-[45.16px] top-[13.5px] w-[3.125px]" data-name="Paragraph34">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">l</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function KeyButton29() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[823.61px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton29">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return <div className="absolute h-[47px] left-[922.47px] top-0 w-[27.344px]" data-name="Container8" />;
}

function Container10() {
  return (
    <div className="absolute h-[47px] left-0 top-[100px] w-[950px]" data-name="Container10">
      <Container8 />
      <KeyButton21 />
      <KeyButton22 />
      <KeyButton23 />
      <KeyButton24 />
      <KeyButton25 />
      <KeyButton26 />
      <KeyButton27 />
      <KeyButton28 />
      <KeyButton29 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[20px] left-[51.3px] top-[13.5px] w-[25.688px]" data-name="Paragraph35">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[128.297px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function KeyButton30() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]" data-name="KeyButton30">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph36">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">z</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function KeyButton31() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[133.8px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton31">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph37">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">x</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function KeyButton32() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[237.61px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton32">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph38">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">c</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function KeyButton33() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[341.42px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton33">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph39">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">v</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function KeyButton34() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[445.23px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton34">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]" data-name="Paragraph40">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">b</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function KeyButton35() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[549.05px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton35">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]" data-name="Paragraph41">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">n</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function KeyButton36() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[652.86px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton36">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[20px] left-[43.31px] top-[13.5px] w-[11.672px]" data-name="Paragraph42">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">m</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function KeyButton37() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[756.67px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton37">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container12() {
  return <div className="absolute h-[47px] left-[860.48px] top-0 w-[89.344px]" data-name="Container12" />;
}

function Container17() {
  return (
    <div className="absolute h-[47px] left-0 top-[150px] w-[950px]" data-name="Container17">
      <KeyButton30 />
      <KeyButton31 />
      <KeyButton32 />
      <KeyButton33 />
      <KeyButton34 />
      <KeyButton35 />
      <KeyButton36 />
      <KeyButton37 />
      <Container12 />
    </div>
  );
}

function VirtualKeyboard950X() {
  return (
    <div className="absolute h-[200px] left-[22px] top-[277px] w-[950px]" data-name="VirtualKeyboard950X200">
      <Container6 />
      <Container7 />
      <Container10 />
      <Container17 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[94.156px]" data-name="Label">
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">ID użytkownika</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[734px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-0 relative rounded-[inherit] w-[734px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">JKO001</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[28.797px]" data-name="Label">
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Rola</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[77.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[77.672px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Klient</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-[24px] w-[734px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text2 />
      <Icon2 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Button2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[28.797px]" data-name="Label">
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Status</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[77.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[77.672px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Aktywny</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-[24px] w-[734px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text3 />
      <Icon3 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Button3 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[173px] items-start left-[130px] overflow-x-clip overflow-y-auto top-[79px] w-[734px]" data-name="Container">
      <Container84 />
      <Container85 />
      <Container86 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pec6d040} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p25171400} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Edycja użytkownika</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-[742px]" data-name="Container">
      <Icon4 />
      <CardTitle />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#00a63e] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[84px] not-italic text-[14px] text-nowrap text-white top-[9px] whitespace-pre">Zapisz</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center right-[29px] top-[calc(50%-212px)] translate-y-[-50%] w-[940px]" data-name="Container">
      <Container88 />
      <Button4 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container">
      <VirtualKeyboard950X />
      <Container87 />
      <Container89 />
    </div>
  );
}

export default function KontrolaSystemu() {
  return (
    <div className="relative size-full" data-name="Kontrola systemu">
      <Container />
      <Container90 />
    </div>
  );
}