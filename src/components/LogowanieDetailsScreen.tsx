import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-vkbumkzwqg";

interface Event {
  id: number;
  date: string;
  type: 'deposit' | 'unload' | 'log';
  status: 'synced' | 'not-sent';
  deviceId?: string;
  timestamp?: string;
  userId?: string;
  userRole?: string;
}

interface LogowanieDetailsScreenProps {
  onBack?: () => void;
  eventId?: number | null;
}

const EVENTS_STORAGE_KEY = 'zdarzenia_events';

export default function LogowanieDetailsScreen({ onBack, eventId }: LogowanieDetailsScreenProps) {
  const [isSynchronized, setIsSynchronized] = useState(false);
  const [deviceId, setDeviceId] = useState('12345');
  const [timestamp, setTimestamp] = useState('2025-05-31 14:23:15');
  const [userId, setUserId] = useState('1234');
  const [userRole, setUserRole] = useState('Klient');

  // Завантажуємо статус події з localStorage
  useEffect(() => {
    if (eventId) {
      try {
        const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
        if (stored) {
          const events: Event[] = JSON.parse(stored);
          const event = events.find(e => e.id === eventId);
          if (event) {
            setIsSynchronized(event.status === 'synced');
            setDeviceId(event.deviceId || '12345');
            setTimestamp(event.timestamp || event.date || '2025-05-31 14:23:15');
            setUserId(event.userId || '1234');
            setUserRole(event.userRole || 'Klient');
          }
        }
      } catch {
        // Ignore errors
      }
    }
  }, [eventId]);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Logowanie">
      {/* White Container */}
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 overflow-clip rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container">
        <div className="absolute content-stretch flex flex-col gap-[16px] h-[466px] items-start left-[24px] overflow-x-clip overflow-y-auto top-[18px] w-[945px]" data-name="Container">
          
          {/* Type and Status Row */}
          <div className="relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] items-start relative w-[945px]">
              {/* Type */}
              <div className="basis-0 bg-blue-50 grow h-[92px] min-h-px min-w-px relative rounded-[10px] shrink-0">
                <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[92px] relative w-full">
                  <div className="absolute h-[20px] left-[18px] top-[18px] w-[22.573px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Typ</p>
                  </div>
                  <div className="absolute h-[28px] left-[18px] top-[46px] w-[428.5px]">
                    <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-[-0.33px] whitespace-pre">Logowanie</p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className={`basis-0 grow h-[92px] min-h-px min-w-px relative rounded-[10px] shrink-0 ${isSynchronized ? 'bg-green-50' : 'bg-yellow-50'}`}>
                <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[10px] ${isSynchronized ? 'border-[#b9f8cf]' : 'border-[#ffd699]'}`} />
                <div className="size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start pb-[2px] pt-[18px] px-[18px] relative w-full">
                    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                      <div className="h-[20px] relative shrink-0 w-[39.698px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[39.698px]">
                          <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Status</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[28px] relative shrink-0 w-full">
                      <p className={`absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap top-[-0.33px] whitespace-pre ${isSynchronized ? 'text-green-500' : 'text-yellow-600'}`}>
                        {isSynchronized ? 'Zsynchronizowano' : 'Niesynchronizowano'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dane z urządzenia Header */}
          <div className="h-[36px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[945px]">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPaths.p23bb4660} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p2fc7d580} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p76546be} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p101a6580} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
              <div className="h-[36px] relative shrink-0 w-[200.125px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Dane z urządzenia</p>
              </div>
            </div>
          </div>

          {/* Device Data Grid */}
          <div className="h-[197px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[44px_64px_minmax(0px,_1fr)] h-[197px] relative w-[945px]">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Id trezora</p>
                  </div>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{deviceId}</p>
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[464.5px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Data, godzina logowania</p>
                  </div>
                </div>
                <div className="h-[24px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[464.5px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">{timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
