import DashboardSidebar from "@/components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#080c16]">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;