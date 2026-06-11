import type { LucideIcon } from "lucide-react";

export default function SectionBadge({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-aqua-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-aqua-700">
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}
