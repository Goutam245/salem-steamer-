import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-[#1C1C1C] text-white">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <Logo height={40} />
          </Link>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Restoration. Preservation. Protection.
          </p>
          <p className="text-white/40 text-sm mt-1">
            Serving Washington DC and surrounding areas.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="label-text text-primary mb-6">Navigation</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Our Method", to: "/method" },
              { label: "Services", to: "/services" },
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
              { label: "Discretion", to: "/discretion" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-white/60 text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="label-text text-primary mb-6">Contact</h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:5713443837" className="hover:text-primary transition-colors">(571) 344-3837 (24/7 Emergency)</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:hello@salemsteamer.com" className="hover:text-primary transition-colors">hello@salemsteamer.com</a>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <span>Mon–Fri 8AM–6PM | Emergency 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">
          © 2003–2026 Salem Steamer. All rights reserved.
        </p>
        <p className="text-xs text-white/40">
          IICRC Certified · Licensed · Insured · Biodegradable Materials
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
