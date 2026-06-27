import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email required hai";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email";
    }
    if (!password) {
      newErrors.password = "Password required hai";
    } else if (password.length < 6) {
      newErrors.password = "Password 6+ characters hona chahiye";
    }
    return newErrors;
  };

  const handleRipple = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  const handleSubmit = (e) => {
    handleRipple(e);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log("Login submitted", { email, password, remember });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#080b18] relative overflow-hidden">

      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-60 animate-pulse"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradientat(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
          animation: "orbFloat 9s ease-in-out infinite alternate",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)",
          animation: "orbFloat 7s ease-in-out infinite alternate-reverse",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl p-8 transition-all duration-700"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "0.5px solid rgba(255,255,255,0.11)",
          backdropFilter: "blur(14px)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Success overlay */}
        {success && (
          <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 z-20"
            style={{ background: "rgba(8,11,24,0.95)" }}>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(20,184,166,0.15)",
                border: "1.5px solid #14b8a6",
                animation: "checkPop 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Login Successful!</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Dashboard load ho raha hai...</p>
          </div>
        )}

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-xs font-medium tracking-widest uppercase"
          style={{
            background: "rgba(99,102,241,0.14)",
            border: "0.5px solid rgba(99,102,241,0.4)",
            color: "#a5b4fc",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.8)",
            transition: "all 0.5s ease 0.3s",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-indigo-400"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
          Admin Panel
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold text-slate-100 mb-1"
          style={{
            fontFamily: "'Syne', sans-serif",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.5s ease 0.4s",
          }}
        >
          Welcome back
        </h1>
        <p
          className="text-sm mb-7"
          style={{
            color: "rgba(255,255,255,0.38)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.5s ease 0.5s",
          }}
        >
          Sign in to your admin account
        </p>

        {/* Email Field */}
        <FieldWrap
          label="Email Address"
          error={errors.email}
          delay="0.6s"
          mounted={mounted}
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: errors.email ? "#f87171" : "rgba(255,255,255,0.3)" }}>
              <MailIcon />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
              placeholder="admin@example.com"
              className="w-full rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-white/20"
              style={{
                background: errors.email ? "rgba(248,113,113,0.07)" : "rgba(255,255,255,0.06)",
                border: errors.email ? "0.5px solid rgba(248,113,113,0.5)" : "0.5px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => {
                if (!errors.email) {
                  e.target.style.border = "0.5px solid rgba(99,102,241,0.6)";
                  e.target.style.background = "rgba(99,102,241,0.08)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                }
              }}
              onBlur={(e) => {
                if (!errors.email) {
                  e.target.style.border = "0.5px solid rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                  e.target.style.boxShadow = "none";
                }
              }}
            />
          </div>
        </FieldWrap>

        {/* Password Field */}
        <FieldWrap
          label="Password"
          error={errors.password}
          delay="0.7s"
          mounted={mounted}
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: errors.password ? "#f87171" : "rgba(255,255,255,0.3)" }}>
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
              placeholder="••••••••"
              className="w-full rounded-xl py-2.5 pl-10 pr-11 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-white/20"
              style={{
                background: errors.password ? "rgba(248,113,113,0.07)" : "rgba(255,255,255,0.06)",
                border: errors.password ? "0.5px solid rgba(248,113,113,0.5)" : "0.5px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => {
                if (!errors.password) {
                  e.target.style.border = "0.5px solid rgba(99,102,241,0.6)";
                  e.target.style.background = "rgba(99,102,241,0.08)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                }
              }}
              onBlur={(e) => {
                if (!errors.password) {
                  e.target.style.border = "0.5px solid rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                  e.target.style.boxShadow = "none";
                }
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </FieldWrap>

        {/* Options row */}
        <div
          className="flex items-center justify-between mb-5"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 0.8s",
          }}
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-3.5 h-3.5 accent-indigo-500 cursor-pointer"
            />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Mujhe yaad rakho</span>
          </label>
          <a
            href="#"
            className="text-xs transition-colors duration-200"
            style={{ color: "#818cf8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#818cf8")}
          >
            Password bhool gaye?
          </a>
        </div>

        {/* Submit Button */}
        <button
          ref={btnRef}
          onClick={handleSubmit}
          disabled={loading}
          className="relative w-full py-3 rounded-xl text-white text-sm font-semibold overflow-hidden transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "0.03em",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s, background 0.2s, scale 0.15s",
          }}
          onMouseEnter={(e) => !loading && (e.currentTarget.style.background = "linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)")}
        >
          {/* Shimmer */}
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              animation: "shimmer 2.5s ease 1.5s infinite",
            }}
          />
          {/* Ripples */}
          {ripples.map((r) => (
            <span
              key={r.id}
              className="absolute rounded-full bg-white/25 pointer-events-none"
              style={{
                left: r.x, top: r.y,
                width: 80, height: 80,
                marginLeft: -40, marginTop: -40,
                animation: "ripple 0.6s linear",
              }}
            />
          ))}
          <span className="relative z-10">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign In →"
            )}
          </span>
        </button>

        {/* Divider */}
        <div
          className="flex items-center gap-3 my-5"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 1s",
          }}
        >
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs whitespace-nowrap" style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.05em" }}>
            256-bit encryption
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* Footer */}
        <p
          className="text-center text-xs"
          style={{
            color: "rgba(255,255,255,0.22)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 1.1s",
          }}
        >
          Access only for{" "}
          <span style={{ color: "rgba(255,255,255,0.45)" }}>authorized administrators</span>
        </p>
      </div>

      {/* Keyframes injected */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');
        @keyframes orbFloat {
          0% { transform: translate(30%, -30%) scale(1); }
          100% { transform: translate(20%, -20%) scale(1.12); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes ripple {
          to { transform: scale(4); opacity: 0; }
        }
        @keyframes checkPop {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function FieldWrap({ label, error, delay, mounted, children }) {
  return (
    <div
      className="mb-4"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(10px)",
        transition: `all 0.5s ease ${delay}`,
      }}
    >
      <label className="block text-xs font-medium mb-1.5 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400" style={{ animation: "fadeIn 0.2s ease" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
