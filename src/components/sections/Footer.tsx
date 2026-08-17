import Image from "next/image";
import Link from "next/link";
import { business, footerLinks } from "@/lib/data/business";

export function Footer() {
  return (
    <footer className="border-t border-mint-pale bg-mint-pale/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Körpergfüh by Viki Logo"
            width={140}
            height={90}
            className="h-12 w-auto"
          />
          <p className="font-display text-xl text-petrol">Körpergfüh by Viki</p>
          <p className="max-w-xs font-sans text-sm text-petrol/80">
            {business.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 font-sans text-sm text-petrol/80">
          <p>{business.address.street}</p>
          <p>
            {business.address.zip} {business.address.city}
          </p>
          <a href={business.phoneHref} className="hover:text-mint-deep">
            {business.phone}
          </a>
        </div>

        <nav className="flex flex-col gap-2 font-sans text-sm text-petrol/80">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-mint-deep">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
