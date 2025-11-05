import React from 'react';
import svgPaths from '../imports/svg-xzz45equ6f';

interface User {
  id: string;
  role: string;
  status: 'aktywny' | 'nieaktywny';
  isFirstLogin?: boolean;
  customPin?: string;
}

interface UsersScreenProps {
  users?: User[];
  onAddUser?: () => void;
  onEditUser?: (userId: string) => void;
  onDeleteUser?: (userId: string) => void;
}

const USERS_STORAGE_KEY = 'users';

const defaultUsers: User[] = [
  { id: '1111', role: 'Klient', status: 'aktywny' },
  { id: '2222', role: 'Kurier', status: 'aktywny' },
  { id: '3333', role: 'Master', status: 'aktywny' },
  { id: '4444', role: 'Klient', status: 'aktywny' },
  { id: '5555', role: 'Kurier', status: 'nieaktywny' },
  { id: '6666', role: 'Klient', status: 'aktywny' },
  { id: '7777', role: 'Master', status: 'nieaktywny' },
  { id: '8888', role: 'Klient', status: 'aktywny' },
  { id: '9999', role: 'Kurier', status: 'aktywny' },
  { id: '1010', role: 'Klient', status: 'nieaktywny' },
];

function Paragraph() {
  return (
    <div className="absolute h-[36px] left-[44px] top-0 w-[294.797px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Zarządzanie użytkownikami</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[10.656px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.12%_9.09%_15.15%_6.06%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 11">
            <path d={svgPaths.p287ecd80} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.58522" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.656px] items-start left-[300.33px] top-[256.66px] w-[21.344px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10.26%_23.88%_10.31%_19.05%]" data-name="Vector">
        <div className="absolute inset-[-12.6%_-34.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
            <path d={svgPaths.p1cea1ca6} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.60037" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13px] items-start left-[319px] top-[240.81px] w-[6.656px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[10.484px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.12%_23.8%_16.72%_19.05%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
            <path d={svgPaths.p2faa8f00} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.54167" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.484px] items-start left-[323px] top-[256.83px] w-[6.672px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[13.328px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.52%_14.29%_14.29%_9.52%]" data-name="Vector">
        <div className="absolute inset-[-12.51%_-12.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p25ea5800} stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.54017" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[13.328px] items-start left-[304.33px] top-[240.66px] w-[13.344px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon25">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip pb-0 pr-[331px] size-[32px] top-[2px]" data-name="Icon34">
      <Icon6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[767.281px]" data-name="Container">
      <Paragraph />
      <Icon7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute contents inset-[12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p13131780} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p2a986800} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector_3">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M0.666665 0.666665V4.66667" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector_4">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M4.66667 0.666665H0.666665" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[16px] top-[10px]" data-name="Icon43">
      <Icon5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-[40px] top-[7.5px] w-[116.734px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Dodaj użytkownika</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="absolute bg-[#00a63e] h-[36px] left-[767.28px] rounded-[8px] top-0 w-[172.719px] cursor-pointer hover:bg-[#009138] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <Icon8 />
      <Paragraph1 />
    </div>
  );
}

function Container5({ onAddUser }: { onAddUser?: () => void }) {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button onClick={onAddUser} />
    </div>
  );
}

export default function UsersScreen({ users: propUsers, onAddUser, onEditUser, onDeleteUser }: UsersScreenProps) {
  // Use users from props if provided, otherwise load from localStorage
  const users = propUsers || (() => {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultUsers;
    } catch {
      return defaultUsers;
    }
  })();

  const handleDelete = (userId: string) => {
    onDeleteUser?.(userId);
  };

  const getStatusLabel = (status: User['status']) => {
    return status === 'aktywny' ? 'Aktywny' : 'Nie aktywny';
  };

  const getStatusColor = (status: User['status']) => {
    return status === 'aktywny' ? '#00a63e' : '#e7000b';
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Użytkownicy">
      {/* White Container - Centered */}
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        
        {/* Header with Icon and Title + Add Button */}
        <div className="absolute box-border content-stretch flex gap-[15px] h-[36px] items-center px-[2px] py-0 right-[29px] top-[calc(50%-212px)] translate-y-[-50%] w-[940px]">
          <Container5 onAddUser={onAddUser} />
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
                  <div className="absolute h-[40px] left-0 top-0 w-[250px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">ID użytkownika</p>
                  </div>
                  <div className="absolute h-[40px] left-[250px] top-0 w-[200px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Status</p>
                  </div>
                  <div className="absolute h-[40px] left-[450px] top-0 w-[200px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Rola</p>
                  </div>
                  <div className="absolute h-[40px] left-[733px] top-0 w-[186px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[9px] whitespace-pre">Akcje</p>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="relative left-0 top-0 w-[949px] shrink-0" style={{ height: `${users.length * 49}px` }}>
                {users.map((user, index) => (
                  <div key={user.id} className="absolute h-[49px] left-0 w-[949px]" style={{ top: `${index * 49}px` }}>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
                    
                    {/* ID Cell */}
                    <div className="absolute h-[49px] left-0 top-0 w-[250px]">
                      <div className="absolute h-[21px] left-[12px] top-[14px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{user.id}</p>
                      </div>
                    </div>

                    {/* Status Cell */}
                    <div className="absolute h-[49px] left-[250px] top-0 w-[200px]">
                      <div className="absolute h-[21px] left-[12px] top-[14px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap top-0 whitespace-pre" style={{ color: getStatusColor(user.status) }}>
                          {getStatusLabel(user.status)}
                        </p>
                      </div>
                    </div>

                    {/* Role Cell */}
                    <div className="absolute h-[49px] left-[450px] top-0 w-[200px]">
                      <div className="absolute h-[21px] left-[12px] top-[14px]">
                        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{user.role}</p>
                      </div>
                    </div>

                    {/* Actions Cell */}
                    <div className="absolute h-[49px] left-[732px] top-0 w-[186px]">
                      <div className="absolute h-[22px] left-0 top-[13px] w-[186px]">
                        {/* Usuń Button */}
                        <div 
                          className="absolute bg-[#eb4343] h-[35px] left-0 rounded-[8px] top-[-7px] w-[90px] cursor-pointer hover:bg-[#d63939] transition-colors"
                          onClick={() => handleDelete(user.id)}
                        >
                          <div className="absolute h-[35px] left-0 rounded-[8px] top-0 w-[90px]">
                            <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          </div>
                          <div className="absolute h-[21px] left-[28px] top-[7px] w-[32.688px]">
                            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Usuń</p>
                          </div>
                        </div>

                        {/* Edytuj Button */}
                        <div 
                          className="absolute bg-white h-[35px] left-[97px] rounded-[8px] top-[-7px] w-[88.922px] cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => onEditUser?.(user.id)}
                        >
                          <div className="absolute h-[35px] left-0 rounded-[8px] top-0 w-[88.922px]">
                            <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          </div>
                          <div className="absolute h-[21px] left-[25px] top-[7px] w-[38.922px]">
                            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Edytuj</p>
                          </div>
                        </div>
                      </div>
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
