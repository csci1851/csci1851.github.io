import Image from "next/image";
import { Mail } from "lucide-react";

interface StaffCardProps {
  name: string;
  role: string;
  pronouns: string;
  email: string;
  imageSrc: string;
}

export function StaffCard({ name, role, pronouns, email, imageSrc }: StaffCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {imageSrc ? (
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src={imageSrc}
                alt={name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center ring-2 ring-primary/20">
              <span className="text-2xl font-bold text-primary">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
            <span className="text-sm text-slate-600">({pronouns})</span>
          </div>
          <div className="mt-1">
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {role}
            </span>
          </div>
        </div>

        {/* Email Button */}
        <div className="flex-shrink-0">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
