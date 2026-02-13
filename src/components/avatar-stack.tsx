import Image from "next/image";

interface Avatar {
  src: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: Avatar[];
  size?: number;
}

export function AvatarStack({ avatars, size = 50 }: AvatarStackProps) {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="relative shrink-0 rounded-full border-2 border-white"
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -18,
            zIndex: avatars.length - i,
          }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size}
            height={size}
            className="rounded-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
