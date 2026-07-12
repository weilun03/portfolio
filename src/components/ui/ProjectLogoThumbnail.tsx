import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function ProjectLogoThumbnail({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) {
  return (
    <div className="relative h-full w-full p-10">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 60vw"
        className="object-contain"
      />
    </div>
  );
}
