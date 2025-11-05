import { useState, useEffect, useRef } from 'react';

interface NetworkScreenProps {
  onSave?: () => void;
  onBack?: () => void;
}

interface NetworkSettings {
  ip: string;
  port: string;
  login: string;
  password: string;
}

export default function NetworkScreen({ onSave, onBack }: NetworkScreenProps) {
  const [settings, setSettings] = useState<NetworkSettings>(() => {
    const saved = localStorage.getItem('networkSettings');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      ip: '',
      port: '',
      login: '',
      password: ''
    };
  });

  const [activeField, setActiveField] = useState<'ip' | 'port' | 'login' | 'password' | null>(null);
  const [isShiftActive, setIsShiftActive] = useState(false);
  const ipInputRef = useRef<HTMLInputElement>(null);
  const portInputRef = useRef<HTMLInputElement>(null);
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Перевіряємо чи всі параметри правильні
  const isConnected = 
    settings.ip === '192.168.1.3' && 
    settings.port === '8080' && 
    settings.login === 'admin' && 
    settings.password === 'admin';

  // Автоматично зберігаємо налаштування при зміні
  useEffect(() => {
    localStorage.setItem('networkSettings', JSON.stringify(settings));
  }, [settings]);

  const handleKeyPress = (key: string) => {
    if (!activeField) return;

    if (key === '←') {
      setSettings(prev => ({
        ...prev,
        [activeField]: prev[activeField].slice(0, -1)
      }));
    } else if (key === 'shift') {
      setIsShiftActive(!isShiftActive);
    } else {
      const char = isShiftActive ? key.toUpperCase() : key;
      setSettings(prev => ({
        ...prev,
        [activeField]: prev[activeField] + char
      }));
      if (isShiftActive) {
        setIsShiftActive(false);
      }
    }
  };

  // Physical keyboard support
  useEffect(() => {
    if (!activeField) return;

    const handlePhysicalKeyboard = (e: KeyboardEvent) => {
      // Prevent default for backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        setSettings(prev => ({
          ...prev,
          [activeField]: prev[activeField].slice(0, -1)
        }));
        return;
      }

      // Handle Tab to switch between fields
      if (e.key === 'Tab') {
        e.preventDefault();
        const fields: Array<'ip' | 'port' | 'login' | 'password'> = ['ip', 'port', 'login', 'password'];
        const currentIndex = fields.indexOf(activeField);
        const nextIndex = (currentIndex + 1) % fields.length;
        setActiveField(fields[nextIndex]);
        return;
      }

      // Handle Shift key
      if (e.key === 'Shift') {
        e.preventDefault();
        setIsShiftActive(prev => !prev);
        return;
      }

      // Handle alphanumeric keys and dots/special chars
      const key = e.key;
      if (/^[a-zA-Z0-9.@_-]$/.test(key)) {
        e.preventDefault();
        const char = e.shiftKey ? key.toUpperCase() : key;
        setSettings(prev => ({
          ...prev,
          [activeField]: prev[activeField] + char
        }));
      }
    };

    window.addEventListener('keydown', handlePhysicalKeyboard);
    return () => window.removeEventListener('keydown', handlePhysicalKeyboard);
  }, [activeField, isShiftActive]);

  const getStatusText = () => {
    if (isConnected) return 'Połączono';
    return 'Nie połączono';
  };

  const getStatusColor = () => {
    if (isConnected) return '#00a63e';
    return '#e7000b';
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Sieć">
      {/* White Container */}
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        
        {/* Form Container */}
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[241px] items-start left-[190px] overflow-x-clip overflow-y-auto top-[22px] w-[613px]" data-name="Container">
          
          {/* Row 1: IP Address and Port */}
          <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[60px] relative shrink-0 w-full" data-name="Container">
            {/* IP Address */}
            <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
              <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[53.703px]" data-name="Label">
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Adres IP</p>
              </div>
              <div 
                onClick={() => {
                  setActiveField('ip');
                  ipInputRef.current?.focus();
                }}
                className={`absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[238px] cursor-text ${activeField === 'ip' ? 'ring-2 ring-[#155dfc]' : ''}`} 
                data-name="Text Input"
              >
                <div className="absolute inset-0 flex items-center px-[12px]">
                  <div className="relative flex items-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] leading-[21px] text-[14px] pointer-events-none absolute left-0" style={{ color: settings.ip ? '#101828' : '#99a1af' }}>
                      {settings.ip || 'np. 192.168.1.100'}
                    </p>
                    <input
                      ref={ipInputRef}
                      type="text"
                      value={settings.ip}
                      onChange={() => {}}
                      onFocus={() => setActiveField('ip')}
                      className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[21px] text-[14px]"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Port */}
            <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
              <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[25.688px]" data-name="Label">
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Port</p>
              </div>
              <div 
                onClick={() => {
                  setActiveField('port');
                  portInputRef.current?.focus();
                }}
                className={`absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[238px] cursor-text ${activeField === 'port' ? 'ring-2 ring-[#155dfc]' : ''}`} 
                data-name="Text Input"
              >
                <div className="absolute inset-0 flex items-center px-[12px]">
                  <div className="relative flex items-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] leading-[21px] text-[14px] pointer-events-none absolute left-0" style={{ color: settings.port ? '#101828' : '#99a1af' }}>
                      {settings.port || 'np. 8080'}
                    </p>
                    <input
                      ref={portInputRef}
                      type="text"
                      value={settings.port}
                      onChange={() => {}}
                      onFocus={() => setActiveField('port')}
                      className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[21px] text-[14px]"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>

          {/* Row 2: Login, Password, and Status */}
          <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[136px] relative shrink-0 w-full" data-name="Container">
            {/* Login */}
            <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
              <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[53.703px]" data-name="Label">
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Login</p>
              </div>
              <div 
                onClick={() => {
                  setActiveField('login');
                  loginInputRef.current?.focus();
                }}
                className={`absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[238px] cursor-text ${activeField === 'login' ? 'ring-2 ring-[#155dfc]' : ''}`} 
                data-name="Text Input"
              >
                <div className="absolute inset-0 flex items-center px-[12px]">
                  <div className="relative flex items-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] leading-[21px] text-[14px] pointer-events-none absolute left-0" style={{ color: settings.login ? '#101828' : '#99a1af' }}>
                      {settings.login || 'np. root'}
                    </p>
                    <input
                      ref={loginInputRef}
                      type="text"
                      value={settings.login}
                      onChange={() => {}}
                      onFocus={() => setActiveField('login')}
                      className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[21px] text-[14px]"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Password */}
            <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
              <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[25.688px]" data-name="Label">
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Hasło</p>
              </div>
              <div 
                onClick={() => {
                  setActiveField('password');
                  passwordInputRef.current?.focus();
                }}
                className={`absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[238px] cursor-text ${activeField === 'password' ? 'ring-2 ring-[#155dfc]' : ''}`} 
                data-name="Text Input"
              >
                <div className="absolute inset-0 flex items-center px-[12px]">
                  <div className="relative flex items-center w-full">
                    <p className="font-['Arial:Regular',sans-serif] leading-[21px] text-[14px] pointer-events-none absolute left-0" style={{ color: settings.password ? '#101828' : '#99a1af' }}>
                      {settings.password ? (showPassword ? settings.password : '•'.repeat(settings.password.length)) : 'np. qwerty'}
                    </p>
                    <input
                      ref={passwordInputRef}
                      type="text"
                      value={settings.password}
                      onChange={() => {}}
                      onFocus={() => setActiveField('password')}
                      className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] leading-[21px] text-[14px]"
                      style={{ color: 'transparent', caretColor: 'black' }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                {/* Show/Hide Password Button */}
                {settings.password && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-[8px] top-1/2 -translate-y-1/2 p-[4px] hover:bg-gray-100 rounded transition-colors"
                  >
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {showPassword ? (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </>
                      ) : (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </>
                      )}
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Status */}
            <div className="[grid-area:2_/_1] relative shrink-0" data-name="Container">
              <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[25.688px]" data-name="Label">
                <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Status</p>
              </div>
              <div className="absolute h-[24px] left-[-8px] rounded-[8px] top-[26px] w-[118.062px]" data-name="Container">
                <div className="absolute h-[18px] left-[9px] top-[3px]" data-name="Paragraph">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap top-0 whitespace-pre" style={{ color: getStatusColor() }}>
                    {getStatusText()}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* VirtualKeyboard950X */}
        <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
          
          {/* Row 1 - Numbers 1-0 and Backspace */}
          <div className="absolute h-[47px] left-0 top-0 w-[950px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, index) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeyPress(num)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[68.5px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 72.39}px` }}
                data-name={`KeyButton${index}`}
              >
                <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
                  <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{num}</p>
                  </div>
                </div>
              </button>
            ))}
            {/* Backspace */}
            <button
              type="button"
              onClick={() => handleKeyPress('←')}
              className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px] cursor-pointer hover:bg-gray-200 transition-colors"
              data-name="KeyButton30"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
              </div>
            </button>
          </div>

          {/* Row 2 - QWERTYUIOP */}
          <div className="absolute h-[47px] left-0 top-[50px] w-[950px]">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[90.438px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 95.48}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Row 3 - ASDFGHJKL */}
          <div className="absolute h-[47px] left-[32.73px] top-[100px] w-[884.94px]">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[93.469px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 97.92}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Row 4 - Shift + ZXCVBNM + Dot */}
          <div className="absolute h-[47px] left-0 top-[150px] w-[950px]">
            {/* Shift Button */}
            <button
              type="button"
              onClick={() => handleKeyPress('shift')}
              className={`absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px] cursor-pointer transition-colors ${
                isShiftActive ? 'bg-blue-200' : 'bg-gray-100'
              } hover:bg-blue-100`}
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute h-[20px] left-[51.3px] top-[13.5px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
              </div>
            </button>
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[98.313px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${133.8 + index * 103.81}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
            {/* Dot Button */}
            <button
              type="button"
              onClick={() => handleKeyPress('.')}
              className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[98.313px] cursor-pointer hover:bg-gray-200 transition-colors"
              style={{ left: `${133.8 + 7 * 103.81}px` }}
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">.</p>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
