type FixedDossierSidebarProps = {
  children: React.ReactNode;
};

export default function FixedDossierSidebar({
  children,
}: FixedDossierSidebarProps) {
  return (
    <div className="self-start">
      <div className="dossier-sidebar-scroll lg:fixed lg:right-[max(2rem,calc((100vw-80rem)/2))] lg:top-24 lg:z-30 lg:max-h-[calc(100vh-7rem)] lg:w-[380px] lg:overflow-y-auto lg:pr-1">
        {children}
      </div>
    </div>
  );
}
