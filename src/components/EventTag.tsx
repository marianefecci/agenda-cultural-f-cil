import { EventType, eventTypeLabels, eventTypeColors } from '@/types/event';
import { cn } from '@/lib/utils';

interface EventTagProps {
  type: EventType;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  active?: boolean;
}

export const EventTag = ({ type, size = 'md', onClick, active = true }: EventTagProps) => {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-lg font-bold transition-all duration-200 border-2 border-foreground/10',
        sizeClasses[size],
        eventTypeColors[type],
        active ? 'opacity-100' : 'opacity-40',
        onClick && 'cursor-pointer hover:scale-105 hover:-rotate-2 hover:shadow-lg',
        // Override text color for better contrast
        type === 'literature' ? 'text-foreground' : 'text-white'
      )}
      style={{
        boxShadow: active ? '2px 2px 0px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {eventTypeLabels[type]}
    </span>
  );
};
