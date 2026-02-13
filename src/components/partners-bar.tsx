const partners = [
  { name: "Doctorly", icon: "/assets/logos/logo-doctorly.svg" },
  { name: "Natural", icon: "/assets/logos/logo-natural.svg" },
  { name: "Marketly", icon: null },
  { name: "Blockly", icon: "/assets/logos/logo-blockly.svg" },
  { name: "Codelify", icon: "/assets/logos/logo-codelify.svg" },
];

function MarketlyIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <rect x="0" y="23" width="10" height="15" rx="5" fill="#4A3AFF" />
      <rect x="0" y="0" width="10" height="10" rx="5" fill="#9E97FF" />
      <rect x="14" y="11" width="10" height="27" rx="5" fill="#4A3AFF" />
      <rect x="28" y="0" width="10" height="38" rx="5" fill="#4A3AFF" />
    </svg>
  );
}

export function PartnersBar() {
  return (
    <div
      role="img"
      aria-label="Our partners"
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 xl:gap-x-[86px] partner-blend"
    >
      {partners.map((partner) => (
        <div key={partner.name} className="inline-flex items-center gap-3">
          {partner.name === "Marketly" ? (
            <MarketlyIcon />
          ) : partner.icon ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={partner.icon}
              alt=""
              className="h-[40px] w-auto"
              aria-hidden="true"
            />
          ) : null}
          <span className="text-heading-lg text-[#170F49]">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
  );
}
