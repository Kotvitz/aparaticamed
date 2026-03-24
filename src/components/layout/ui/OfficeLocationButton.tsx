"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";

const MAPS_URL =
  "https://www.google.com/maps/place/AparaticaMED-+Aparaty+S%C5%82uchowe/@53.3765066,14.6550086,17z/data=!3m1!4b1!4m6!3m5!1s0x4700a7c7c5f34717:0xb929eae55ebc9a67!8m2!3d53.3765066!4d14.6575835!16s%2Fg%2F11c6dfvd58?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D";

export default function OfficeLocationButton() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener nofollow"
      aria-label="Zobacz lokalizację gabinetu na mapie"
      title="Zobacz lokalizację gabinetu"
      className="
        fixed right-0 top-1/2 z-40
        -translate-y-1/2
        flex h-14 w-14 items-center justify-center
        bg-(--brand)
        text-white
        border-l border-(--brand-ink)
        shadow-md
        transition
        hover:bg-(--brand-ink)
        focus:outline-none focus:ring-2 focus:ring-(--brand)
        cursor-pointer
      "
    >
      <MapPinIcon className="h-7 w-7" />
    </a>
  );
}
