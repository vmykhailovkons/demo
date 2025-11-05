import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-dnno0w0mur';

interface Event {
  id: number;
  date: string;
  type: 'deposit' | 'unload' | 'log';
  status: 'synced' | 'not-sent';
  barcode?: string;
  hasQrData?: boolean;
}

interface ZdarzeniaScreenProps {
  onDetailsClick?: (eventId: number, eventType: 'deposit' | 'unload' | 'log') => void;
  onSyncClick?: (eventId: number) => void;
}

const EVENTS_STORAGE_KEY = 'zdarzenia_events';

const defaultEvents: Event[] = [
  { id: 1, date: '2025-10-17 14:23:15', type: 'deposit', status: 'synced' },
  { id: 2, date: '2025-10-17 11:30:22', type: 'unload', status: 'not-sent' },
  { id: 3, date: '2025-10-17 11:29:22', type: 'log', status: 'not-sent' },
  { id: 4, date: '2025-10-17 10:15:30', type: 'deposit', status: 'synced' },
  { id: 5, date: '2025-10-17 09:45:12', type: 'unload', status: 'synced' },
  { id: 6, date: '2025-10-17 08:30:55', type: 'log', status: 'not-sent' },
  { id: 7, date: '2025-10-16 16:20:10', type: 'deposit', status: 'synced' },
  { id: 8, date: '2025-10-16 15:10:45', type: 'unload', status: 'not-sent' },
  { id: 9, date: '2025-10-16 14:05:20', type: 'log', status: 'synced' },
  { id: 10, date: '2025-10-16 13:00:00', type: 'deposit', status: 'synced' },
];

export default function ZdarzeniaScreen({ onDetailsClick, onSyncClick }: ZdarzeniaScreenProps) {
  // Завантажуємо події з localStorage або використовуємо дефолтні
  const [events, setEvents] = useState<Event[]>(() => {
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultEvents;
    } catch {
      return defaultEvents;
    }
  });
  
  const [syncingEvents, setSyncingEvents] = useState<Set<number>>(new Set());

  // Зберігаємо події в localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const handleSync = async (eventId: number) => {
    // Перевіряємо статус підключення з NetworkScreen
    const networkSettings = localStorage.getItem('networkSettings');
    let isConnected = false;
    
    if (networkSettings) {
      try {
        const settings = JSON.parse(networkSettings);
        isConnected = 
          settings.ip === '192.168.1.3' && 
          settings.port === '8080' && 
          settings.login === 'admin' && 
          settings.password === 'admin';
      } catch {
        isConnected = false;
      }
    }
    
    // Завжди показуємо ефект завантаження
    setSyncingEvents(prev => new Set(prev).add(eventId));
    
    // Симуляція синхронізації
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Оновлюємо статус події ТІЛЬКИ якщо підключені до мережі
    if (isConnected) {
      setEvents(prev => prev.map(event => 
        event.id === eventId ? { ...event, status: 'synced' as const } : event
      ));
      
      // Викликаємо зовнішній callback, якщо є
      onSyncClick?.(eventId);
    }
    
    // Видаляємо подію зі списку синхронізуючих
    setSyncingEvents(prev => {
      const newSet = new Set(prev);
      newSet.delete(eventId);
      return newSet;
    });
  };

  const getTypeLabel = (type: Event['type']) => {
    switch (type) {
      case 'deposit': return 'Wpłata';
      case 'unload': return 'Rozładowanie';
      case 'log': return 'Logowanie';
    }
  };

  const getStatusLabel = (status: Event['status']) => {
    switch (status) {
      case 'synced': return 'Zsynchronizowano';
      case 'not-sent': return 'Nie wysłano';
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Zdarzenia">
      {/* White Container - Centered */}
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        
        {/* Header with Icon and Title */}
        <div className="absolute box-border content-stretch flex gap-[15px] h-[36px] items-center px-[2px] py-0 right-[29px] top-[calc(50%-212px)] translate-y-[-50%] w-[940px]">
          <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-[786px]">
            {/* Icon */}
            <div className="relative shrink-0 size-[32px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <path d={svgPaths.p101a6580} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p76546be} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M13.3333 12H10.6667" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M21.3333 17.3333H10.6667" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d="M21.3333 22.6667H10.6667" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </g>
              </svg>
            </div>
            <p className="font-['Arial:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">Zdarzenia</p>
          </div>
        </div>

        {/* Table Container */}
        <div className="absolute h-[398px] left-[16px] rounded-[10px] top-[92px] w-[953px]">
          <div className="box-border content-stretch flex flex-col h-[398px] items-start overflow-clip p-[2px] relative rounded-[inherit] w-[953px]">
            <div className="flex flex-col h-full max-h-[394px] items-start overflow-y-auto overflow-x-hidden relative w-full">
              
              {/* Table Header - Sticky */}
              <div className="sticky h-[40px] left-0 top-0 w-[949px] z-10 bg-white shrink-0">
                <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[949px]">
                  <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-gray-200 border-solid inset-0 pointer-events-none" />
                  
                  {/* Header Cells */}
                  <div className="absolute h-[40px] left-0 top-0 w-[200px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Data</p>
                  </div>
                  <div className="absolute h-[40px] left-[200px] top-0 w-[150px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Typ</p>
                  </div>
                  <div className="absolute h-[40px] left-[459px] top-[4px] w-[180px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Status</p>
                  </div>
                  <div className="absolute h-[40px] left-[811px] top-0 w-[105px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Akcje</p>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="relative left-0 top-0 w-[949px] shrink-0" style={{ height: `${events.length * 49}px` }}>
                {events.map((event, index) => (
                  <div key={event.id} className="absolute h-[49px] left-0 w-[949px]" style={{ top: `${index * 49}px` }}>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                    
                    {/* Date Cell */}
                    <div className="absolute h-[49px] left-0 top-0 w-[200px]">
                      <div className="absolute h-[21px] left-[12px] top-[14px] w-[176px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{event.date}</p>
                      </div>
                    </div>

                    {/* Type Cell */}
                    <div className="absolute h-[49px] left-[200px] top-0 w-[150px]">
                      <div className="absolute h-[21px] left-[12px] top-[14px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{getTypeLabel(event.type)}</p>
                      </div>
                    </div>

                    {/* Status Cell */}
                    <div className="absolute h-[49px] top-0 w-[180px]" style={{ left: event.status === 'synced' ? '350px' : '417px' }}>
                      <div className="absolute h-[24px] rounded-[8px] top-[13px]" style={{ left: event.status === 'synced' ? '81px' : '12px', width: '118.062px' }}>
                        <div className="absolute h-[18px] left-[9px] top-[3px] w-[100.062px]">
                          <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] not-italic text-[12px] text-nowrap top-[0.5px] whitespace-pre" 
                             style={{ color: event.status === 'synced' ? '#00a63e' : '#e7000b', left: event.status === 'synced' ? '0' : '17px' }}>
                            {getStatusLabel(event.status)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions Cell */}
                    <div className="absolute h-[49px] top-0 w-[419px]" style={{ left: event.status === 'synced' ? '680px' : '530px' }}>
                      {/* Szczegóły Button */}
                      <div 
                        className="absolute content-stretch flex gap-[8px] h-[32px] items-center top-[9px] w-[254px] cursor-pointer"
                        style={{ left: event.status === 'synced' ? '134px' : '285px' }}
                        onClick={() => onDetailsClick?.(event.id, event.type)}
                      >
                        <div className="bg-gray-200 h-[32px] relative rounded-[8px] shrink-0 w-[111.812px] hover:bg-gray-300 transition-colors">
                          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center px-[13px] py-px relative w-[111.812px]">
                            <div className="relative shrink-0 size-[16px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <g>
                                  <path d={svgPaths.p26b72c80} stroke="var(--stroke-0, #000000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  <path d={svgPaths.p28db2b80} stroke="var(--stroke-0, #000000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                </g>
                              </svg>
                            </div>
                            <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Szczegóły</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Synchronizuj Button - only for not-sent status */}
                      {event.status === 'not-sent' && (
                        <div 
                          className={`absolute box-border content-stretch flex gap-[6px] h-[32px] items-center left-[152px] px-[12px] py-0 rounded-[8px] top-[9px] w-[126.156px] transition-colors ${
                            syncingEvents.has(event.id) 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-[#00a63e] cursor-pointer hover:bg-[#008f36]'
                          }`}
                          onClick={() => !syncingEvents.has(event.id) && handleSync(event.id)}
                        >
                          {syncingEvents.has(event.id) ? (
                            <>
                              <div className="size-[16px] border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Czekaj...</p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="relative shrink-0 size-[16px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <g>
                                    <path d={svgPaths.p19987d80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    <path d="M14 2V5.33333H10.6667" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    <path d={svgPaths.p2a3e9c80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    <path d="M5.33333 10.6667H2V14" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                  </g>
                                </svg>
                              </div>
                              <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
                                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Synchronizuj</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
    </div>
  );
}
