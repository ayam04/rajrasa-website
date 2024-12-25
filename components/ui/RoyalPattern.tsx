'use client';

interface RoyalPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export function RoyalPattern({ 
  className = '', 
  color = 'var(--primary-blue)', 
  opacity = 0.03 
}: RoyalPatternProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(to right, ${color} 1px, transparent 1px),
          radial-gradient(circle at 50px 50px, ${color} 2px, transparent 2px),
          radial-gradient(circle at 150px 150px, ${color} 3px, transparent 3px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 300px 300px, 300px 300px',
        opacity
      }}
    />
  );
}

export function RoyalBorder() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary-gold/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary-gold/30 to-transparent" />
    </div>
  );
}