import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Real Estate
          </span>
          <span className="text-xl font-bold text-slate-900">Urban Haven</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
        {
            navItems.map((obj,index)=>{
                return(
                     <Link key={index} href={obj.href}> {obj.label}  </Link>  
                )
            })
        }
        
         

           {/* <Link href={'/about-us'}>  About Us </Link>


             <Link href={'/contact-us'}>  Contact Us </Link> */}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Book a Visit
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="border-t border-slate-200 px-4 py-3 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
