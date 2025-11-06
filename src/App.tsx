import { useState, useEffect, useRef } from 'react';
import { VirtualKeyboard } from "./components/VirtualKeyboard";
import SkanowanieQr from "./imports/SkanowanieQr";
import SkanowanieKodKreskowyScreen from "./imports/SkanowanieKodKreskowyScreen";
import svgPathsDeponowanie from "./imports/svg-zaa6w8fsh6";
import svgPathsEnvelope from "./imports/svg-pgez0osv3x";
import svgPathsBag from "./imports/svg-degqvs17j4";
import svgPathsBagSuccess from "./imports/svg-3mxlpi2j7b";
import Master from "./imports/Master";
import MasterConfig from "./imports/MasterConfig";
import MasterOgolne from "./imports/MasterOgolne";
import KontrolaSystemu from "./imports/KontrolaSystemu";
import UsersScreen from "./components/UsersScreen";
import AddUserScreen from "./components/AddUserScreen";
import EditUserScreen from "./components/EditUserScreen";
import NetworkScreen from "./components/NetworkScreen";
import ZdarzeniaScreen from "./components/ZdarzeniaScreen";
import DepozytDetailsScreen from "./components/DepozytDetailsScreen";
import BarcodeDepozytDetailsScreen from "./components/BarcodeDepozytDetailsScreen";
import UnloadDetailsScreen from "./components/UnloadDetailsScreen";
import LogowanieDetailsScreen from "./components/LogowanieDetailsScreen";
import UserManagementDetailsScreen from "./components/UserManagementDetailsScreen";
import GenericEventDetailsScreen from "./components/GenericEventDetailsScreen";
import CardInputScreen from "./components/CardInputScreen";
import PinInputScreen from "./components/PinInputScreen";
import SetupPinScreen from "./components/SetupPinScreen";
import LoginScreenWrapper from "./components/LoginScreenWrapper";
import QRDataScreen from "./components/QRDataScreen";
import BarcodeScannedScreen from "./components/BarcodeScannedScreen";
import { EnvelopeRejectedScreen } from "./components/EnvelopeRejectedScreen";
import { RetryInstructionScreen } from "./components/RetryInstructionScreen";
import { InvalidQRScreen } from "./components/InvalidQRScreen";
import { InvalidBarcodeScreen } from "./components/InvalidBarcodeScreen";
import NieZeskanowanoKodKreskowy from "./imports/NieZeskanowanoKodKreskowy";
import { EnvelopeAcceptedScreen } from "./components/EnvelopeAcceptedScreen";
import { CompletedDepositsScreen } from "./components/CompletedDepositsScreen";
import { OpenSlotScreen } from "./components/OpenSlotScreen";
import { PlaceDepositScreen } from "./components/PlaceDepositScreen";
import { CheckSlotScreen } from "./components/CheckSlotScreen";
import { EnvelopeNotAcceptedScreen } from "./components/EnvelopeNotAcceptedScreen";
import { KurierMainScreen } from "./components/KurierMainScreen";
import { ReleaseLatchScreen } from "./components/ReleaseLatchScreen";
import { OpenDoorsScreen } from "./components/OpenDoorsScreen";
import { PullOutBagScreen } from "./components/PullOutBagScreen";
import { InsertEmptyBagScreen } from "./components/InsertEmptyBagScreen";
import { CloseDoorScreen } from "./components/CloseDoorScreen";
import { CloseLatchScreen } from "./components/CloseLatchScreen";
import { UnloadCompletedScreen } from "./components/UnloadCompletedScreen";
import { UnloadingSummaryScreen } from "./components/UnloadingSummaryScreen";
import { ReplaceBagReleaseLatchScreen } from "./components/ReplaceBagReleaseLatchScreen";
import { ReplaceBagOpenDoorsScreen } from "./components/ReplaceBagOpenDoorsScreen";
import { ReplaceBagInsertEmptyScreen } from "./components/ReplaceBagInsertEmptyScreen";
import { ReplaceBagCloseDoorsScreen } from "./components/ReplaceBagCloseDoorsScreen";
import { ReplaceBagCloseLatchScreen } from "./components/ReplaceBagCloseLatchScreen";
import { ReplaceBagCompletedScreen } from "./components/ReplaceBagCompletedScreen";
import { ReplacePaperOpenDoorsScreen } from "./components/ReplacePaperOpenDoorsScreen";
import { ReplacePaperScreen } from "./components/ReplacePaperScreen";
import { ReplacePaperCloseDoorsScreen } from "./components/ReplacePaperCloseDoorsScreen";
import { ReplacePaperCompletedScreen } from "./components/ReplacePaperCompletedScreen";
import DepositInstructionScreen from "./components/DepositInstructionScreen";
import { OpenSlotInstructionScreen } from "./components/OpenSlotInstructionScreen";
import { PlaceDepositCloseSlotScreen } from "./components/PlaceDepositCloseSlotScreen";

function Navbar({ isLoggedIn, onLogout, currentScreen, onBack, loginStep, onBackToCard, onBackToQR }: { isLoggedIn: boolean; onLogout?: () => void; currentScreen?: 'qr' | 'qr-scanned' | 'open-slot' | 'check-slot' | 'place-deposit' | 'envelope-accepted' | 'envelope-not-accepted' | 'invalid-qr' | 'barcode' | 'barcode-scanned' | 'invalid-barcode' | 'success' | 'deposit' | 'deposit-instruction' | 'envelope-success' | 'envelope-rejected' | 'retry-instruction' | 'completed-deposits' | 'kurier-main' | 'release-latch' | 'open-doors' | 'pull-out-bag' | 'insert-empty-bag' | 'close-door' | 'close-latch' | 'unload-completed-screen' | 'unloading-summary' | 'unloading-completed' | 'replace-bag-release-latch' | 'replace-bag-open-doors' | 'replace-bag-insert-empty' | 'replace-bag-close-doors' | 'replace-bag-close-latch' | 'replace-bag-completed' | 'replace-paper-open-doors' | 'replace-paper' | 'replace-paper-close-doors' | 'replace-paper-completed' | 'master' | 'master-config' | 'master-ogolne' | 'master-kontrola' | 'master-users' | 'add-user' | 'edit-user' | 'master-network' | 'master-zdarzenia' | 'event-details-deposit' | 'event-details-unload' | 'event-details-log' | 'event-details-user-management' | 'event-details-scan-card' | 'event-details-scan-qr' | 'event-details-scan-barcode' | 'event-details-device-open' | 'event-details-device-close' | 'event-details-logout' | 'open-slot-instruction' | 'place-deposit-close-slot'; onBack?: () => void; loginStep?: 'card' | 'pin' | 'setup-pin' | 'logged-in'; onBackToCard?: () => void; onBackToQR?: () => void }) {
  const getTitle = () => {
    if (!isLoggedIn) return 'Logowanie do systemu';
    if (currentScreen === 'master') return 'Master';
    if (currentScreen === 'master-config') return 'Konfiguracja urządzenia';
    if (currentScreen === 'master-ogolne') return 'Ogólne';
    if (currentScreen === 'master-kontrola') return 'Kontrola systemu';
    if (currentScreen === 'master-network') return 'Sieć';
    if (currentScreen === 'master-users') return 'Zarządzanie użytkownikami';
    if (currentScreen === 'master-zdarzenia') return 'Zdarzenia';
    if (currentScreen === 'event-details-deposit') return 'Szczegóły wpłaty';
    if (currentScreen === 'event-details-unload') return 'Szczegóły rozładowania';
    if (currentScreen === 'event-details-log') return 'Szczegóły logowania';
    if (currentScreen === 'event-details-user-management') return 'Szczegóły zarządzania użytkownikami';
    if (currentScreen === 'event-details-scan-card') return 'Szczegóły skanowania karty';
    if (currentScreen === 'event-details-scan-qr') return 'Szczegóły skanowania QR';
    if (currentScreen === 'event-details-scan-barcode') return 'Szczegóły skanowania kodu kreskowego';
    if (currentScreen === 'event-details-device-open') return 'Szczegóły otwarcia urządzenia';
    if (currentScreen === 'event-details-device-close') return 'Szczegóły zamknięcia urządzenia';
    if (currentScreen === 'event-details-logout') return 'Szczegóły wylogowania';
    if (currentScreen === 'add-user') return 'Dodaj użytkownika';
    if (currentScreen === 'edit-user') return 'Edycja użytkownika';
    if (currentScreen === 'unloading-completed' || currentScreen === 'unloading-summary') return 'Zrealizowane odsilenie';
    if (currentScreen === 'kurier-main') return 'Kurier';
    if (currentScreen === 'release-latch' || currentScreen === 'open-doors' || currentScreen === 'pull-out-bag' || currentScreen === 'insert-empty-bag' || currentScreen === 'close-door' || currentScreen === 'close-latch' || currentScreen === 'unload-completed-screen') return 'Odsilenie';
    if (currentScreen === 'replace-bag-release-latch' || currentScreen === 'replace-bag-open-doors' || currentScreen === 'replace-bag-insert-empty' || currentScreen === 'replace-bag-close-doors' || currentScreen === 'replace-bag-close-latch' || currentScreen === 'replace-bag-completed') return 'Wymiana worka';
    if (currentScreen === 'replace-paper-open-doors' || currentScreen === 'replace-paper' || currentScreen === 'replace-paper-close-doors' || currentScreen === 'replace-paper-completed') return 'Wymiana papieru';
    if (currentScreen === 'completed-deposits') return 'Zrealizowane depozyty';
    if (currentScreen === 'deposit' || currentScreen === 'envelope-success' || currentScreen === 'deposit-instruction') return 'Deponowanie';
    if (currentScreen === 'success') return 'Skanowanie kod kreskowy';
    if (currentScreen === 'barcode') return 'Skanowanie kod kreskowy';
    if (currentScreen === 'barcode-scanned') return 'Skanowanie kod kreskowy';
    if (currentScreen === 'invalid-barcode') return 'Skanowanie kod kreskowy';
    if (currentScreen === 'qr-scanned') return 'Skanowanie QR';
    if (currentScreen === 'open-slot') return 'Skanowanie QR';
    if (currentScreen === 'check-slot') return 'Skanowanie QR';
    if (currentScreen === 'place-deposit') return 'Skanowanie QR';
    if (currentScreen === 'envelope-accepted') return 'Skanowanie QR';
    if (currentScreen === 'envelope-not-accepted') return 'Skanowanie QR';
    if (currentScreen === 'invalid-qr') return 'Skanowanie QR';
    return 'Skanowanie QR';
  };

  return (
    <div className="w-full bg-[#1e2939] h-[64px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Navbar">
      <div className="px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          {(currentScreen === 'release-latch' || currentScreen === 'open-doors' || currentScreen === 'pull-out-bag' || currentScreen === 'insert-empty-bag' || currentScreen === 'close-door' || currentScreen === 'close-latch' || currentScreen === 'unload-completed-screen' || currentScreen === 'unloading-completed' || currentScreen === 'unloading-summary' || currentScreen === 'replace-bag-release-latch' || currentScreen === 'replace-bag-open-doors' || currentScreen === 'replace-bag-insert-empty' || currentScreen === 'replace-bag-close-doors' || currentScreen === 'replace-bag-close-latch' || currentScreen === 'replace-bag-completed' || currentScreen === 'replace-paper-open-doors' || currentScreen === 'replace-paper' || currentScreen === 'replace-paper-close-doors' || currentScreen === 'replace-paper-completed' || currentScreen === 'master-config' || currentScreen === 'master-ogolne' || currentScreen === 'master-kontrola' || currentScreen === 'master-users' || currentScreen === 'add-user' || currentScreen === 'edit-user' || currentScreen === 'master-network' || currentScreen === 'master-zdarzenia' || currentScreen === 'event-details-deposit' || currentScreen === 'event-details-unload' || currentScreen === 'event-details-log' || currentScreen === 'event-details-user-management' || currentScreen === 'event-details-scan-card' || currentScreen === 'event-details-scan-qr' || currentScreen === 'event-details-scan-barcode' || currentScreen === 'event-details-device-open' || currentScreen === 'event-details-device-close' || currentScreen === 'event-details-logout') && onBack && (
            <button
              onClick={onBack}
              className="bg-[rgba(255,255,255,0.1)] flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M15.8333 10H4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">Wróć</span>
            </button>
          )}
          {(currentScreen === 'barcode' || currentScreen === 'barcode-scanned' || currentScreen === 'invalid-barcode') && onBackToQR && (
            <button
              onClick={onBackToQR}
              className="bg-[rgba(255,255,255,0.1)] flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M15.8333 10H4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">Wróć</span>
            </button>
          )}
          {(loginStep === 'pin' || loginStep === 'setup-pin') && onBackToCard && (
            <button
              onClick={onBackToCard}
              className="bg-[rgba(255,255,255,0.1)] flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M15.8333 10H4.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">Wróć</span>
            </button>
          )}
          <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic text-[18px] text-white">
            {getTitle()}
          </p>
        </div>
        {isLoggedIn && (
          <button
            onClick={onLogout}
            className="bg-[rgba(251,44,54,0.9)] flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-[rgba(251,44,54,1)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d="M13.3333 14.1667L17.5 10L13.3333 5.83333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M17.5 10H7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span className="font-['Arial:Regular',sans-serif] text-[14px] text-white">Wyloguj</span>
          </button>
        )}
      </div>
    </div>
  );
}

function LoginContent({ login, setLogin, pin, setPin, activeField, setActiveField, handleKeyPress, handleBackspace }: any) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="AddDrumAnimation">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <Container11 login={login} setLogin={setLogin} pin={pin} setPin={setPin} activeField={activeField} setActiveField={setActiveField} handleKeyPress={handleKeyPress} handleBackspace={handleBackspace} />
      </div>
    </div>
  );
}

function DepositContent({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 10000); // 10 секунд
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Container with instructions */}
        <div className="absolute bg-blue-50 box-border content-stretch flex h-[319px] items-center justify-center left-[56px] p-[4px] rounded-[14px] top-[68px] w-[862px]">
          <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
          <ol className="[white-space-collapse:collapse] absolute block font-['Arial:Regular',sans-serif] leading-[0] left-[139.5px] list-decimal not-italic text-[#2b7fff] text-[18px] text-center text-nowrap top-[75px] translate-x-[-50%]" start="1">
            <li className="list-inside ms-[27px]">
              <span className="leading-[27px]">Otwórz wrzutnię</span>
            </li>
          </ol>
          <ol className="[white-space-collapse:collapse] absolute block font-['Arial:Regular',sans-serif] leading-[0] left-[430px] list-decimal not-italic text-[#2b7fff] text-[18px] text-center text-nowrap top-[75px] translate-x-[-50%]" start="2">
            <li className="list-inside ms-[27px]">
              <span className="leading-[27px]">Umieść depozyt</span>
            </li>
          </ol>
          <ol className="[white-space-collapse:collapse] absolute block font-['Arial:Regular',sans-serif] leading-[0] left-[723.5px] list-decimal not-italic text-[#2b7fff] text-[18px] text-center text-nowrap top-[75px] translate-x-[-50%]" start="3">
            <li className="list-inside ms-[27px]">
              <span className="leading-[27px]">Zamknij wrzutnię</span>
            </li>
          </ol>
        </div>
        
        {/* Drum 1 - closed */}
        <div className="absolute contents left-[134px] top-[198px]">
          <div className="absolute bg-[#314158] h-[142px] left-[134px] rounded-[10px] top-[198px] w-[140.006px]" />
          <div className="absolute bg-[#1d293d] h-[42.6px] left-[153.6px] top-[280.36px] w-[100.804px]" />
          <div className="absolute bg-neutral-950 h-[32.66px] left-[169px] top-[215.04px] w-[70.003px]" />
          <div className="absolute bg-[#d1d5dc] h-[15.62px] left-[169px] top-[257.64px] w-[26.601px]" />
          <div className="absolute bg-[#cad5e2] h-[15.62px] left-[212.4px] top-[257.64px] w-[26.601px]" />
        </div>
        
        {/* Drum 2 - with package opening */}
        <div className="absolute contents left-[427px] top-[198px]">
          <div className="absolute bg-[#314158] h-[142px] left-[427px] rounded-[10px] top-[198px] w-[140.006px]" />
          <div className="absolute bg-[#1d293d] h-[42.6px] left-[446.6px] top-[280.36px] w-[100.804px]" />
          <div className="absolute bg-neutral-950 h-[32.66px] left-[462px] top-[215.04px] w-[70.003px]" />
          <div className="absolute bg-[#d1d5dc] h-[15.62px] left-[462px] top-[257.64px] w-[26.601px]" />
          <div className="absolute bg-[#cad5e2] h-[15.62px] left-[505.4px] top-[257.64px] w-[26.601px]" />
          <div className="absolute bg-white h-[24px] left-[496px] top-[286px] w-[46px]" />
        </div>
        
        {/* Drum 3 - closed with arrow */}
        <div className="absolute h-[142px] left-[710px] top-[194px] w-[140.006px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 142">
            <g>
              <rect fill="#314158" height="142" rx="10" width="140.006" />
              <rect fill="#1D293D" height="42.6" width="100.804" x="19.6017" y="82.36" />
              <rect fill="#0A0A0A" height="32.66" width="70.0029" x="35.0015" y="17.04" />
              <rect fill="#D1D5DC" height="15.62" width="26.6011" x="35.0015" y="59.64" />
              <rect fill="#CAD5E2" height="15.62" width="26.6011" x="78.4024" y="59.64" />
              <rect fill="white" height="24" width="46" x="69" y="86" />
              <path d={svgPathsDeponowanie.p1ac33900} fill="white" />
            </g>
          </svg>
        </div>
        
        {/* Middle line */}
        <div className="absolute h-0 left-[480px] top-[317px] w-[33.5px]">
          <div className="absolute bottom-[-2.19px] left-0 right-0 top-[-2.19px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 5">
              <path d="M0 2.19104H33.5" stroke="#155DFC" strokeWidth="4.38209" />
            </svg>
          </div>
        </div>
        
        {/* Group with arrows - left side */}
        <div className="absolute contents left-[56px] top-[68px]">
          <div className="absolute h-0 left-[190px] top-[287px] w-[33.5px]">
            <div className="absolute bottom-[-2.19px] left-0 right-0 top-[-2.19px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 5">
                <path d="M0 2.19104H33.5" stroke="#155DFC" strokeWidth="4.38209" />
              </svg>
            </div>
          </div>
          
          {/* Right line */}
          <div className="absolute h-0 left-[762px] top-[310px] w-[33.5px]">
            <div className="absolute bottom-[-2.19px] left-0 right-0 top-[-2.19px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 5">
                <path d="M0 2.19104H33.5" stroke="#155DFC" strokeWidth="4.38209" />
              </svg>
            </div>
          </div>
          
          {/* Curved arrow */}
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025632601231336594)+(var(--transform-inner-height)*0.999671459197998)))] items-center justify-center left-[178px] top-[297px] w-[calc(1px*((var(--transform-inner-height)*0.025632601231336594)+(var(--transform-inner-width)*0.999671459197998)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19.5" } as React.CSSProperties}>
            <div className="flex-none rotate-[358.531deg]">
              <div className="h-[19.506px] relative w-0">
                <div className="absolute bottom-[-11.23%] left-[-16.13px] right-[-16.13px] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 22">
                    <path d={svgPathsDeponowanie.pc2ee780} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnvelopeSuccessContent({ onComplete, barcode, addToDeposits, hasQrData }: { onComplete: () => void; barcode: string; addToDeposits: (code: string, hasQr: boolean) => void; hasQrData: boolean }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      addToDeposits(barcode, hasQrData);
      onComplete();
    }, 10000); // 10 секунд
    
    return () => clearTimeout(timer);
  }, [onComplete, barcode, addToDeposits, hasQrData]);
  
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <div className="absolute bg-green-50 h-[319px] left-[297px] rounded-[14px] top-[111px] w-[400px]">
          <div className="absolute h-[319px] left-0 rounded-[14px] top-0 w-[400px]">
            <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
          
          <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]">
            {/* Success Icon */}
            <div className="absolute content-stretch flex flex-col items-start left-[80.63px] size-[180px] top-[122px]">
              <div className="h-[180px] overflow-clip relative shrink-0 w-full">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 105">
                      <path d={svgPathsEnvelope.p29e74800} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text */}
            <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68.5px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Koperta została przyjęta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletedDepositsContent({ deposits, onNextDeposit, onFinish }: { deposits: string[]; onNextDeposit: () => void; onFinish: () => void }) {
  const [isPrintChecked, setIsPrintChecked] = useState(false);
  
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Deposit Items List */}
        <div className="absolute content-stretch flex flex-col gap-[8px] left-[32px] top-[18px] w-[930px] overflow-y-auto max-h-[258px]">
          {deposits.map((code, index) => (
            <div key={index} className="bg-white h-[60px] rounded-[10px] shrink-0 w-[930px] relative">
              <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start pb-[2px] pt-[14px] px-[14px] w-[930px]">
                <div className="content-stretch flex gap-[12px] h-[32px] items-center w-full">
                  <div className="bg-slate-100 rounded-[3.35544e+07px] shrink-0 size-[28px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 size-[28px]">
                      <p className="font-['Arial:Bold',sans-serif] leading-[19.5px] not-italic text-[#45556c] text-[13px] text-nowrap whitespace-pre">{index + 1}</p>
                    </div>
                  </div>
                  <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-neutral-950 text-nowrap whitespace-pre">{code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Next Deposit Button */}
        <button 
          onClick={onNextDeposit}
          className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[32px] pl-0 pr-[0.016px] py-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[292px] w-[930px] hover:bg-[#1250e0] transition-colors"
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 3.33333V12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
          <span className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Następny depozyt</span>
        </button>
        
        {/* Print Checkbox */}
        <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[63.5px] items-start left-[32px] pb-px pt-[13px] px-[13px] rounded-[10px] top-[362px] w-[930px]">
          <div aria-hidden="true" className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <label className="content-stretch flex gap-[12px] h-[37.5px] items-center w-full cursor-pointer">
            <div 
              className="relative rounded-[4px] shrink-0 size-[20px] cursor-pointer"
              onClick={() => setIsPrintChecked(!isPrintChecked)}
            >
              <div aria-hidden="true" className="absolute border-2 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[4px]" />
              {isPrintChecked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8L6.5 11.5L13 5" stroke="#2b7fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
            <span className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[#2b7fff] text-[14px] text-nowrap whitespace-pre">Wydruk</span>
          </label>
        </div>
        
        {/* Finish Button */}
        <button 
          onClick={onFinish}
          className="absolute bg-[#030213] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[32px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[443px] w-[930px] hover:bg-[#1a1a2e] transition-colors"
        >
          <span className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic text-[14px] text-nowrap text-white whitespace-pre">Zakończ</span>
        </button>
      </div>
    </div>
  );
}



function UnloadingCompletedContent({ deposits, onFinish }: { deposits: string[]; onFinish: () => void }) {
  const [isPrintChecked, setIsPrintChecked] = useState(false);
  
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Deposits List */}
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[196px] left-[32px] top-[20px] w-[930px]">
          {deposits.map((barcode, index) => (
            <div key={barcode} className="bg-white h-[60px] relative rounded-[10px] shrink-0 w-[930px]">
              <div aria-hidden="true" className="absolute border-2 border-slate-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[60px] items-start pb-[2px] pt-[14px] px-[14px] relative w-[930px]">
                <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full">
                  <div className="bg-slate-100 relative rounded-[3.35544e+07px] shrink-0 size-[28px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[28px]">
                      <div className="h-[19.5px] relative shrink-0 w-[7.234px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[7.234px]">
                          <p className="absolute font-['Arial:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#45556c] text-[13px] text-nowrap top-0 whitespace-pre">{index + 1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[21px] relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{barcode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Print Checkbox */}
        <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[63.5px] items-start left-[32px] pb-px pt-[13px] px-[13px] rounded-[10px] top-[362px] w-[930px]">
          <div aria-hidden="true" className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="content-stretch flex gap-[12px] h-[37.5px] items-center relative shrink-0 w-full cursor-pointer" onClick={() => setIsPrintChecked(!isPrintChecked)}>
            <div className="relative rounded-[4px] shrink-0 size-[20px]">
              <div aria-hidden="true" className="absolute border-2 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[4px]" />
              {isPrintChecked && (
                <div className="flex flex-row items-center justify-center size-full">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="#2b7fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute h-[37.5px] left-[32px] top-0 w-[271.531px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37.5px] items-center relative w-[271.531px]">
                <div className="h-[22px] relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[22px] items-start relative">
                    <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2b7fff] text-[14px] text-nowrap whitespace-pre">Wydruk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Finish Button */}
        <button 
          onClick={onFinish}
          className="absolute bg-[#030213] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[32px] pl-0 pr-[0.016px] py-0 rounded-[8px] top-[443px] w-[930px] cursor-pointer hover:bg-[#1a1a2e] transition-colors"
        >
          <div className="h-[21px] relative shrink-0 w-[107.391px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[107.391px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Zakończ</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function BagReplacedContent() {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <div className="absolute bg-green-50 h-[319px] left-[297px] rounded-[14px] top-[111px] w-[400px]">
          <div className="absolute h-[319px] left-0 rounded-[14px] top-0 w-[400px]">
            <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
          <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]">
            <div className="absolute content-stretch flex flex-col items-start left-[80.63px] size-[180px] top-[122px]">
              <div className="h-[180px] overflow-clip relative shrink-0 w-full">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 105">
                      <path d={svgPathsBagSuccess.p29e74800} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Wymieniono worek</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BagReplacementContent() {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        {/* Content from WymianaWorka */}
        <div className="box-border content-stretch flex flex-col h-full items-start pb-0 pl-[50px] pr-[49px] pt-[61px]">
          <div className="bg-blue-50 h-[355px] relative rounded-[14px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col h-[355px] items-start pb-[4px] pt-[36px] px-[36px] relative w-full">
                {/* 4 Steps Grid */}
                <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[283px] relative shrink-0 w-full">
                  {/* Step 1: Otwórz drzwi */}
                  <div className="[grid-area:1_/_1] relative shrink-0">
                    <div className="absolute h-[27px] left-[5px] top-0 w-[176px]">
                      <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[104.016px]">
                        <ol className="[white-space-collapse:collapse] block font-['Arial:Regular',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[#2b7fff] text-[18px] text-center text-nowrap" start="1">
                          <li className="list-inside ms-[27px]">
                            <span className="leading-[27px]">Otwórz drzwi</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] rounded-[10px] top-[51px] w-[140px]">
                      <div className="absolute h-[78px] left-[35px] top-[32px] w-[70px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
                          <g>
                            <path d={svgPathsBag.p20483a80} fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute bg-[#d9d9d9] left-[111px] rounded-[3.35544e+07px] size-[17px] top-[62.5px]" />
                    </div>
                  </div>

                  {/* Step 2: Wyciągnij worek */}
                  <div className="[grid-area:1_/_2] relative shrink-0">
                    <div className="absolute h-[27px] left-[-9.5px] top-0 w-[175px]">
                      <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[129.891px]">
                        <ol className="[white-space-collapse:collapse] block font-['Arial:Regular',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[#2b7fff] text-[18px] text-center text-nowrap" start="2">
                          <li className="list-inside ms-[27px]">
                            <span className="leading-[27px]">Wyciągnij worek</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] overflow-clip rounded-[10px] top-[51px] w-[140px]">
                      <div className="absolute bg-[#030213] h-[119px] left-[12px] rounded-[10px] top-[11px] w-[115px]" />
                      <div className="absolute bg-[#9d8364] h-[86px] left-[45px] rounded-[10px] top-[28px] w-[53.5px]" />
                      <div className="absolute h-[78px] left-[35px] top-[55px] w-[70px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
                          <g>
                            <path d={svgPathsBag.p2b507180} fill="white" />
                            <path d={svgPathsBag.p2b507180} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Włóż pusty worek */}
                  <div className="[grid-area:1_/_3] relative shrink-0">
                    <div className="absolute h-[27px] left-[10.22px] top-0 w-[161.062px]">
                      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-[81px] not-italic text-[#2b7fff] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">3. Włóż pusty worek</p>
                    </div>
                    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] overflow-clip rounded-[10px] top-[51px] w-[140px]">
                      <div className="absolute bg-[#030213] h-[119px] left-[12px] rounded-[10px] top-[11px] w-[115px]" />
                      <div className="absolute bg-[#9d8364] h-[86px] left-[45px] rounded-[10px] top-[28px] w-[53.5px]" />
                      <div className="absolute h-[78px] left-[35px] top-[55px] w-[70px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
                          <g clipPath="url(#clip0_bag_up)">
                            <path d={svgPathsBag.p8f0f100} fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_bag_up">
                              <rect fill="white" height="78" width="70" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Zamknij drzwi */}
                  <div className="[grid-area:1_/_4] relative shrink-0">
                    <div className="absolute h-[27px] left-[25.73px] top-0 w-[130.031px]">
                      <div className="absolute content-stretch flex h-[20px] items-start left-[20.02px] top-[3px] w-[110.016px]">
                        <ol className="absolute block font-['Arial:Regular',sans-serif] leading-[0] left-[32.75px] list-decimal not-italic text-[#2b7fff] text-[18px] text-center top-0 translate-x-[-50%] w-[140px]" start="4">
                          <li className="list-inside ms-[27px]">
                            <span className="leading-[27px]">Zamknij drzwi</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="absolute bg-[#314158] h-[142px] left-[20.75px] rounded-[10px] top-[51px] w-[140px]">
                      <div className="absolute h-[78px] left-[35px] top-[32px] w-[70px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 78">
                          <g>
                            <path d={svgPathsBag.p26a05f00} fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div className="absolute bg-[#d9d9d9] left-[111px] rounded-[3.35544e+07px] size-[17px] top-[62.5px]" />
                    </div>
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

function SuccessContent() {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]">
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        <div className="absolute bg-green-50 h-[319px] left-[297px] rounded-[14px] top-[111px] w-[400px]">
          <div className="absolute h-[319px] left-0 rounded-[14px] top-0 w-[400px]">
            <div aria-hidden="true" className="absolute border-4 border-green-500 border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
          <div className="absolute h-[424px] left-[29.38px] top-[-52.5px] w-[341.25px]">
            <div className="absolute content-stretch flex flex-col items-start left-[80.63px] size-[180px] top-[122px]">
              <div className="h-[180px] overflow-clip relative shrink-0 w-full">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 105">
                      <path d="M131.25 11.25L48.75 93.75L11.25 56.25" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[24px] left-[93.63px] top-[12.5px] w-[136.938px]">
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Kod kreskowy zeskanowany</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



interface User {
  id: string;
  role: string;
  status: 'aktywny' | 'nieaktywny';
  isFirstLogin?: boolean;
  customPin?: string;
}

export default function App() {
  const [login, setLogin] = useState('');
  const [pin, setPin] = useState('');
  const [cardCode, setCardCode] = useState('');
  const [loginStep, setLoginStep] = useState<'card' | 'pin' | 'setup-pin' | 'logged-in'>('card');
  const [activeField, setActiveField] = useState('login');
  const [scale, setScale] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'deposit' | 'unloading' | 'master'>('deposit');
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<'qr' | 'qr-scanned' | 'open-slot' | 'check-slot' | 'place-deposit' | 'envelope-accepted' | 'envelope-not-accepted' | 'barcode' | 'barcode-scanned' | 'success' | 'deposit' | 'deposit-instruction' | 'envelope-success' | 'envelope-rejected' | 'retry-instruction' | 'completed-deposits' | 'kurier-main' | 'release-latch' | 'open-doors' | 'pull-out-bag' | 'insert-empty-bag' | 'close-door' | 'close-latch' | 'unload-completed-screen' | 'unloading-summary' | 'unloading-completed' | 'replace-bag-release-latch' | 'replace-bag-open-doors' | 'replace-bag-insert-empty' | 'replace-bag-close-doors' | 'replace-bag-close-latch' | 'replace-bag-completed' | 'replace-paper-open-doors' | 'replace-paper' | 'replace-paper-close-doors' | 'replace-paper-completed' | 'master' | 'master-config' | 'master-ogolne' | 'master-kontrola' | 'master-users' | 'add-user' | 'edit-user' | 'master-network' | 'master-zdarzenia' | 'event-details-deposit' | 'event-details-unload' | 'event-details-log' | 'event-details-scan-card' | 'event-details-scan-qr' | 'event-details-scan-barcode' | 'event-details-device-open' | 'event-details-device-close' | 'event-details-logout' | 'invalid-qr' | 'invalid-barcode' | 'open-slot-instruction' | 'place-deposit-close-slot'>('qr');
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedEventHasQrData, setSelectedEventHasQrData] = useState<boolean>(true);
  const [barcode, setBarcode] = useState('');
  const [hasScannedQr, setHasScannedQr] = useState(false);
  const [envelopeNumber, setEnvelopeNumber] = useState('A23909090');
  const [isRetryFlow, setIsRetryFlow] = useState(false);
  const [isBarcodeFlow, setIsBarcodeFlow] = useState(false); // Флаг для потоку штрих-коду
  
  // Функція генерації рандомного номера конверти
  const generateEnvelopeNumber = () => {
    const prefix = 'A';
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000; // 9-значне число
    return `${prefix}${randomNumber}`;
  };
  // All deposited barcodes (persisted in localStorage for Kurier to see)
  const [depositedBarcodes, setDepositedBarcodes] = useState<string[]>(() => {
    const saved = localStorage.getItem('depositedBarcodes');
    return saved ? JSON.parse(saved) : [];
  });
  // Session-specific deposits for Klient (to show only current session deposits)
  const [sessionDeposits, setSessionDeposits] = useState<Array<{ envelopeNumber: string; status: 'Potwierdzone' | 'Niepotwierdzone' }>>([]);
  // Unloaded deposits (saved before clearing for display on unloading-completed screen)
  const [unloadedDeposits, setUnloadedDeposits] = useState<string[]>([]);
  const [users, setUsers] = useState<User[]>(() => {
    // Load from localStorage on initial mount
    const saved = localStorage.getItem('users');
    if (saved) {
      return JSON.parse(saved);
    }
    // Default users if no users exist
    return [
      { id: '1111', role: 'Master', status: 'aktywny' }
    ];
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Clear zdarzenia events, transaction counter, deposited barcodes, and reset users (run once on mount)
  useEffect(() => {
    // Force clear everything related to events and transactions
    localStorage.removeItem('zdarzenia_events');
    localStorage.removeItem('transaction_counter');
    localStorage.removeItem('depositedBarcodes');
    localStorage.setItem('transaction_counter', '1');
    localStorage.setItem('depositedBarcodes', JSON.stringify([]));
    const defaultUsers = [{ id: '1111', role: 'Master', status: 'aktywny' }];
    localStorage.setItem('users', JSON.stringify(defaultUsers));
    setUsers(defaultUsers);
    setDepositedBarcodes([]);
  }, []);

  // Save depositedBarcodes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('depositedBarcodes', JSON.stringify(depositedBarcodes));
  }, [depositedBarcodes]);

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Function to add deposit event to zdarzenia
  const addDepositEvent = (barcodeValue: string, hasQr: boolean, envelopeNum: string, depositStatus: 'Potwierdzona' | 'Niepotwierdzona' = 'Potwierdzona') => {
    const EVENTS_STORAGE_KEY = 'zdarzenia_events';
    const TRANSACTION_COUNTER_KEY = 'transaction_counter';
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = stored ? JSON.parse(stored) : [];
      
      // Get and increment transaction counter
      let transactionId = 1;
      const storedCounter = localStorage.getItem(TRANSACTION_COUNTER_KEY);
      if (storedCounter) {
        transactionId = parseInt(storedCounter, 10);
      }
      // Save incremented counter for next transaction
      localStorage.setItem(TRANSACTION_COUNTER_KEY, (transactionId + 1).toString());
      
      // Get device ID from device config
      let deviceId = 'DEV-2025-001'; // Default
      const deviceConfig = localStorage.getItem('device_config');
      if (deviceConfig) {
        try {
          const config = JSON.parse(deviceConfig);
          deviceId = config.deviceId || deviceId;
        } catch {
          // Use default
        }
      }
      
      // Check network connection status
      const networkSettings = localStorage.getItem('networkSettings');
      let isConnected = false;
      
      if (networkSettings) {
        try {
          const settings = JSON.parse(networkSettings);
          isConnected = 
            settings.ip === '192.168.1.3' && 
            settings.port === '8080' && 
            settings.login === 'admin' && 
            settings.password === 'konsmetal';
        } catch {
          isConnected = false;
        }
      }
      
      // Create timestamp in current moment
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
      // Create new event with status based on connection
      const newEvent = {
        id: Date.now(), // Use timestamp as unique ID
        date: timestamp,
        type: 'deposit' as const,
        status: isConnected ? ('synced' as const) : ('not-sent' as const),
        barcode: barcodeValue,
        hasQrData: hasQr,
        envelopeNumber: envelopeNum,
        deviceId: deviceId,
        timestamp: timestamp,
        userId: currentUserId,
        transactionId: transactionId,
        depositStatus: depositStatus
      };
      
      // Add to beginning of array
      events.unshift(newEvent);
      
      // Save back to localStorage
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving deposit event:', error);
    }
  };

  // Function to add login event to zdarzenia
  const addLoginEvent = (userId: string, userRole: string) => {
    const EVENTS_STORAGE_KEY = 'zdarzenia_events';
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = stored ? JSON.parse(stored) : [];
      
      // Get device ID from device config
      let deviceId = 'DEV-2025-001'; // Default
      const deviceConfig = localStorage.getItem('device_config');
      if (deviceConfig) {
        try {
          const config = JSON.parse(deviceConfig);
          deviceId = config.deviceId || deviceId;
        } catch {
          // Use default
        }
      }
      
      // Check network connection status
      const networkSettings = localStorage.getItem('networkSettings');
      let isConnected = false;
      
      if (networkSettings) {
        try {
          const settings = JSON.parse(networkSettings);
          isConnected = 
            settings.ip === '192.168.1.3' && 
            settings.port === '8080' && 
            settings.login === 'admin' && 
            settings.password === 'konsmetal';
        } catch {
          isConnected = false;
        }
      }
      
      // Create timestamp in current moment
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
      // Create new event with status based on connection
      const newEvent = {
        id: Date.now(), // Use timestamp as unique ID
        date: timestamp,
        type: 'log' as const,
        status: isConnected ? ('synced' as const) : ('not-sent' as const),
        userId: userId,
        userRole: userRole,
        deviceId: deviceId,
        timestamp: timestamp
      };
      
      // Add to beginning of array
      events.unshift(newEvent);
      
      // Save back to localStorage
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving login event:', error);
    }
  };

  // Function to add unload event to zdarzenia
  const addUnloadEvent = () => {
    const EVENTS_STORAGE_KEY = 'zdarzenia_events';
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = stored ? JSON.parse(stored) : [];
      
      // Get device ID from device config
      let deviceId = 'DEV-2025-001'; // Default
      const deviceConfig = localStorage.getItem('device_config');
      if (deviceConfig) {
        try {
          const config = JSON.parse(deviceConfig);
          deviceId = config.deviceId || deviceId;
        } catch {
          // Use default
        }
      }
      
      // Check network connection status
      const networkSettings = localStorage.getItem('networkSettings');
      let isConnected = false;
      
      if (networkSettings) {
        try {
          const settings = JSON.parse(networkSettings);
          isConnected = 
            settings.ip === '192.168.1.3' && 
            settings.port === '8080' && 
            settings.login === 'admin' && 
            settings.password === 'konsmetal';
        } catch {
          isConnected = false;
        }
      }
      
      // Create timestamp in current moment
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
      // Create new event with status based on connection
      const newEvent = {
        id: Date.now(), // Use timestamp as unique ID
        date: timestamp,
        type: 'unload' as const,
        status: isConnected ? ('synced' as const) : ('not-sent' as const),
        deviceId: deviceId,
        timestamp: timestamp
      };
      
      // Add to beginning of array
      events.unshift(newEvent);
      
      // Save back to localStorage
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving unload event:', error);
    }
  };

  // Function to add user management event to zdarzenia
  const addUserManagementEvent = (action: 'add' | 'edit' | 'delete', userId: string, userRole: string) => {
    const EVENTS_STORAGE_KEY = 'zdarzenia_events';
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = stored ? JSON.parse(stored) : [];
      
      // Get device ID from device config
      let deviceId = 'DEV-2025-001'; // Default
      const deviceConfig = localStorage.getItem('device_config');
      if (deviceConfig) {
        try {
          const config = JSON.parse(deviceConfig);
          deviceId = config.deviceId || deviceId;
        } catch {
          // Use default
        }
      }
      
      // Check network connection status
      const networkSettings = localStorage.getItem('networkSettings');
      let isConnected = false;
      
      if (networkSettings) {
        try {
          const settings = JSON.parse(networkSettings);
          isConnected = 
            settings.ip === '192.168.1.3' && 
            settings.port === '8080' && 
            settings.login === 'admin' && 
            settings.password === 'konsmetal';
        } catch {
          isConnected = false;
        }
      }
      
      // Create timestamp in current moment
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
      // Create new event with status based on connection
      const newEvent = {
        id: Date.now() + Math.random(), // Use timestamp + random as unique ID
        date: timestamp,
        type: 'user-management' as const,
        action: action,
        status: isConnected ? ('synced' as const) : ('not-sent' as const),
        userId: userId,
        userRole: userRole,
        deviceId: deviceId,
        timestamp: timestamp,
        performedBy: currentUserId
      };
      
      // Add to beginning of array
      events.unshift(newEvent);
      
      // Save back to localStorage
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving user management event:', error);
    }
  };

  // Generic function to add any event to zdarzenia
  const addGenericEvent = (eventType: string, additionalData: any = {}) => {
    const EVENTS_STORAGE_KEY = 'zdarzenia_events';
    try {
      const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
      const events = stored ? JSON.parse(stored) : [];
      
      // Get device ID from device config
      let deviceId = 'DEV-2025-001'; // Default
      const deviceConfig = localStorage.getItem('device_config');
      if (deviceConfig) {
        try {
          const config = JSON.parse(deviceConfig);
          deviceId = config.deviceId || deviceId;
        } catch {
          // Use default
        }
      }
      
      // Check network connection status
      const networkSettings = localStorage.getItem('networkSettings');
      let isConnected = false;
      
      if (networkSettings) {
        try {
          const settings = JSON.parse(networkSettings);
          isConnected = 
            settings.ip === '192.168.1.3' && 
            settings.port === '8080' && 
            settings.login === 'admin' && 
            settings.password === 'konsmetal';
        } catch {
          isConnected = false;
        }
      }
      
      // Create timestamp in current moment
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
      
      // Create new event with status based on connection
      const newEvent = {
        id: Date.now() + Math.random(), // Use timestamp + random as unique ID
        date: timestamp,
        type: eventType,
        status: isConnected ? ('synced' as const) : ('not-sent' as const),
        deviceId: deviceId,
        timestamp: timestamp,
        userId: currentUserId,
        ...additionalData
      };
      
      // Add to beginning of array
      events.unshift(newEvent);
      
      // Save back to localStorage
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleKeyPress = (key: string) => {
    if (activeField === 'login') {
      setLogin(prev => prev + key);
    } else {
      setPin(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    if (activeField === 'login') {
      setLogin(prev => prev.slice(0, -1));
    } else {
      setPin(prev => prev.slice(0, -1));
    }
  };

  const handleLogout = () => {
    // Log logout event
    addGenericEvent('logout', {
      logoutUserId: currentUserId,
      userType: userType
    });
    
    // Clear session deposits (but keep depositedBarcodes for Kurier)
    setSessionDeposits([]);
    
    setIsLoggedIn(false);
    setUserType('deposit');
    setCurrentUserId('');
    setCurrentScreen('qr');
    setLogin('');
    setPin('');
    setCardCode('');
    setLoginStep('card');
    setBarcode('');
    setActiveField('login');
    setIsBarcodeFlow(false);
    setIsRetryFlow(false);
  };

  // Handle card code submission
  const handleCardSubmit = (code: string) => {
    // Check if this user exists and is active
    const user = users.find(u => u.id === code && u.status === 'aktywny');
    
    // Log card scan event
    addGenericEvent('scan-card', {
      cardCode: code,
      scanSuccess: !!user,
      userRole: user?.role || 'unknown'
    });
    
    if (!user) {
      // User not found or inactive - don't proceed, do nothing
      return;
    }
    
    setCardCode(code);
    
    if (user.isFirstLogin) {
      // Go directly to setup PIN screen for first-time users
      setLoginStep('setup-pin');
    } else {
      // Go to PIN input screen for existing users
      setLoginStep('pin');
    }
  };

  // Handle PIN submission - called on every key press
  const handlePinEnter = (enteredPin: string) => {
    // Check if cardCode matches PIN and user exists
    const user = users.find(u => u.id === cardCode && u.status === 'aktywny');
    
    if (user) {
      // Check custom PIN or default PIN
      const correctPin = user.customPin || user.id;
      if (correctPin === enteredPin) {
        // Auto-login on correct PIN
        setIsLoggedIn(true);
        setLoginStep('logged-in');
        setCurrentUserId(user.id);
        
        // Add login event
        addLoginEvent(user.id, user.role);
        
        // Determine user type based on role
        if (user.role === 'Master') {
          setUserType('master');
          setCurrentScreen('master');
        } else if (user.role === 'Kurier') {
          setUserType('unloading');
          setCurrentScreen('kurier-main');
        } else if (user.role === 'Klient') {
          setUserType('deposit');
          setCurrentScreen('qr');
        }
      }
      // Don't reset PIN on failed login - let user continue typing
    } else {
      // Don't reset PIN on failed login
      setPin('');
    }
  };

  // Handle PIN setup for first login
  const handlePinSetup = (newPin: string) => {
    const userIndex = users.findIndex(u => u.id === cardCode);
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        customPin: newPin,
        isFirstLogin: false
      };
      setUsers(updatedUsers);
      
      // Log in the user
      setIsLoggedIn(true);
      setLoginStep('logged-in');
      
      const user = updatedUsers[userIndex];
      setCurrentUserId(user.id);
      
      // Add login event
      addLoginEvent(user.id, user.role);
      
      // Determine user type based on role
      if (user.role === 'Master') {
        setUserType('master');
        setCurrentScreen('master');
      } else if (user.role === 'Kurier') {
        setUserType('unloading');
        setCurrentScreen('kurier-main');
      } else if (user.role === 'Klient') {
        setUserType('deposit');
        setCurrentScreen('qr');
      }
    }
  };



  // Auto-transition to deposit screen after success
  useEffect(() => {
    if (currentScreen === 'success') {
      const timer = setTimeout(() => {
        setCurrentScreen('deposit');
      }, 10000); // 10 секунд
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight - 64; // Subtract navbar height
        const contentWidth = 1024.5;
        const contentHeight = 600.297;
        
        // Calculate scale to fit window
        const scaleX = (windowWidth - 40) / contentWidth; // 40px padding
        const scaleY = (windowHeight - 40) / contentHeight;
        const newScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%
        
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        currentScreen={currentScreen}
        loginStep={loginStep}
        onBackToCard={() => setLoginStep('card')}
        onBackToQR={() => setCurrentScreen('qr')}
        onBack={() => {
          if (currentScreen === 'release-latch' || currentScreen === 'open-doors' || currentScreen === 'pull-out-bag' || currentScreen === 'insert-empty-bag' || currentScreen === 'close-door' || currentScreen === 'close-latch' || currentScreen === 'unload-completed-screen' || currentScreen === 'unloading-completed' || currentScreen === 'unloading-summary' || currentScreen === 'replace-bag-release-latch' || currentScreen === 'replace-bag-open-doors' || currentScreen === 'replace-bag-insert-empty' || currentScreen === 'replace-bag-close-doors' || currentScreen === 'replace-bag-close-latch' || currentScreen === 'replace-bag-completed' || currentScreen === 'replace-paper-open-doors' || currentScreen === 'replace-paper' || currentScreen === 'replace-paper-close-doors' || currentScreen === 'replace-paper-completed') {
            setCurrentScreen('kurier-main');
          } else if (currentScreen === 'master-ogolne') {
            setCurrentScreen('master-config');
          } else if (currentScreen === 'master-kontrola') {
            setCurrentScreen('master-config');
          } else if (currentScreen === 'master-network') {
            setCurrentScreen('master');
          } else if (currentScreen === 'master-users') {
            setCurrentScreen('master');
          } else if (currentScreen === 'master-zdarzenia') {
            setCurrentScreen('master');
          } else if (currentScreen === 'event-details-deposit') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-unload') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-log') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-user-management') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-scan-card') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-scan-qr') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-scan-barcode') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-device-open') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-device-close') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'event-details-logout') {
            setCurrentScreen('master-zdarzenia');
          } else if (currentScreen === 'add-user') {
            setCurrentScreen('master-users');
          } else if (currentScreen === 'edit-user') {
            setEditingUserId(null);
            setCurrentScreen('master-users');
          } else if (currentScreen === 'master-config') {
            setCurrentScreen('master');
          }
        }}
      />
      <div className="flex-1 flex items-center justify-center p-5 overflow-auto">
        <div 
          ref={containerRef}
          style={{ 
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {!isLoggedIn ? (
            loginStep === 'card' ? (
              <CardInputScreen onCardSubmit={handleCardSubmit} />
            ) : loginStep === 'setup-pin' ? (
              <SetupPinScreen onPinSetup={handlePinSetup} />
            ) : (
              <PinInputScreen onPinEnter={handlePinEnter} />
            )
          ) : currentScreen === 'qr' ? (
            <SkanowanieQr 
              onSkip={() => {
                setHasScannedQr(false);
                setBarcode('');
                setCurrentScreen('barcode');
              }}
              onQrScan={() => {
                setHasScannedQr(true);
                const newEnvelopeNumber = generateEnvelopeNumber();
                setEnvelopeNumber(newEnvelopeNumber);
                setBarcode('12345'); // Симуляція зчитування QR
                // 50% chance of valid or invalid QR
                const isValidQR = Math.random() > 0.5;
                // Log QR scan event
                addGenericEvent('scan-qr', {
                  qrData: newEnvelopeNumber,
                  scanSuccess: isValidQR
                });
                setCurrentScreen(isValidQR ? 'qr-scanned' : 'invalid-qr');
              }}
            />
          ) : currentScreen === 'qr-scanned' ? (
            <QRDataScreen onClick={() => {
              setIsRetryFlow(false);
              setIsBarcodeFlow(false);
              setCurrentScreen('open-slot');
            }} envelopeNumber={envelopeNumber} />
          ) : currentScreen === 'open-slot' ? (
            <OpenSlotScreen onClick={() => {
              if (isRetryFlow) {
                setCurrentScreen('check-slot');
              } else {
                setCurrentScreen('place-deposit');
              }
            }} />
          ) : currentScreen === 'place-deposit' ? (
            <PlaceDepositScreen onClick={() => {
              // 50% chance of envelope being accepted or not accepted
              const isAccepted = Math.random() > 0.5;
              if (isAccepted) {
                // Add to session deposits as confirmed
                setSessionDeposits(prev => [...prev, { envelopeNumber, status: 'Potwierdzone' }]);
                // Save to depositedBarcodes for Kurier (avoid duplicates)
                setDepositedBarcodes(prev => {
                  if (!prev.includes(envelopeNumber)) {
                    return [...prev, envelopeNumber];
                  }
                  return prev;
                });
                addDepositEvent(envelopeNumber, true, envelopeNumber, 'Potwierdzona');
                setCurrentScreen('envelope-accepted');
              } else {
                // Add event for unconfirmed deposit
                addDepositEvent(envelopeNumber, true, envelopeNumber, 'Niepotwierdzona');
                setCurrentScreen('envelope-not-accepted');
              }
            }} />
          ) : currentScreen === 'check-slot' ? (
            <CheckSlotScreen onClick={() => {
              // 50% chance of envelope being accepted or not accepted
              const isAccepted = Math.random() > 0.5;
              const depositId = isBarcodeFlow ? barcode : envelopeNumber;
              if (isAccepted) {
                // Update status to confirmed if it was previously unconfirmed
                setSessionDeposits(prev => {
                  const existingIndex = prev.findIndex(d => d.envelopeNumber === depositId);
                  if (existingIndex >= 0) {
                    const updated = [...prev];
                    updated[existingIndex] = { envelopeNumber: depositId, status: 'Potwierdzone' };
                    return updated;
                  }
                  return [...prev, { envelopeNumber: depositId, status: 'Potwierdzone' }];
                });
                // Save to depositedBarcodes for Kurier (avoid duplicates)
                setDepositedBarcodes(prev => {
                  if (!prev.includes(depositId)) {
                    return [...prev, depositId];
                  }
                  return prev;
                });
                addDepositEvent(depositId, !isBarcodeFlow, depositId, 'Potwierdzona');
                setCurrentScreen('envelope-accepted');
              } else {
                // Add event for unconfirmed deposit
                addDepositEvent(depositId, !isBarcodeFlow, depositId, 'Niepotwierdzona');
                setCurrentScreen('envelope-not-accepted');
              }
            }} />
          ) : currentScreen === 'envelope-accepted' ? (
            <EnvelopeAcceptedScreen onClick={() => {
              setIsRetryFlow(false);
              setIsBarcodeFlow(false);
              setCurrentScreen('completed-deposits');
            }} />
          ) : currentScreen === 'envelope-not-accepted' ? (
            <EnvelopeNotAcceptedScreen 
              onCheck={() => {
                // Add as unconfirmed if not already in list - використовуємо barcode якщо це штрих-код потік
                const depositId = isBarcodeFlow ? barcode : envelopeNumber;
                setSessionDeposits(prev => {
                  const exists = prev.some(d => d.envelopeNumber === depositId);
                  if (!exists) {
                    return [...prev, { envelopeNumber: depositId, status: 'Niepotwierdzone' }];
                  }
                  return prev;
                });
                setIsRetryFlow(true);
                // Якщо це потік штрих-коду, повертаємося на open-slot-instruction
                setCurrentScreen(isBarcodeFlow ? 'open-slot-instruction' : 'open-slot');
              }}
              onFinish={() => {
                // Add as unconfirmed if not already in list - використовуємо barcode якщо це штрих-код потік
                const depositId = isBarcodeFlow ? barcode : envelopeNumber;
                setSessionDeposits(prev => {
                  const exists = prev.some(d => d.envelopeNumber === depositId);
                  if (!exists) {
                    return [...prev, { envelopeNumber: depositId, status: 'Niepotwierdzone' }];
                  }
                  return prev;
                });
                setIsRetryFlow(false);
                setIsBarcodeFlow(false);
                setCurrentScreen('completed-deposits');
              }}
            />
          ) : currentScreen === 'completed-deposits' ? (
            <CompletedDepositsScreen 
              deposits={sessionDeposits}
              onFinish={() => {
                // Logout user
                handleLogout();
              }}
              onNextDeposit={() => {
                setIsRetryFlow(false);
                setIsBarcodeFlow(false);
                setCurrentScreen('qr');
              }}
            />
          ) : currentScreen === 'invalid-qr' ? (
            <InvalidQRScreen onTimeout={() => setCurrentScreen('qr')} />
          ) : currentScreen === 'barcode' ? (
            <SkanowanieKodKreskowyScreen 
              onBarcodeComplete={(code) => {
                setBarcode(code);
                // 50% chance of valid or invalid barcode
                const isValidBarcode = Math.random() > 0.5;
                // Log barcode scan event
                addGenericEvent('scan-barcode', {
                  barcodeData: code,
                  scanSuccess: isValidBarcode
                });
                setCurrentScreen(isValidBarcode ? 'barcode-scanned' : 'invalid-barcode');
              }}
            />
          ) : currentScreen === 'barcode-scanned' ? (
            <BarcodeScannedScreen barcode={barcode} onClick={() => {
              setIsBarcodeFlow(true);
              setCurrentScreen('open-slot-instruction');
            }} />
          ) : currentScreen === 'invalid-barcode' ? (
            <NieZeskanowanoKodKreskowy 
              onClick={() => {
                setBarcode('');
                setCurrentScreen('barcode');
              }}
            />
          ) : currentScreen === 'open-slot-instruction' ? (
            <OpenSlotInstructionScreen onNext={() => setCurrentScreen('place-deposit-close-slot')} />
          ) : currentScreen === 'place-deposit-close-slot' ? (
            <PlaceDepositCloseSlotScreen onNext={() => {
              // 50% chance of success or rejection
              const isSuccess = Math.random() > 0.5;
              // Add to sessionDeposits with appropriate status - використовуємо barcode для штрих-коду
              setSessionDeposits(prev => {
                const existingIndex = prev.findIndex(d => d.envelopeNumber === barcode);
                if (existingIndex >= 0) {
                  // Update existing deposit status
                  const updated = [...prev];
                  updated[existingIndex] = { envelopeNumber: barcode, status: isSuccess ? 'Potwierdzone' : 'Niepotwierdzone' };
                  return updated;
                }
                // Add new deposit
                return [...prev, { envelopeNumber: barcode, status: isSuccess ? 'Potwierdzone' : 'Niepotwierdzone' }];
              });
              if (isSuccess) {
                // Save to depositedBarcodes for Kurier (avoid duplicates)
                setDepositedBarcodes(prev => {
                  if (!prev.includes(barcode)) {
                    return [...prev, barcode];
                  }
                  return prev;
                });
              }
              // Add event for all deposits (both confirmed and unconfirmed)
              addDepositEvent(barcode, false, barcode, isSuccess ? 'Potwierdzona' : 'Niepotwierdzona');
              setCurrentScreen(isSuccess ? 'envelope-accepted' : 'envelope-not-accepted');
            }} />
          ) : currentScreen === 'deposit-instruction' ? (
            <DepositInstructionScreen onTimeout={() => {
              // 50% chance of success or rejection
              const isSuccess = Math.random() > 0.5;
              setCurrentScreen(isSuccess ? 'envelope-success' : 'envelope-rejected');
            }} />
          ) : currentScreen === 'success' ? (
            <SuccessContent />
          ) : currentScreen === 'deposit' ? (
            <DepositContent onComplete={() => setCurrentScreen('envelope-success')} />
          ) : currentScreen === 'envelope-success' ? (
            <EnvelopeSuccessContent 
              onComplete={() => setCurrentScreen('completed-deposits')} 
              barcode={envelopeNumber}
              hasQrData={hasScannedQr}
              addToDeposits={(code, hasQr) => {
                setDepositedBarcodes(prev => [...prev, envelopeNumber]);
                addDepositEvent(envelopeNumber, hasQr, envelopeNumber, 'Potwierdzona');
              }}
            />
          ) : currentScreen === 'envelope-rejected' ? (
            <EnvelopeRejectedScreen 
              onCheck={() => setCurrentScreen('retry-instruction')}
              onFinish={() => setCurrentScreen('completed-deposits')}
            />
          ) : currentScreen === 'retry-instruction' ? (
            <RetryInstructionScreen onTimeout={() => {
              // 50% chance of success or rejection again
              const isSuccess = Math.random() > 0.5;
              setCurrentScreen(isSuccess ? 'envelope-success' : 'envelope-rejected');
            }} />
          ) : currentScreen === 'completed-deposits' ? (
            <CompletedDepositsContent 
              deposits={sessionDepositedBarcodes}
              onNextDeposit={() => {
                setBarcode('');
                setHasScannedQr(false);
                setCurrentScreen('qr');
              }}
              onFinish={handleLogout}
            />
          ) : currentScreen === 'kurier-main' ? (
            <KurierMainScreen 
              onUnload={() => setCurrentScreen('release-latch')}
              onLoadBag={() => setCurrentScreen('replace-bag-release-latch')}
              onReplacePaper={() => setCurrentScreen('replace-paper-open-doors')}
            />
          ) : currentScreen === 'release-latch' ? (
            <ReleaseLatchScreen 
              onNext={() => {
                // Log device open event
                addGenericEvent('device-open', {
                  action: 'unload',
                  operation: 'release-latch'
                });
                setCurrentScreen('open-doors');
              }}
            />
          ) : currentScreen === 'open-doors' ? (
            <OpenDoorsScreen 
              onNext={() => setCurrentScreen('pull-out-bag')}
            />
          ) : currentScreen === 'pull-out-bag' ? (
            <PullOutBagScreen 
              onNext={() => setCurrentScreen('insert-empty-bag')}
            />
          ) : currentScreen === 'insert-empty-bag' ? (
            <InsertEmptyBagScreen 
              onNext={() => setCurrentScreen('close-door')}
            />
          ) : currentScreen === 'close-door' ? (
            <CloseDoorScreen 
              onNext={() => setCurrentScreen('close-latch')}
            />
          ) : currentScreen === 'close-latch' ? (
            <CloseLatchScreen 
              onNext={() => {
                // Log device close event
                addGenericEvent('device-close', {
                  action: 'unload',
                  operation: 'close-latch'
                });
                setCurrentScreen('unload-completed-screen');
              }}
            />
          ) : currentScreen === 'unload-completed-screen' ? (
            <UnloadCompletedScreen 
              onNext={() => {
                // Save deposits before clearing
                setUnloadedDeposits(depositedBarcodes);
                // Add unload event to zdarzenia
                addUnloadEvent();
                setCurrentScreen('unloading-summary');
              }}
            />
          ) : currentScreen === 'unloading-summary' ? (
            <UnloadingSummaryScreen 
              deposits={unloadedDeposits}
              onMenu={() => setCurrentScreen('kurier-main')}
              onFinish={() => {
                // Clear all deposits after unloading
                setDepositedBarcodes([]);
                setUnloadedDeposits([]);
                localStorage.removeItem('depositedBarcodes');
                handleLogout();
              }}
            />
          ) : currentScreen === 'replace-bag-release-latch' ? (
            <ReplaceBagReleaseLatchScreen 
              onNext={() => setCurrentScreen('replace-bag-open-doors')}
            />
          ) : currentScreen === 'replace-bag-open-doors' ? (
            <ReplaceBagOpenDoorsScreen 
              onNext={() => setCurrentScreen('replace-bag-insert-empty')}
            />
          ) : currentScreen === 'replace-bag-insert-empty' ? (
            <ReplaceBagInsertEmptyScreen 
              onNext={() => setCurrentScreen('replace-bag-close-doors')}
            />
          ) : currentScreen === 'replace-bag-close-doors' ? (
            <ReplaceBagCloseDoorsScreen 
              onNext={() => setCurrentScreen('replace-bag-close-latch')}
            />
          ) : currentScreen === 'replace-bag-close-latch' ? (
            <ReplaceBagCloseLatchScreen 
              onNext={() => setCurrentScreen('replace-bag-completed')}
            />
          ) : currentScreen === 'replace-bag-completed' ? (
            <ReplaceBagCompletedScreen 
              onNext={() => setCurrentScreen('kurier-main')}
            />
          ) : currentScreen === 'replace-paper-open-doors' ? (
            <ReplacePaperOpenDoorsScreen 
              onNext={() => setCurrentScreen('replace-paper')}
            />
          ) : currentScreen === 'replace-paper' ? (
            <ReplacePaperScreen 
              onNext={() => setCurrentScreen('replace-paper-close-doors')}
            />
          ) : currentScreen === 'replace-paper-close-doors' ? (
            <ReplacePaperCloseDoorsScreen 
              onNext={() => setCurrentScreen('replace-paper-completed')}
            />
          ) : currentScreen === 'replace-paper-completed' ? (
            <ReplacePaperCompletedScreen 
              onNext={() => setCurrentScreen('kurier-main')}
            />
          ) : currentScreen === 'unloading-completed' ? (
            <UnloadingCompletedContent 
              deposits={unloadedDeposits}
              onFinish={handleLogout}
            />
          ) : currentScreen === 'master' ? (
            <Master 
              onConfigClick={() => setCurrentScreen('master-config')}
              onUsersClick={() => setCurrentScreen('master-users')}
              onNetworkClick={() => setCurrentScreen('master-network')}
              onZdarzeniaClick={() => setCurrentScreen('master-zdarzenia')}
            />
          ) : currentScreen === 'master-config' ? (
            <MasterConfig 
              onOgolneClick={() => setCurrentScreen('master-ogolne')}
              onKontrolaClick={() => setCurrentScreen('master-kontrola')}
            />
          ) : currentScreen === 'master-ogolne' ? (
            <MasterOgolne />
          ) : currentScreen === 'master-kontrola' ? (
            <KontrolaSystemu 
              onNetworkClick={() => setCurrentScreen('master-network')}
            />
          ) : currentScreen === 'master-network' ? (
            <NetworkScreen 
              onBack={() => setCurrentScreen('master')}
            />
          ) : currentScreen === 'master-users' ? (
            <UsersScreen 
              users={users}
              onAddUser={() => setCurrentScreen('add-user')}
              onDeleteUser={(userId) => {
                const user = users.find(u => u.id === userId);
                if (user) {
                  addUserManagementEvent('delete', userId, user.role);
                }
                setUsers(prev => prev.filter(u => u.id !== userId));
              }}
              onEditUser={(userId) => {
                setEditingUserId(userId);
                setCurrentScreen('edit-user');
              }}
            />
          ) : currentScreen === 'add-user' ? (
            <AddUserScreen 
              onSave={(userId, role) => {
                const newUser: User = {
                  id: userId,
                  role: role,
                  status: 'aktywny',
                  isFirstLogin: true
                };
                setUsers(prev => [...prev, newUser]);
                addUserManagementEvent('add', userId, role);
                setCurrentScreen('master-users');
              }}
            />
          ) : currentScreen === 'edit-user' && editingUserId ? (
            <EditUserScreen 
              userId={users.find(u => u.id === editingUserId)?.id || ''}
              role={users.find(u => u.id === editingUserId)?.role || ''}
              status={users.find(u => u.id === editingUserId)?.status || 'aktywny'}
              onSave={(oldUserId, newUserId, role, status) => {
                setUsers(prev => prev.map(u => 
                  u.id === editingUserId ? { ...u, id: newUserId, role, status } : u
                ));
                addUserManagementEvent('edit', newUserId, role);
                setEditingUserId(null);
                setCurrentScreen('master-users');
              }}
            />
          ) : currentScreen === 'master-zdarzenia' ? (
            <ZdarzeniaScreen 
              onDetailsClick={(eventId, eventType) => {
                setSelectedEventId(eventId);
                
                // Get event data to check hasQrData
                const EVENTS_STORAGE_KEY = 'zdarzenia_events';
                try {
                  const stored = localStorage.getItem(EVENTS_STORAGE_KEY);
                  if (stored) {
                    const events = JSON.parse(stored);
                    const event = events.find((e: any) => e.id === eventId);
                    if (event) {
                      setSelectedEventHasQrData(event.hasQrData !== false);
                    }
                  }
                } catch {
                  setSelectedEventHasQrData(true);
                }
                
                if (eventType === 'deposit') {
                  setCurrentScreen('event-details-deposit');
                } else if (eventType === 'unload') {
                  setCurrentScreen('event-details-unload');
                } else if (eventType === 'log') {
                  setCurrentScreen('event-details-log');
                } else if (eventType === 'user-management') {
                  setCurrentScreen('event-details-user-management');
                } else if (eventType === 'scan-card') {
                  setCurrentScreen('event-details-scan-card');
                } else if (eventType === 'scan-qr') {
                  setCurrentScreen('event-details-scan-qr');
                } else if (eventType === 'scan-barcode') {
                  setCurrentScreen('event-details-scan-barcode');
                } else if (eventType === 'device-open') {
                  setCurrentScreen('event-details-device-open');
                } else if (eventType === 'device-close') {
                  setCurrentScreen('event-details-device-close');
                } else if (eventType === 'logout') {
                  setCurrentScreen('event-details-logout');
                }
              }}
              onSyncClick={(eventId) => {
                console.log('Sync clicked for event:', eventId);
                // Додаткова логіка для синхронізації події
              }}
            />
          ) : currentScreen === 'event-details-deposit' ? (
            selectedEventHasQrData ? (
              <DepozytDetailsScreen eventId={selectedEventId} />
            ) : (
              <BarcodeDepozytDetailsScreen eventId={selectedEventId} />
            )
          ) : currentScreen === 'event-details-unload' ? (
            <UnloadDetailsScreen eventId={selectedEventId} />
          ) : currentScreen === 'event-details-log' ? (
            <LogowanieDetailsScreen eventId={selectedEventId} />
          ) : currentScreen === 'event-details-user-management' ? (
            <UserManagementDetailsScreen eventId={selectedEventId} />
          ) : currentScreen === 'event-details-scan-card' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="scan-card" />
          ) : currentScreen === 'event-details-scan-qr' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="scan-qr" />
          ) : currentScreen === 'event-details-scan-barcode' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="scan-barcode" />
          ) : currentScreen === 'event-details-device-open' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="device-open" />
          ) : currentScreen === 'event-details-device-close' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="device-close" />
          ) : currentScreen === 'event-details-logout' ? (
            <GenericEventDetailsScreen eventId={selectedEventId} eventType="logout" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
