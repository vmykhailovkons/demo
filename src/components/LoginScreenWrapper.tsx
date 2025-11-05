interface LoginScreenWrapperProps {
  children: React.ReactNode;
}

export default function LoginScreenWrapper({ children }: LoginScreenWrapperProps) {
  return (
    <div className="h-[600.297px] relative w-[1024.5px]" style={{ backgroundImage: "linear-gradient(169.825deg, rgb(239, 246, 255) 14.992%, rgb(219, 234, 254) 85.007%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      {children}
    </div>
  );
}
