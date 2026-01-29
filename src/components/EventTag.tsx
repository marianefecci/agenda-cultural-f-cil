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
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all duration-200',
        sizeClasses[size],
        eventTypeColors[type],
        active ? 'opacity-100' : 'opacity-40',
        onClick && 'cursor-pointer hover:scale-105 hover:shadow-lg',
        type === 'literature' ? 'text-background' : 'text-foreground'
      )}
    >
      {eventTypeLabels[type]}
    </span>
  );
};
