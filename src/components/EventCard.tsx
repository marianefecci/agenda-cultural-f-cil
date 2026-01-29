import { motion } from 'framer-motion';
import { CulturalEvent } from '@/types/event';
import { EventTag } from './EventTag';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface EventCardProps {
  event: CulturalEvent;
  index?: number;
}

export const EventCard = ({ event, index = 0 }: EventCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
    >
      {/* Event Image */}
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Tag overlay */}
          <div className="absolute top-3 left-3">
            <EventTag type={event.type} size="sm" />
          </div>
          
          {/* Featured badge */}
          {event.featured && (
            <div className="absolute top-3 right-3">
              <span className="text-xs font-medium text-primary bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
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
            <EventTag type={event.type} size="sm" />
            {event.featured && (
              <span className="text-xs font-medium text-primary">★ Destaque</span>
            )}
          </div>
        )}
        
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{format(event.date, "d 'de' MMMM", { locale: ptBR })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
    </motion.article>
  );
};
