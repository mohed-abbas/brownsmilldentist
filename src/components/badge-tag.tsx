interface BadgeTagProps {
  children: React.ReactNode;
  dotColor?: string;
}

export function BadgeTag({
  children,
  dotColor = "bg-teal-500",
}: BadgeTagProps) {
  return (
    <span className="inline-flex items-center gap-[5px] rounded-[var(--radius-pill)] bg-white px-[15px] py-[10px]">
      <span
        className={`size-[7px] shrink-0 rounded-full ${dotColor}`}
        aria-hidden="true"
      />
      <span className="text-body-sm font-medium text-text-primary">
        {children}
      </span>
    </span>
  );
}
