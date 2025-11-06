import { useEffect } from 'react';

function Frame() {
  return (
    <div className="h-[208px] relative shrink-0 w-[865px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[208px] relative w-[865px]">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[36px] leading-[24px] left-[405px] not-italic text-[96px] text-center text-green-500 top-[86px] translate-x-[-50%] w-[778px]">Zeskanowano</p>
      </div>
    </div>
  );
}

function Container({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="absolute bg-green-50 box-border content-stretch flex h-[225px] items-center justify-center left-[37px] p-[4px] rounded-[14px] top-[20px] w-[920px] cursor-pointer hover:bg-green-100 transition-colors" 
      data-name="Container"
    >
      <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Frame />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa lokalizacji klienta:</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Lokalizacja klienta S.A., ul.Piastowska 1, 00-999 Warszawa</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Numer bezpiecznej koperty/opakowanie pakietu</p>
      </div>
    </div>
  );
}

function Paragraph4({ envelopeNumber }: { envelopeNumber?: string }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{envelopeNumber || '346720210531082005'}</p>
      </div>
    </div>
  );
}

function Container2({ envelopeNumber }: { envelopeNumber?: string }) {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph3 />
      <Paragraph4 envelopeNumber={envelopeNumber} />
    </div>
  );
}

function Container3({ envelopeNumber }: { envelopeNumber?: string }) {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container1 />
        <Container2 envelopeNumber={envelopeNumber} />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa odbiorcy klienta</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa Klienta S.A., ul. Piastowska 2, 02-999 Warszawa</p>
      </div>
    </div>
  );
}

function Container4() {
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
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Kod lokalizacji klienta</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">K43438998</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Rachunek odbiorcy</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">PL 1234 5678 9012 3456 7890 1234</p>
      </div>
    </div>
  );
}

function Container7() {
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
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Imię i nazwisko wpłacającego</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Jan Testowy</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Struktura nominałowa:</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 500</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 200</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 100</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 50</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 20</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 10</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 5</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 2</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 1</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.5</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.2</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.1</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.05</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.02</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">2 x 0.01</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[464.5px]">
        <Paragraph14 />
        <Paragraph15 />
        <Paragraph16 />
        <Paragraph17 />
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
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Paragraph13 />
      <Container10 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Data realizacji wpłaty</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">2021-05-31 14:23:15</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
        <Paragraph29 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Kwota wpłaty</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">1 777,76</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[48px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Waluta</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">PLN</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
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
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Tytułem</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">WPŁATA/K01/20210531/K257</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
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
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">ID BDW</p>
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">346720210531082006</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[44px] relative shrink-0 w-[464.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20({ envelopeNumber }: { envelopeNumber?: string }) {
  return (
    <div className="h-[331px] relative shrink-0 w-[945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[331px] relative w-[945px]">
        <Container12 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21({ envelopeNumber }: { envelopeNumber?: string }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[200px] items-start left-[37px] overflow-x-clip overflow-y-auto top-[276px] w-[920px]" data-name="Container">
      <Container3 envelopeNumber={envelopeNumber} />
      <Container6 />
      <Container9 />
      <Container20 envelopeNumber={envelopeNumber} />
    </div>
  );
}

function Container11({ envelopeNumber, onClick }: { envelopeNumber?: string; onClick?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container onClick={onClick} />
      <Container21 envelopeNumber={envelopeNumber} />
    </div>
  );
}

export default function QRDataScreen({ onClick, envelopeNumber }: { onClick?: () => void; envelopeNumber?: string }) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="QRDataScreen">
      <Container11 envelopeNumber={envelopeNumber} onClick={onClick} />
    </div>
  );
}