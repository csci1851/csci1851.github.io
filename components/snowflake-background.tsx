import { Snowflake } from "@/components/penguin-icons";

export function SnowflakeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Decorative snowflakes scattered across the background */}
      <Snowflake className="absolute top-[10%] left-[15%] w-8 h-8 text-white/20" />
      <Snowflake className="absolute top-[25%] right-[20%] w-6 h-6 text-white/15" />
      <Snowflake className="absolute top-[45%] left-[8%] w-7 h-7 text-white/20" />
      <Snowflake className="absolute top-[60%] right-[12%] w-9 h-9 text-white/15" />
      <Snowflake className="absolute top-[80%] left-[25%] w-6 h-6 text-white/20" />
      <Snowflake className="absolute top-[15%] right-[45%] w-5 h-5 text-white/10" />
      <Snowflake className="absolute top-[70%] right-[35%] w-8 h-8 text-white/15" />
      <Snowflake className="absolute top-[35%] left-[40%] w-6 h-6 text-white/10" />
    </div>
  );
}
