import svgPaths from "./svg-apz697pscg";

function Icon() {
  return (
    <div className="absolute left-[46.63px] size-[247px] top-[88.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 247">
        <g id="Icon">
          <path d={svgPaths.p99b4b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d={svgPaths.p14869840} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d={svgPaths.p1d9f0d00} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d={svgPaths.p127b7280} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M216.125 216.125V216.227" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d={svgPaths.p2f0fe600} id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M30.875 123.5H30.9768" id="Vector_7" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 30.875H123.602" id="Vector_8" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 164.667V164.768" id="Vector_9" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M164.666 123.5H174.958" id="Vector_10" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M216.125 123.5V123.602" id="Vector_11" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 216.125V205.833" id="Vector_12" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[102.63px] top-[22.5px] w-[136.938px]" data-name="Paragraph1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Zeskanuj kod QR</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[424px] relative shrink-0 w-[341.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[424px] relative w-[341.25px]">
        <Icon />
        {[...Array(2).keys()].map((_, i) => (
          <Paragraph1 key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container />
    </div>
  );
}