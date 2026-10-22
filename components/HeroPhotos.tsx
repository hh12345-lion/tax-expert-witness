"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { photos } from "@/lib/photos";
import { photosFor } from "@/lib/pagePhotos";

/** Client only to read the path; rendered on the server with the page. Two folio frames meeting at a seam. */
export default function HeroPhotos({ large = false }: { large?: boolean }) {
  const [a, b] = photosFor(usePathname() || "/");
  const left = photos[a];
  const right = photos[b];

  return (
    <div className={`relative mx-auto flex w-full max-w-[480px] items-start gap-3 lg:mx-0 lg:ml-auto ${large ? "h-[400px] sm:h-[460px]" : "h-[320px] sm:h-[380px]"}`}>
      <div className="folio relative mt-8 h-[88%] w-1/2 overflow-hidden bg-sage">
        <Image src={left.src} alt={left.alt} fill priority sizes="(max-width: 1024px) 50vw, 240px" className="object-cover" />
      </div>
      <div className="folio relative h-[88%] w-1/2 overflow-hidden bg-accent">
        <Image src={right.src} alt={right.alt} fill priority sizes="(max-width: 1024px) 50vw, 240px" className="object-cover" />
      </div>
      {/* Ledger lines crossing the seam, as on the monogram */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2" aria-hidden="true">
        <span className="block h-[6px] w-16 bg-peach" />
        <span className="block h-[6px] w-16 bg-white" />
      </div>
    </div>
  );
}
