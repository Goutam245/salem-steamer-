import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Method", to: "/method" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className="sticky top-[40px] left-0 right-0 z-[999] bg-white transition-shadow duration-300"
      style={{
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.1)"
          : "0 1px 0 rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/">
          <span className="hidden md:block"><Logo height={48} /></span>
          <span className="block md:hidden"><Logo height={36} /></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body font-medium uppercase transition-colors"
              style={{
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: location.pathname === link.to ? "#E8611A" : "#1C1C1C",
              }}
              onMouseEnter={(e) => { if (location.pathname !== link.to) e.currentTarget.style.color = "#E8611A"; }}
              onMouseLeave={(e) => { if (location.pathname !== link.to) e.currentTarget.style.color = "#1C1C1C"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-body font-medium uppercase text-white"
            style={{
              fontSize: "13px",
              letterSpacing: "0.08em",
              backgroundColor: "#E8611A",
              padding: "12px 24px",
              borderRadius: "4px",
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "#E8611A" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body font-medium uppercase"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  color: location.pathname === link.to ? "#E8611A" : "#1C1C1C",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="font-body font-medium uppercase text-white"
              style={{
                fontSize: "13px",
                letterSpacing: "0.08em",
                backgroundColor: "#E8611A",
                padding: "12px 24px",
                borderRadius: "4px",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
