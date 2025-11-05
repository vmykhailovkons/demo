interface ReplaceBagOpenDoorsScreenProps {
  onNext: () => void;
}

export function ReplaceBagOpenDoorsScreen({ onNext }: ReplaceBagOpenDoorsScreenProps) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div 
        onClick={onNext}
        className="absolute bg-white box-border content-stretch flex flex-col h-[508px] items-start left-[16px] pb-0 pl-[50px] pr-[49px] pt-[61px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[80px] w-[993px] cursor-pointer hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-shadow"
      >
        <div className="bg-blue-50 h-[355px] relative rounded-[14px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col h-[355px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
              <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[27px] left-[447px] not-italic text-[#2b7fff] text-[96px] text-center top-[149px] translate-x-[-50%] w-[556px]">Otwórz drzwi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
