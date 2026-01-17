import { Navigation } from "@/components/navigation";
import { SnowflakeBackground } from "@/components/snowflake-background";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#dbeafe] relative overflow-x-hidden">
      {/* Snowflake Background Decoration */}
      <SnowflakeBackground />

      {/* Navigation Sidebar */}
      <Navigation />

      {/* Main Content Area */}
      <main className="lg:pl-60 pt-16 lg:pt-0 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-14">
          {/* Content Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-300/20 p-6 sm:p-10 lg:p-14 relative z-10 border border-blue-100/50">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
