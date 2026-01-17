// Custom penguin SVG icons for navigation - more detailed and charming

export function PenguinHome({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="12" cy="14" rx="5.5" ry="6.5" fill="currentColor" opacity="0.95"/>
      <ellipse cx="12" cy="13.5" rx="4" ry="5" fill="white" opacity="0.98"/>
      
      {/* Eyes */}
      <circle cx="10.3" cy="11" r="1" fill="currentColor"/>
      <circle cx="13.7" cy="11" r="1" fill="currentColor"/>
      <circle cx="10.5" cy="10.8" r="0.4" fill="white"/>
      <circle cx="13.9" cy="10.8" r="0.4" fill="white"/>
      
      {/* Beak */}
      <path d="M11 12.5 Q12 13.5 13 12.5" stroke="#ff6b35" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="12" cy="12.3" rx="1" ry="0.8" fill="#ff6b35" opacity="0.8"/>
      
      {/* Wings */}
      <ellipse cx="7.5" cy="14" rx="2" ry="3" fill="currentColor" opacity="0.8"/>
      <ellipse cx="16.5" cy="14" rx="2" ry="3" fill="currentColor" opacity="0.8"/>
      
      {/* Head */}
      <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.95"/>
      <circle cx="12" cy="8.2" r="2.5" fill="currentColor" opacity="0.6"/>
      
      {/* Feet */}
      <path d="M10 20 L8.5 21.5 M10 20 L9 21.5" stroke="#ff6b35" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 20 L15.5 21.5 M14 20 L15 21.5" stroke="#ff6b35" strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Cheeks (blush) */}
      <circle cx="9" cy="12.5" r="0.8" fill="#ff6b35" opacity="0.3"/>
      <circle cx="15" cy="12.5" r="0.8" fill="#ff6b35" opacity="0.3"/>
    </svg>
  );
}

export function PenguinBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="10" cy="15" rx="5" ry="6" fill="currentColor" opacity="0.95"/>
      <ellipse cx="10" cy="14.5" rx="3.5" ry="4.5" fill="white" opacity="0.98"/>
      
      {/* Eyes looking at book */}
      <circle cx="9" cy="12.5" r="0.9" fill="currentColor"/>
      <circle cx="11" cy="12.5" r="0.9" fill="currentColor"/>
      <circle cx="9.2" cy="12.3" r="0.4" fill="white"/>
      <circle cx="11.2" cy="12.3" r="0.4" fill="white"/>
      
      {/* Beak */}
      <ellipse cx="10" cy="13.5" rx="1" ry="0.7" fill="#ff6b35" opacity="0.8"/>
      
      {/* Head */}
      <circle cx="10" cy="9.5" r="3.5" fill="currentColor" opacity="0.95"/>
      
      {/* Wing holding book */}
      <ellipse cx="6" cy="15" rx="1.8" ry="2.5" fill="currentColor" opacity="0.8"/>
      
      {/* Open Book */}
      <rect x="14" y="9" width="6" height="8" rx="0.8" fill="#a8d0e6" opacity="0.9"/>
      <rect x="14" y="9" width="6" height="8" rx="0.8" fill="white" opacity="0.5"/>
      <line x1="17" y1="9" x2="17" y2="17" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      <line x1="15" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
      <line x1="15" y1="12.5" x2="19" y2="12.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
      <line x1="15" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
      <line x1="15" y1="15.5" x2="18" y2="15.5" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
    </svg>
  );
}

export function PenguinChecklist() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="9" cy="15.5" rx="4.5" ry="5.5" fill="currentColor" opacity="0.95"/>
      <ellipse cx="9" cy="15" rx="3.2" ry="4.2" fill="white" opacity="0.98"/>
      
      {/* Eyes */}
      <circle cx="8" cy="13" r="0.8" fill="currentColor"/>
      <circle cx="10" cy="13" r="0.8" fill="currentColor"/>
      <circle cx="8.2" cy="12.8" r="0.3" fill="white"/>
      <circle cx="10.2" cy="12.8" r="0.3" fill="white"/>
      
      {/* Beak */}
      <ellipse cx="9" cy="14" rx="0.9" ry="0.6" fill="#ff6b35" opacity="0.8"/>
      
      {/* Head */}
      <circle cx="9" cy="10.5" r="3.2" fill="currentColor" opacity="0.95"/>
      
      {/* Wing */}
      <ellipse cx="5.5" cy="15.5" rx="1.6" ry="2.3" fill="currentColor" opacity="0.8"/>
      
      {/* Clipboard/Checklist */}
      <rect x="14" y="8" width="7" height="10" rx="1" fill="white" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="16" y="7" width="3" height="1.5" rx="0.3" fill="#64748b"/>
      
      {/* Checkmarks */}
      <path d="M15.5 10.5 L16.3 11.3 L18 9.6" stroke="#10b981" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 13.5 L16.3 14.3 L18 12.6" stroke="#10b981" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Lines */}
      <line x1="15.5" y1="15.5" x2="19.5" y2="15.5" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <line x1="15.5" y1="16.8" x2="19.5" y2="16.8" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </svg>
  );
}

export function PenguinCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="9" cy="16" rx="4.5" ry="5.5" fill="currentColor" opacity="0.95"/>
      <ellipse cx="9" cy="15.5" rx="3.2" ry="4.2" fill="white" opacity="0.98"/>
      
      {/* Eyes */}
      <circle cx="8" cy="14" r="0.8" fill="currentColor"/>
      <circle cx="10" cy="14" r="0.8" fill="currentColor"/>
      <circle cx="8.2" cy="13.8" r="0.3" fill="white"/>
      <circle cx="10.2" cy="13.8" r="0.3" fill="white"/>
      
      {/* Beak */}
      <ellipse cx="9" cy="15" rx="0.9" ry="0.6" fill="#ff6b35" opacity="0.8"/>
      
      {/* Head */}
      <circle cx="9" cy="11.5" r="3.2" fill="currentColor" opacity="0.95"/>
      
      {/* Wing */}
      <ellipse cx="5.5" cy="16" rx="1.6" ry="2.3" fill="currentColor" opacity="0.8"/>
      
      {/* Calendar */}
      <rect x="14" y="7" width="8" height="9" rx="1" fill="white" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="14" y="7" width="8" height="2.5" rx="1" fill="#ef4444" opacity="0.8"/>
      <line x1="16" y1="6.5" x2="16" y2="8" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="20" y1="6.5" x2="20" y2="8" stroke="currentColor" strokeWidth="0.8"/>
      
      {/* Calendar grid */}
      <circle cx="15.8" cy="11" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="17.5" cy="11" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="19.2" cy="11" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="15.8" cy="12.8" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="17.5" cy="12.8" r="0.5" fill="#3b82f6"/>
      <circle cx="19.2" cy="12.8" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="15.8" cy="14.6" r="0.5" fill="currentColor" opacity="0.4"/>
      <circle cx="17.5" cy="14.6" r="0.5" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

export function PenguinLaptop() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="12" cy="17.5" rx="5" ry="5.5" fill="currentColor" opacity="0.95"/>
      <ellipse cx="12" cy="17" rx="3.5" ry="4.2" fill="white" opacity="0.98"/>
      
      {/* Eyes looking at laptop */}
      <circle cx="10.8" cy="15.5" r="0.9" fill="currentColor"/>
      <circle cx="13.2" cy="15.5" r="0.9" fill="currentColor"/>
      <circle cx="11" cy="15.3" r="0.4" fill="white"/>
      <circle cx="13.4" cy="15.3" r="0.4" fill="white"/>
      
      {/* Beak */}
      <ellipse cx="12" cy="16.5" rx="1" ry="0.7" fill="#ff6b35" opacity="0.8"/>
      
      {/* Head */}
      <circle cx="12" cy="12.5" r="3.5" fill="currentColor" opacity="0.95"/>
      
      {/* Wings */}
      <ellipse cx="8" cy="17.5" rx="1.8" ry="2.5" fill="currentColor" opacity="0.8"/>
      <ellipse cx="16" cy="17.5" rx="1.8" ry="2.5" fill="currentColor" opacity="0.8"/>
      
      {/* Laptop screen */}
      <rect x="8" y="5" width="8" height="6" rx="0.5" fill="#64748b" opacity="0.9"/>
      <rect x="8.5" y="5.5" width="7" height="5" rx="0.3" fill="#e0f2fe"/>
      
      {/* Code on screen */}
      <line x1="9.5" y1="7" x2="12.5" y2="7" stroke="#3b82f6" strokeWidth="0.5"/>
      <line x1="9.5" y1="8" x2="14" y2="8" stroke="#8b5cf6" strokeWidth="0.5"/>
      <line x1="9.5" y1="9" x2="11.5" y2="9" stroke="#10b981" strokeWidth="0.5"/>
      
      {/* Laptop base */}
      <rect x="7" y="11" width="10" height="0.8" rx="0.3" fill="#64748b"/>
      <rect x="6.5" y="11.8" width="11" height="0.4" fill="#94a3b8"/>
    </svg>
  );
}

export function PenguinGroup({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left penguin */}
      <ellipse cx="7.5" cy="15.5" rx="3.5" ry="4.5" fill="currentColor" opacity="0.88"/>
      <ellipse cx="7.5" cy="15" rx="2.3" ry="3.2" fill="white" opacity="0.95"/>
      <circle cx="6.8" cy="13.8" r="0.6" fill="currentColor"/>
      <circle cx="8.2" cy="13.8" r="0.6" fill="currentColor"/>
      <circle cx="7.5" cy="11" r="2.5" fill="currentColor" opacity="0.88"/>
      <ellipse cx="7.5" cy="14.5" rx="0.7" ry="0.5" fill="#ff6b35" opacity="0.7"/>
      
      {/* Middle penguin (taller) */}
      <ellipse cx="12" cy="14.5" rx="4.2" ry="5.5" fill="currentColor" opacity="0.95"/>
      <ellipse cx="12" cy="14" rx="3" ry="4.2" fill="white" opacity="0.98"/>
      <circle cx="11.2" cy="12.3" r="0.8" fill="currentColor"/>
      <circle cx="12.8" cy="12.3" r="0.8" fill="currentColor"/>
      <circle cx="11.4" cy="12.1" r="0.3" fill="white"/>
      <circle cx="13" cy="12.1" r="0.3" fill="white"/>
      <circle cx="12" cy="9.5" r="3" fill="currentColor" opacity="0.95"/>
      <ellipse cx="12" cy="13.2" rx="1" ry="0.7" fill="#ff6b35" opacity="0.8"/>
      <circle cx="10.5" cy="13.5" r="0.7" fill="#ff6b35" opacity="0.3"/>
      <circle cx="13.5" cy="13.5" r="0.7" fill="#ff6b35" opacity="0.3"/>
      
      {/* Right penguin */}
      <ellipse cx="16.5" cy="15.5" rx="3.5" ry="4.5" fill="currentColor" opacity="0.88"/>
      <ellipse cx="16.5" cy="15" rx="2.3" ry="3.2" fill="white" opacity="0.95"/>
      <circle cx="15.8" cy="13.8" r="0.6" fill="currentColor"/>
      <circle cx="17.2" cy="13.8" r="0.6" fill="currentColor"/>
      <circle cx="16.5" cy="11" r="2.5" fill="currentColor" opacity="0.88"/>
      <ellipse cx="16.5" cy="14.5" rx="0.7" ry="0.5" fill="#ff6b35" opacity="0.7"/>
    </svg>
  );
}

export function Snowflake({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        
        <line x1="12" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="12" y1="2" x2="14" y2="4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        
        <line x1="12" y1="22" x2="10" y2="20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="12" y1="22" x2="14" y2="20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        
        <line x1="2" y1="12" x2="4" y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="4" y2="14" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        
        <line x1="22" y1="12" x2="20" y2="10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
        <line x1="22" y1="12" x2="20" y2="14" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
