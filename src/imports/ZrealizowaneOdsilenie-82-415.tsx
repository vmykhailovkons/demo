function HeaderCell() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[200px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Numer</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[40px] left-[200px] top-0 w-[200px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Status</p>
    </div>
  );
}

function HeaderCell2() {
  return <div className="absolute h-[40px] left-[459px] top-[4px] w-[180px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
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
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">A23909090</p>
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

function TableCell1() {
  return <div className="absolute h-[49px] left-[680px] top-0 w-[268px]" data-name="Table Cell" />;
}

function TableRow1() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[214px] not-italic text-[#101828] text-[14px] text-nowrap top-[14px] whitespace-pre">Potwierdzone</p>
      <TableCell1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[14px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">A23909091</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[200px]" data-name="Table Cell">
      <Paragraph1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell2 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[211px] not-italic text-[#fb2c36] text-[14px] text-nowrap top-[14px] whitespace-pre">Niepotwierdzone</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[147px] left-0 top-[40px] w-[949px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
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

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[188px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[189px] left-[20px] rounded-[10px] top-[22px] w-[953px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[189px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[200px]" data-name="Header Cell">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[54px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Metoda potwierdzenia</p>
    </div>
  );
}

function HeaderCell4() {
  return <div className="absolute h-[40px] left-[459px] top-[4px] w-[180px]" data-name="Header Cell" />;
}

function TableRow3() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[949px]" data-name="Table Header">
      <TableRow3 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-0" data-name="Checkbox">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-0" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-[13px] rounded-[4px] size-[20px] top-[15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-neutral-950 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pl-[2px] pr-[655px] py-[2px] relative size-[20px]">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return <div className="absolute h-[49px] left-[680px] top-0 w-[268px]" data-name="Table Cell" />;
}

function Paragraph2() {
  return <div className="h-[16.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Paragraph3() {
  return <div className="absolute h-[21px] left-[52px] top-[4px] w-[271.531px]" data-name="Paragraph" />;
}

function Container3() {
  return (
    <div className="h-[22px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[22px] items-start relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Wydruk</p>
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[37.5px] items-center left-[52px] top-[6px] w-[271.531px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container2 />
      <TableCell3 />
      <Container4 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[49px] left-0 top-[49px] w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[21px] left-[12px] top-[14px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">A23909092</p>
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

function TableRow6() {
  return (
    <div className="absolute h-[49px] left-0 top-[98px] w-[949px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell4 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[147px] left-0 top-[40px] w-[949px]" data-name="Table Body">
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[187.5px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[138px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[140px] left-[22px] rounded-[10px] top-[232px] w-[953px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[140px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[112.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[112.078px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Następny depozyt</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[24px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[442px] w-[347px]" data-name="Button">
      <Paragraph5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[508px] left-[16px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px]" data-name="Container11">
      <Container1 />
      <Container6 />
      <Button />
    </div>
  );
}

function Paragraph10() {
  return <div className="absolute h-[18.672px] left-[16px] top-[12px] w-[50.688px]" data-name="Paragraph43" />;
}

function Paragraph6() {
  return <div className="absolute h-[28px] left-[16px] top-[21px] w-[184.125px]" data-name="Paragraph" />;
}

function Container8() {
  return <div className="absolute h-[24px] left-[970.52px] top-[9.33px] w-[37.984px]" data-name="Container16" />;
}

function Paragraph7() {
  return <div className="absolute h-[20px] left-[936.5px] top-[12px] w-[54.5px]" data-name="Paragraph" />;
}

function Paragraph8() {
  return <div className="absolute h-[16px] left-[934.94px] top-[33px] w-[60.063px]" data-name="Paragraph" />;
}

function Navbar() {
  return (
    <div className="absolute bg-[#1e2939] h-[64px] left-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[1025px]" data-name="Navbar">
      <Paragraph10 />
      <Paragraph6 />
      <Container8 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function AddDrumAnimation() {
  return (
    <div className="absolute h-[600.297px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[1024.5px]" data-name="AddDrumAnimation" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container7 />
      <Navbar />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[53px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[53px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zakończ</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[644px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[523px] w-[347px]" data-name="Button">
      <Paragraph9 />
    </div>
  );
}

export default function ZrealizowaneOdsilenie() {
  return (
    <div className="bg-white relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Zrealizowane odsilenie">
      <AddDrumAnimation />
      <Button1 />
    </div>
  );
}