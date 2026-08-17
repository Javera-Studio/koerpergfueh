"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/data/business";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Körpergfüh by Viki Logo"
            width={160}
            height={100}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-petrol transition-colors hover:text-mint-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#kontakt"
          className="hidden rounded-full bg-mint px-6 py-2.5 font-sans text-sm font-medium text-petrol transition-colors hover:bg-mint-deep hover:text-cream lg:inline-block"
        >
          Termin anfragen
        </Link>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-petrol transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-petrol transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-mint-pale bg-cream px-6 pb-6 pt-2 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-sans text-base text-petrol hover:bg-mint-pale"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-mint px-6 py-3 text-center font-sans text-sm font-medium text-petrol"
          >
            Termin anfragen
          </Link>
        </nav>
      )}
    </header>
  );
}
