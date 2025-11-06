import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-oudj9i2ffx";

interface Event {
  id: number;
  date: string;
  type: 'deposit' | 'unload' | 'log';
  status: 'synced' | 'not-sent';
  barcode?: string;
  hasQrData?: boolean;
  envelopeNumber?: string;
  deviceId?: string;
  timestamp?: string;
  userId?: string;
  userRole?: string;
  transactionId?: number;
  depositStatus?: 'Potwierdzona' | 'Niepotwierdzona';
}

interface DepozytDetailsScreenProps {
  onBack?: () => void;
  eventId?: number | null;
}

const EVENTS_STORAGE_KEY = 'zdarzenia_events';

export default function DepozytDetailsScreen({ onBack, eventId }: DepozytDetailsScreenProps) {
  const [isSynchronized, setIsSynchronized] = useState(false);
  const [hasQrData, setHasQrData] = useState(true);
  const [barcode, setBarcode] = useState('');
  const [envelopeNumber, setEnvelopeNumber] = useState('');
  const [deviceId, setDeviceId] = useState('123');
  const [timestamp, setTimestamp] = useState('2021-05-31 14:23:15');
  const [userId, setUserId] = useState('1234');
  const [userRole, setUserRole] = useState('Klient');
  const [transactionId, setTransactionId] = useState('1234567890');
  const [depositStatus, setDepositStatus] = useState('Potwierdzona');

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
            setHasQrData(event.hasQrData !== false);
            setBarcode(event.barcode || '');
            setEnvelopeNumber(event.envelopeNumber || '');
            setDeviceId(event.deviceId || '123');
            setTimestamp(event.timestamp || event.date || '2021-05-31 14:23:15');
            setUserId(event.userId || '1234');
            setUserRole(event.userRole || 'Klient');
            setTransactionId(event.transactionId ? event.transactionId.toString() : '1234567890');
            setDepositStatus(event.depositStatus || 'Potwierdzona');
          }
        }
      } catch {
        // Ignore errors
      }
    }
  }, [eventId]);

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Depozyt">
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
                    <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#155dfc] text-[20px] text-nowrap top-[-0.33px] whitespace-pre">Wpłata</p>
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

          {/* Dane z QR Header */}
          <div className="h-[36px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[945px]">
              <div className="relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g>
                    <path d={svgPaths.p5c2b472} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p3a61f900} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p2736b400} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.p30587140} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M28 28V28.0133" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d={svgPaths.pa403690} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M4 16H4.01333" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M16 4H16.0133" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M16 21.3333V21.3467" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M21.3333 16H22.6667" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M28 16V16.0133" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    <path d="M16 28V26.6667" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </g>
                </svg>
              </div>
              <div className="h-[36px] relative shrink-0 w-[118.719px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[118.719px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Dane z QR</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Data Grid Row 1 */}
          <div className="h-[44px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa lokalizacji klienta:</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? 'Lokalizacja klienta S.A., ul.Piastowska 1, 00-999 Warszawa' : ''}</p>
                </div>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Numer bezpiecznej koperty/opakowanie pakietu</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? envelopeNumber : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Data Grid Row 2 */}
          <div className="h-[44px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Nazwa odbiorcy klienta</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? 'Nazwa Klienta S.A., ul. Piastowska 2, 02-999 Warszawa' : ''}</p>
                </div>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Kod lokalizacji klienta</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? 'K43438998' : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Data Grid Row 3 */}
          <div className="h-[44px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] relative w-[945px]">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Rachunek odbiorcy</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? 'PL 1234 5678 9012 3456 7890 1234' : ''}</p>
                </div>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Imię i nazwisko wpłacającego</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{hasQrData ? 'Jan Testowy' : ''}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Denomination Structure */}
          <div className="h-[331px] relative shrink-0 w-[945px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[331px] relative w-[945px]">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <div className="h-[20px] relative shrink-0 w-[464.5px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Struktura nominałowa:</p>
                </div>
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[464.5px]">
                  {hasQrData ? (
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start relative w-[464.5px] overflow-y-auto max-h-[300px]">
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 500</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 200</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 100</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 50</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 20</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 10</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 5</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 2</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 1</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.5</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.2</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.1</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.05</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.02</p>
                      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">2 x 0.01</p>
                    </div>
                  ) : (
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[464.5px]" />
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                <div className="h-[48px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Data realizacji wpłaty</p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#101828] text-[16px] text-nowrap whitespace-pre">{hasQrData ? '2021-05-31 14:23:15' : ''}</p>
                  </div>
                </div>
                <div className="h-[48px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[464.5px]">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Kwota wpłaty</p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#101828] text-[16px] text-nowrap whitespace-pre">{hasQrData ? '1 777,76' : ''}</p>
                  </div>
                </div>
                <div className="h-[44px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Waluta</p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{hasQrData ? 'PLN' : ''}</p>
                  </div>
                </div>
                <div className="h-[44px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Tytułem</p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{hasQrData ? 'WPŁATA/K01/20210531/K257' : ''}</p>
                  </div>
                </div>
                <div className="h-[44px] relative shrink-0 w-[464.5px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[44px] items-start relative w-[464.5px]">
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">ID BDW</p>
                    <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{hasQrData ? '346720210531082006' : ''}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-gray-200 h-px relative shrink-0 w-[945px]" />

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
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Numer użytej karty</p>
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{userId}</p>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Id trezora</p>
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{deviceId}</p>
              </div>
              <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Data, godzina wpłaty</p>
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#101828] text-[16px] text-nowrap whitespace-pre">{timestamp}</p>
              </div>
              <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] w-[400px]">Numer bezpiecznej koperty wprowadzony przez wpłacającego w trezorze/zeskanowanego z koperty (kod kreskowy)</p>
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#101828] text-[14px] text-nowrap whitespace-pre">{barcode || ''}</p>
              </div>
              <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[4px] h-[64px] items-start relative self-start shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">ID transakcji</p>
                <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[#101828] text-[16px] text-nowrap whitespace-pre">{transactionId}</p>
              </div>
              <div className="[grid-area:3_/_2] content-stretch flex flex-col gap-[4px] h-[64px] items-start relative self-start shrink-0">
                <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Status wpłaty</p>
                <p 
                  className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap whitespace-pre"
                  style={{ color: depositStatus === 'Potwierdzona' ? '#00a63e' : '#e7000b' }}
                >
                  {depositStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}