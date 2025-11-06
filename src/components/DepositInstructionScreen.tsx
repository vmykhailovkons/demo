import { useEffect } from 'react';
import Instr2 from '../imports/Instr2';

interface DepositInstructionScreenProps {
  onTimeout: () => void;
}

export default function DepositInstructionScreen({ onTimeout }: DepositInstructionScreenProps) {
  useEffect(() => {
    // Auto-transition after 10 seconds
    const timer = setTimeout(() => {
      onTimeout();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return <Instr2 />;
}
