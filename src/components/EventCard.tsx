import { motion } from 'framer-motion';
import { CulturalEvent } from '@/types/event';
import { EventTag } from './EventTag';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: CulturalEvent;
  index?: number;
}

const rotations = ['rotate-0', 'rotate-1', '-rotate-1', 'rotate-0.5', '-rotate-0.5'];
const shadowClasses: Record<string, string> = {
  music: 'shadow-music',
  theater: 'shadow-theater',
  cinema: 'shadow-cinema',
  art: 'shadow-art',
  dance: 'shadow-dance',
  literature: 'shadow-literature',
  festival: 'shadow-festival',
  workshop: 'shadow-workshop',
};

export const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const rotation = rotations[index % rotations.length];
  const shadowClass = shadowClasses[event.type];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, rotate: 0 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border-2 border-border transition-all duration-300",
        "hover:border-primary/50",
        rotation,
        shadowClass
      )}
    >
      {/* Event Image */}
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Tag overlay - rotated for handmade feel */}
          <div className="absolute top-3 left-3 -rotate-3">
            <EventTag type={event.type} size="sm" />
          </div>
          
          {/* Featured badge */}
          {event.featured && (
            <div className="absolute top-3 right-3 rotate-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-foreground bg-card/95 px-3 py-1.5 rounded-lg border-2 border-primary/30">
                ★ Destaque
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        {/* Show tag here if no image */}
        {!event.image && (
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="-rotate-2">
              <EventTag type={event.type} size="sm" />
            </div>
            {event.featured && (
              <span className="text-xs font-bold text-primary rotate-2">★ Destaque</span>
            )}
          </div>
        )}
        
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-body">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{format(event.date, "d 'de' MMMM", { locale: ptBR })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-tag-art" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
