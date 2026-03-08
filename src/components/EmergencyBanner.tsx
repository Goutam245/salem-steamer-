import { Phone } from "lucide-react";

const EmergencyBanner = () => (
  <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center z-[1000] sticky top-0">
    <div className="flex items-center justify-center gap-3 flex-wrap">
      <span className="text-[11px] font-bold uppercase tracking-[0.25em] font-body">
        24/7 Emergency Response
      </span>
      <span className="text-primary-foreground/40 hidden sm:inline">·</span>
      <span className="text-[11px] uppercase tracking-[0.2em] font-body hidden sm:inline">
        Water Damage · Fire · Mold
      </span>
      <span className="text-primary-foreground/40 hidden sm:inline">·</span>
      <a
        href="tel:5713443837"
        className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] font-body hover:opacity-80 transition-opacity"
      >
        <Phone size={12} />
        (571) 344-3837
      </a>
    </div>
  </div>
);

export default EmergencyBanner;
