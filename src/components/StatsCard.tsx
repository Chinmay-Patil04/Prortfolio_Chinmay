import { profile } from "../data/profile";

interface StatsCardProps {
  className?: string;
  animate?: boolean;
}

export function StatsCard({ className = "", animate = false }: StatsCardProps) {
  return (
    <div
      className={`card rounded-3xl p-5 sm:p-7 ${animate ? "lg:animate-float" : ""} ${className}`}
    >
      <div className="mb-5 flex items-center gap-3 border-b border-line pb-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light font-display text-sm font-bold text-accent-dim">
          {profile.experience[0].companyShort}
        </div>
        <div>
          <p className="eyebrow">Currently at</p>
          <p className="text-sm font-semibold text-ink">{profile.experience[0].company}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line bg-bg-soft p-3 sm:p-4">
            <p className="text-accent-gradient font-display text-xl font-extrabold sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] font-medium leading-snug text-ink-secondary sm:text-xs">
              {stat.label}
            </p>
            <p className="mt-0.5 text-[10px] text-ink-muted">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-accent/20 bg-accent-light px-4 py-3">
        <p className="eyebrow">Open to</p>
        <p className="mt-1 text-sm font-semibold text-ink">PMO · Consulting · Strategy</p>
      </div>
    </div>
  );
}
