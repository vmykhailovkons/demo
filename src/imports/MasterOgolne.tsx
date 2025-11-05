import { useState, useEffect, useRef } from 'react';
import svgPaths from "./svg-aneyfk0b70";
import { VirtualKeyboard950 } from "../components/VirtualKeyboard950";

function Container() {
  return <div className="absolute h-[28px] left-[172px] top-[254px] w-[196.5px]" data-name="Container" />;
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Nazwa urządzenia</p>
    </div>
  );
}

function Input({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center px-[12px]">
          <div className="relative flex items-center w-full">
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
              {value}
            </p>
            <input
              type="text"
              value={value}
              onChange={() => {}}
              onFocus={onFocus}
              className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[20px] text-[14px]"
              style={{ color: 'transparent', caretColor: 'black' }}
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isActive ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
    </div>
  );
}

function Container1({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[391.667px]" data-name="Container">
      <PrimitiveLabel />
      <Input value={value} onFocus={onFocus} isActive={isActive} />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Lokalizacja</p>
    </div>
  );
}

function Input1({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center px-[12px]">
          <div className="relative flex items-center w-full">
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
              {value}
            </p>
            <input
              type="text"
              value={value}
              onChange={() => {}}
              onFocus={onFocus}
              className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[20px] text-[14px]"
              style={{ color: 'transparent', caretColor: 'black' }}
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isActive ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
    </div>
  );
}

function Container2({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[407.67px] top-0 w-[391.667px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 value={value} onFocus={onFocus} isActive={isActive} />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Numer ID</p>
    </div>
  );
}

function Input2({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center px-[12px]">
          <div className="relative flex items-center w-full">
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
              {value}
            </p>
            <input
              type="text"
              value={value}
              onChange={() => {}}
              onFocus={onFocus}
              className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[20px] text-[14px]"
              style={{ color: 'transparent', caretColor: 'black' }}
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isActive ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
    </div>
  );
}

function Container3({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[74px] w-[391.667px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 value={value} onFocus={onFocus} isActive={isActive} />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Pojemność pojemnika</p>
    </div>
  );
}

function Input3({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="absolute inset-0 flex items-center px-[12px]">
          <div className="relative flex items-center w-full">
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950 pointer-events-none absolute left-0">
              {value}
            </p>
            <input
              type="text"
              value={value}
              onChange={() => {}}
              onFocus={onFocus}
              className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[20px] text-[14px]"
              style={{ color: 'transparent', caretColor: 'black' }}
            />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isActive ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
    </div>
  );
}

function Container4({ value, onFocus, isActive }: { value: string; onFocus: () => void; isActive: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[407.67px] top-[74px] w-[391.667px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 value={value} onFocus={onFocus} isActive={isActive} />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Typ wrzutni</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="#717182" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Input4({ value, onChange, isOpen, setIsOpen }: { value: string; onChange: (value: string) => void; isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, setIsOpen]);

  return (
    <div ref={dropdownRef} className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div 
        className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 w-[358px]">{value}</p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isOpen ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
      {isOpen && (
        <div className="absolute top-[40px] left-0 right-0 bg-white rounded-[8px] shadow-lg border-2 border-[#d1d5dc] z-10">
          <div 
            className={`px-[12px] py-[8px] cursor-pointer hover:bg-gray-100 rounded-t-[6px] ${value === 'Lobby' ? 'bg-blue-50' : ''}`}
            onClick={() => { onChange('Lobby'); setIsOpen(false); }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">Lobby</p>
          </div>
          <div 
            className={`px-[12px] py-[8px] cursor-pointer hover:bg-gray-100 rounded-b-[6px] ${value === 'Wolnostojąca' ? 'bg-blue-50' : ''}`}
            onClick={() => { onChange('Wolnostojąca'); setIsOpen(false); }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">Wolnostojąca</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Container5({ value, onChange, isOpen, setIsOpen }: { value: string; onChange: (value: string) => void; isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[408px] top-[148.17px] w-[391.667px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input4 value={value} onChange={onChange} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Język systemu</p>
    </div>
  );
}

function Input5({ value, onChange, isOpen, setIsOpen }: { value: string; onChange: (value: string) => void; isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, setIsOpen]);

  return (
    <div ref={dropdownRef} className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div 
        className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 w-[358px]">{value}</p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] ${isOpen ? 'border-[#155dfc]' : 'border-[#d1d5dc]'}`} />
      {isOpen && (
        <div className="absolute top-[40px] left-0 right-0 bg-white rounded-[8px] shadow-lg border-2 border-[#d1d5dc] z-10">
          <div 
            className={`px-[12px] py-[8px] cursor-pointer hover:bg-gray-100 rounded-t-[6px] ${value === 'PL' ? 'bg-blue-50' : ''}`}
            onClick={() => { onChange('PL'); setIsOpen(false); }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">PL</p>
          </div>
          <div 
            className={`px-[12px] py-[8px] cursor-pointer hover:bg-gray-100 rounded-b-[6px] ${value === 'ENG' ? 'bg-blue-50' : ''}`}
            onClick={() => { onChange('ENG'); setIsOpen(false); }}
          >
            <p className="font-['Arial:Regular',sans-serif] leading-[20px] text-[14px] text-neutral-950">ENG</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Container9({ value, onChange, isOpen, setIsOpen }: { value: string; onChange: (value: string) => void; isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[148px] w-[391.667px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input5 value={value} onChange={onChange} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

function DeviceConfigScreen({ 
  deviceName, 
  location, 
  deviceId, 
  capacity, 
  deviceType,
  language,
  activeField,
  setActiveField,
  setDeviceType,
  isTypeDropdownOpen,
  setIsTypeDropdownOpen,
  setLanguage,
  isLanguageDropdownOpen,
  setIsLanguageDropdownOpen
}: { 
  deviceName: string; 
  location: string; 
  deviceId: string; 
  capacity: string; 
  deviceType: string;
  language: string;
  activeField: string;
  setActiveField: (field: string) => void;
  setDeviceType: (type: string) => void;
  isTypeDropdownOpen: boolean;
  setIsTypeDropdownOpen: (isOpen: boolean) => void;
  setLanguage: (lang: string) => void;
  isLanguageDropdownOpen: boolean;
  setIsLanguageDropdownOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="absolute h-[441px] left-[28px] top-[-73px] w-[799px]" data-name="DeviceConfigScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[441px] relative w-[799px]">
        <Container1 
          value={deviceName} 
          onFocus={() => setActiveField('deviceName')} 
          isActive={activeField === 'deviceName'}
        />
        <Container2 
          value={location} 
          onFocus={() => setActiveField('location')} 
          isActive={activeField === 'location'}
        />
        <Container3 
          value={deviceId} 
          onFocus={() => setActiveField('deviceId')} 
          isActive={activeField === 'deviceId'}
        />
        <Container4 
          value={capacity} 
          onFocus={() => setActiveField('capacity')} 
          isActive={activeField === 'capacity'}
        />
        <Container5 
          value={deviceType}
          onChange={setDeviceType}
          isOpen={isTypeDropdownOpen}
          setIsOpen={setIsTypeDropdownOpen}
        />
        <Container9 
          value={language}
          onChange={setLanguage}
          isOpen={isLanguageDropdownOpen}
          setIsOpen={setIsLanguageDropdownOpen}
        />
      </div>
    </div>
  );
}

function PrimitiveDiv({ 
  deviceName, 
  location, 
  deviceId, 
  capacity, 
  deviceType,
  language,
  activeField,
  setActiveField,
  setDeviceType,
  isTypeDropdownOpen,
  setIsTypeDropdownOpen,
  setLanguage,
  isLanguageDropdownOpen,
  setIsLanguageDropdownOpen
}: { 
  deviceName: string; 
  location: string; 
  deviceId: string; 
  capacity: string; 
  deviceType: string;
  language: string;
  activeField: string;
  setActiveField: (field: string) => void;
  setDeviceType: (type: string) => void;
  isTypeDropdownOpen: boolean;
  setIsTypeDropdownOpen: (isOpen: boolean) => void;
  setLanguage: (lang: string) => void;
  isLanguageDropdownOpen: boolean;
  setIsLanguageDropdownOpen: (isOpen: boolean) => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[266px] items-start left-[59px] top-[90px] w-[799.333px]" data-name="Primitive.div">
      <DeviceConfigScreen 
        deviceName={deviceName}
        location={location}
        deviceId={deviceId}
        capacity={capacity}
        deviceType={deviceType}
        language={language}
        activeField={activeField}
        setActiveField={setActiveField}
        setDeviceType={setDeviceType}
        isTypeDropdownOpen={isTypeDropdownOpen}
        setIsTypeDropdownOpen={setIsTypeDropdownOpen}
        setLanguage={setLanguage}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        setIsLanguageDropdownOpen={setIsLanguageDropdownOpen}
      />
    </div>
  );
}

function VirtualKeyboard950X({ onKeyPress, onBackspace }: { onKeyPress: (key: string) => void; onBackspace: () => void }) {
  return (
    <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
      <VirtualKeyboard950 onKeyPress={onKeyPress} onBackspace={onBackspace} />
    </div>
  );
}

function Container11({ 
  deviceName, 
  location, 
  deviceId, 
  capacity, 
  deviceType,
  language,
  activeField,
  setActiveField,
  setDeviceType,
  isTypeDropdownOpen,
  setIsTypeDropdownOpen,
  setLanguage,
  isLanguageDropdownOpen,
  setIsLanguageDropdownOpen,
  onKeyPress,
  onBackspace
}: { 
  deviceName: string; 
  location: string; 
  deviceId: string; 
  capacity: string; 
  deviceType: string;
  language: string;
  activeField: string;
  setActiveField: (field: string) => void;
  setDeviceType: (type: string) => void;
  isTypeDropdownOpen: boolean;
  setIsTypeDropdownOpen: (isOpen: boolean) => void;
  setLanguage: (lang: string) => void;
  isLanguageDropdownOpen: boolean;
  setIsLanguageDropdownOpen: (isOpen: boolean) => void;
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
}) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container />
      <PrimitiveDiv 
        deviceName={deviceName}
        location={location}
        deviceId={deviceId}
        capacity={capacity}
        deviceType={deviceType}
        language={language}
        activeField={activeField}
        setActiveField={setActiveField}
        setDeviceType={setDeviceType}
        isTypeDropdownOpen={isTypeDropdownOpen}
        setIsTypeDropdownOpen={setIsTypeDropdownOpen}
        setLanguage={setLanguage}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        setIsLanguageDropdownOpen={setIsLanguageDropdownOpen}
      />
      <VirtualKeyboard950X onKeyPress={onKeyPress} onBackspace={onBackspace} />
    </div>
  );
}

const DEVICE_CONFIG_STORAGE_KEY = 'device_config';

export default function MasterOgolne() {
  // Завантажуємо збережені дані з localStorage або використовуємо дефолтні значення
  const [deviceName, setDeviceName] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).deviceName : 'Wrzutnia Bank_01';
    } catch {
      return 'Wrzutnia Bank_01';
    }
  });
  
  const [location, setLocation] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).location : 'Oddział Warszawa Centrum';
    } catch {
      return 'Oddział Warszawa Centrum';
    }
  });
  
  const [deviceId, setDeviceId] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).deviceId : 'DEV-2025-001';
    } catch {
      return 'DEV-2025-001';
    }
  });
  
  const [capacity, setCapacity] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).capacity : '500';
    } catch {
      return '500';
    }
  });
  
  const [deviceType, setDeviceType] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).deviceType : 'Lobby';
    } catch {
      return 'Lobby';
    }
  });
  
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem(DEVICE_CONFIG_STORAGE_KEY);
      return stored ? JSON.parse(stored).language : 'PL';
    } catch {
      return 'PL';
    }
  });
  
  const [activeField, setActiveField] = useState('deviceName');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Зберігаємо всі зміни в localStorage
  useEffect(() => {
    const configData = {
      deviceName,
      location,
      deviceId,
      capacity,
      deviceType,
      language
    };
    localStorage.setItem(DEVICE_CONFIG_STORAGE_KEY, JSON.stringify(configData));
  }, [deviceName, location, deviceId, capacity, deviceType, language]);

  const handleKeyPress = (key: string) => {
    switch (activeField) {
      case 'deviceName':
        setDeviceName(prev => prev + key);
        break;
      case 'location':
        setLocation(prev => prev + key);
        break;
      case 'deviceId':
        setDeviceId(prev => prev + key);
        break;
      case 'capacity':
        setCapacity(prev => prev + key);
        break;
    }
  };

  const handleBackspace = () => {
    switch (activeField) {
      case 'deviceName':
        setDeviceName(prev => prev.slice(0, -1));
        break;
      case 'location':
        setLocation(prev => prev.slice(0, -1));
        break;
      case 'deviceId':
        setDeviceId(prev => prev.slice(0, -1));
        break;
      case 'capacity':
        setCapacity(prev => prev.slice(0, -1));
        break;
    }
  };

  // Physical keyboard support
  useEffect(() => {
    const handlePhysicalKeyboard = (e: KeyboardEvent) => {
      // Skip if dropdown is open
      if (isTypeDropdownOpen || isLanguageDropdownOpen) return;

      // Prevent default for backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
        return;
      }

      // Handle alphanumeric keys and special chars
      const key = e.key;
      if (/^[a-zA-Z0-9\s._-]$/.test(key)) {
        e.preventDefault();
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, [activeField, isTypeDropdownOpen, isLanguageDropdownOpen]);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="MasterOgolne">
      <Container11 
        deviceName={deviceName}
        location={location}
        deviceId={deviceId}
        capacity={capacity}
        deviceType={deviceType}
        language={language}
        activeField={activeField}
        setActiveField={setActiveField}
        setDeviceType={setDeviceType}
        isTypeDropdownOpen={isTypeDropdownOpen}
        setIsTypeDropdownOpen={setIsTypeDropdownOpen}
        setLanguage={setLanguage}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        setIsLanguageDropdownOpen={setIsLanguageDropdownOpen}
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
      />
    </div>
  );
}
