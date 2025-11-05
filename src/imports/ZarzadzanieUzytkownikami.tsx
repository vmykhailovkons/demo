import svgPaths from "./svg-fl5aud4b0d";

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[104px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[104px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">ID użytkownika</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[61px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[61px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[60px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[60px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-px not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Rola</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[186px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[186px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Akcje</p>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-gray-100 h-[40px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[164px] h-[40px] items-center pb-px pt-0 px-[16px] relative w-full">
          <Paragraph />
          <Paragraph1 />
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

interface UserRowProps {
  id: string;
  status: string;
  role: string;
  onEdit: () => void;
  onDelete: () => void;
}

function UserRow({ id, status, role, onEdit, onDelete }: UserRowProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Master">
      <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[164px] h-[49px] items-center pb-px pl-[16px] pr-0 pt-0 relative w-full">
            <div className="h-[21px] relative shrink-0 w-[104px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[104px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{id}</p>
              </div>
            </div>
            <div className="h-[21px] relative shrink-0 w-[60px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[60px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{status}</p>
              </div>
            </div>
            <div className="h-[21px] relative shrink-0 w-[60px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[60px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">{role}</p>
              </div>
            </div>
            <div className="h-[22px] relative shrink-0 w-[186px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] relative w-[186px]">
                <button
                  onClick={onEdit}
                  className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start justify-center left-[97px] px-[25px] py-[7px] rounded-[8px] top-[-7px] cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">Edytuj</p>
                </button>
                <button
                  onClick={onDelete}
                  className="absolute bg-[#eb4343] h-[35px] left-0 rounded-[8px] top-[-7px] w-[90px] cursor-pointer hover:bg-[#d63939] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[28px] not-italic text-[14px] text-nowrap text-white top-[7px] whitespace-pre">Usuń</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[12.5%_8.33%]" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11">
            <path d={svgPaths.pdca6ca0} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
            <path d={svgPaths.p10994500} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.p18da0e00} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2586c100} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function UsersIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[32px] top-[2px]" data-name="UsersIcon">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 5.33333V9.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 7.33333H10.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

interface User {
  id: string;
  role: string;
  status: 'aktywny' | 'nieaktywny';
}

interface ZarzadzanieUzytkownikamiProps {
  users: User[];
  onAddUser?: () => void;
  onDeleteUser?: (userId: string) => void;
  onEditUser?: (userId: string) => void;
}

export default function ZarzadzanieUzytkownikami({ users, onAddUser, onDeleteUser, onEditUser }: ZarzadzanieUzytkownikamiProps) {
  const handleEdit = (id: string) => {
    if (onEditUser) {
      onEditUser(id);
    }
  };

  const handleDelete = (id: string) => {
    if (onDeleteUser) {
      onDeleteUser(id);
    }
  };

  const handleAddUser = () => {
    if (onAddUser) {
      onAddUser();
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Zarządzanie użytkownikami">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <div className="absolute left-[27px] rounded-[10px] top-[86px] w-[939px]">
          <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-[939px]">
            <TableHeader />
            {users.length === 0 ? (
              <div className="bg-white h-[100px] w-full flex items-center justify-center">
                <p className="font-['Arial:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  Brak użytkowników. Dodaj pierwszego użytkownika.
                </p>
              </div>
            ) : (
              users.map((user) => (
                <UserRow
                  key={user.id}
                  id={user.id}
                  status={user.status === 'aktywny' ? 'Aktywny' : 'Nie aktywny'}
                  role={user.role}
                  onEdit={() => handleEdit(user.id)}
                  onDelete={() => handleDelete(user.id)}
                />
              ))
            )}
          </div>
          <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>

        <div className="absolute content-stretch flex h-[36px] items-center left-[27px] top-[27px] w-[940px]">
          <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0">
            <div className="absolute h-[36px] left-[44px] top-0 w-[294.797px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 whitespace-pre">Zarządzanie użytkownikami</p>
            </div>
            <UsersIcon />
          </div>
          <button
            onClick={handleAddUser}
            className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[172.734px] cursor-pointer hover:bg-[#009138] transition-colors"
          >
            <Icon4 />
            <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[40px] not-italic text-[14px] text-nowrap text-white top-[7.5px] whitespace-pre">Dodaj użytkownika</p>
          </button>
        </div>
      </div>
    </div>
  );
}
