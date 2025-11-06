import svgPaths from "./svg-5zc61mx3lj";

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[23px] top-[27px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1250e0] transition-colors"
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Restart aplikacji</p>
      </div>
    </button>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[344px] top-[27px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1249d6] transition-colors"
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Restart urządzenia</p>
      </div>
    </button>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#155dfc] left-[665px] top-[27px] w-[307px] h-[155px] rounded-[10px] cursor-pointer hover:bg-[#1249d6] transition-colors"
      data-name="Button"
    >
      <div className="absolute flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[32px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[263px]">
        <p className="leading-[49px]">Wyłącz urządzenie</p>
      </div>
    </button>
  );
}

function Container4({ onRestartApp, onRestartDevice, onPowerOff }: { onRestartApp?: () => void; onRestartDevice?: () => void; onPowerOff?: () => void }) {
  return (
    <div className="absolute bg-white box-border h-[508px] left-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[993px]" data-name="Container">
      <Button2 onClick={onRestartApp} />
      <Button3 onClick={onRestartDevice} />
      <Button4 onClick={onPowerOff} />
    </div>
  );
}

function Container5({ onRestartApp, onRestartDevice, onPowerOff }: { onRestartApp?: () => void; onRestartDevice?: () => void; onPowerOff?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container4 onRestartApp={onRestartApp} onRestartDevice={onRestartDevice} onPowerOff={onPowerOff} />
    </div>
  );
}

export default function KontrolaSystemu() {
  const handleRestartApp = () => {
    alert('Restart aplikacji zostanie wykonany...');
  };

  const handleRestartDevice = () => {
    alert('Restart urządzenia zostanie wykonany...');
  };

  const handlePowerOff = () => {
    if (confirm('Czy na pewno chcesz wyłączyć urządzenie?')) {
      alert('Urządzenie zostanie wyłączone...');
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Kontrola systemu">
      <Container5 onRestartApp={handleRestartApp} onRestartDevice={handleRestartDevice} onPowerOff={handlePowerOff} />
    </div>
  );
}