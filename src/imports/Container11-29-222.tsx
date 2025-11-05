import svgPaths from "./svg-p5870pmfvn";

function Container() {
  return (
    <div className="absolute h-[174px] left-0 rounded-[14px] top-[3px] w-[467px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[73px] not-italic text-[#45556c] text-[16px] text-nowrap top-[53px] whitespace-pre">Nacisnij żeby symulować przyłożenie karty</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[92px] items-start left-0 rounded-[14px] top-[-7px] w-[377px]" data-name="Container">
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[35.859px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.23%_5.84%_6.59%_4.48%]" data-name="Vector">
        <div className="absolute inset-[-7.11%_-5.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 36">
            <path d={svgPaths.p70bdb00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.44414" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35.859px] items-start left-[492.73px] top-[290.95px] w-[49.313px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[4.484px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[44.84%_5.84%_55.16%_4.48%]" data-name="Vector_2">
        <div className="absolute inset-[-2.11px_-4.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 5">
            <path d="M2.1085 2.1085H46.3298" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.217" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.484px] items-start left-[492.73px] top-[302.16px] w-[49.313px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[206px] overflow-clip pb-0 pr-[544.391px] size-[53.906px] top-[85px]" data-name="Icon1">
      <Icon3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-slate-50 h-[170px] left-[178px] rounded-[14px] top-[33px] w-[467px]" data-name="Container1">
      <Container2 />
      <Icon1 />
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[24px] left-[132.64px] top-[-1.33px] w-[141.375px]" data-name="Paragraph" />;
}

function Paragraph1() {
  return <div className="absolute h-[24px] left-[438.96px] top-[32.66px] w-[21.359px]" data-name="Paragraph3" />;
}

function Container9() {
  return (
    <div className="h-[37.344px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37.344px] items-start left-[-183.25px] rounded-[10px] top-[138px] w-[266.797px]" data-name="Container5">
      <Container9 />
    </div>
  );
}

function AuthScreen() {
  return (
    <div className="absolute h-[436.875px] left-[253px] top-[34px] w-[533.594px]" data-name="AuthScreen">
      <Container1 />
      <Paragraph />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[-107px] not-italic text-[#45556c] text-[16px] text-nowrap top-[82px] whitespace-pre">Wpisz kod karty</p>
      <Paragraph1 />
      <Container5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph5">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">1</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function KeyButton() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph6">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">2</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function KeyButton1() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[72.39px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton1">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph7">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">3</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function KeyButton2() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[144.78px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton2">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph8">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">4</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function KeyButton3() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[217.17px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton3">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph9">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">5</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function KeyButton4() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[289.56px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton4">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph10">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">6</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function KeyButton5() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[361.95px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton5">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph11">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">7</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function KeyButton6() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[434.34px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton6">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph12">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">8</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function KeyButton7() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[506.73px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton7">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph13">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">9</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function KeyButton8() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[579.13px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton8">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]" data-name="Paragraph14">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">0</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function KeyButton9() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[651.52px] rounded-[8px] top-0 w-[68.5px]" data-name="KeyButton9">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[217px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]" data-name="Paragraph15">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[217px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function KeyButton10() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px]" data-name="KeyButton10">
      <Container34 />
      <Container35 />
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

function Container36() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph16">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">q</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function KeyButton11() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton11">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[40.14px] top-[13.5px] w-[10.125px]" data-name="Paragraph17">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">w</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function KeyButton12() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[95.48px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton12">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph18">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">e</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function KeyButton13() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[190.97px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton13">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-[42.88px] top-[13.5px] w-[4.672px]" data-name="Paragraph19">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">r</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function KeyButton14() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[286.45px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton14">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-[43.27px] top-[13.5px] w-[3.891px]" data-name="Paragraph20">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">t</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function KeyButton15() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[381.94px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton15">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20px] left-[41.7px] top-[13.5px] w-[7px]" data-name="Paragraph21">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">y</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function KeyButton16() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[477.42px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton16">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph22">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">u</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function KeyButton17() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[572.91px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton17">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[20px] left-[43.64px] top-[13.5px] w-[3.125px]" data-name="Paragraph23">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">i</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function KeyButton18() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[668.39px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton18">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph24">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">o</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function KeyButton19() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[763.88px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton19">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[90.438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]" data-name="Paragraph25">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">p</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[90.438px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function KeyButton20() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[859.36px] rounded-[8px] top-0 w-[90.438px]" data-name="KeyButton20">
      <Container54 />
      <Container55 />
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

function Container56() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph26">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">a</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function KeyButton21() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[32.73px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton21">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-[43.22px] top-[13.5px] w-[7px]" data-name="Paragraph27">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">s</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function KeyButton22() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[131.59px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton22">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph28">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">d</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function KeyButton23() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[230.45px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton23">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[20px] left-[44.78px] top-[13.5px] w-[3.891px]" data-name="Paragraph29">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">f</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function KeyButton24() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[329.31px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton24">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph30">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">g</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph27 />
    </div>
  );
}

function KeyButton25() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[428.17px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton25">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]" data-name="Paragraph31">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">h</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph28 />
    </div>
  );
}

function KeyButton26() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[527.03px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton26">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[20px] left-[45.16px] top-[13.5px] w-[3.125px]" data-name="Paragraph32">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">j</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph29 />
    </div>
  );
}

function KeyButton27() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[625.89px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton27">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[20px] left-[43.22px] top-[13.5px] w-[7px]" data-name="Paragraph33">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">k</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph30 />
    </div>
  );
}

function KeyButton28() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[724.75px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton28">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[93.469px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[20px] left-[45.16px] top-[13.5px] w-[3.125px]" data-name="Paragraph34">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">l</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[93.469px]" data-name="Container">
      <Paragraph31 />
    </div>
  );
}

function KeyButton29() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[823.61px] rounded-[8px] top-0 w-[93.469px]" data-name="KeyButton29">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
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
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[20px] left-[51.3px] top-[13.5px] w-[25.688px]" data-name="Paragraph35">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[128.297px]" data-name="Container">
      <Paragraph32 />
    </div>
  );
}

function KeyButton30() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-0 rounded-[8px] top-0 w-[128.297px]" data-name="KeyButton30">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph36">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">z</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function KeyButton31() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[133.8px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton31">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph37">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">x</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function KeyButton32() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[237.61px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton32">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph38">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">c</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph35 />
    </div>
  );
}

function KeyButton33() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[341.42px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton33">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[20px] left-[45.64px] top-[13.5px] w-[7px]" data-name="Paragraph39">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">v</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph36 />
    </div>
  );
}

function KeyButton34() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[445.23px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton34">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]" data-name="Paragraph40">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">b</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph37 />
    </div>
  );
}

function KeyButton35() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[549.05px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton35">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]" data-name="Paragraph41">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">n</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph38 />
    </div>
  );
}

function KeyButton36() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[652.86px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton36">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[98.313px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[20px] left-[43.31px] top-[13.5px] w-[11.672px]" data-name="Paragraph42">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">m</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[98.313px]" data-name="Container">
      <Paragraph39 />
    </div>
  );
}

function KeyButton37() {
  return (
    <div className="absolute bg-gray-100 h-[47px] left-[756.67px] rounded-[8px] top-0 w-[98.313px]" data-name="KeyButton37">
      <Container89 />
      <Container90 />
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
    <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
      <Container6 />
      <Container7 />
      <Container10 />
      <Container17 />
    </div>
  );
}

export default function Container11() {
  return (
    <div className="bg-white relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Container11">
      <AuthScreen />
      <VirtualKeyboard950X />
    </div>
  );
}