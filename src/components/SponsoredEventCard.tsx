import { motion } from 'framer-motion';
import { CulturalEvent } from '@/types/event';
import { EventTag } from './EventTag';
import { Calendar, Clock, MapPin, Star, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface SponsoredEventCardProps {
  event: CulturalEvent;
  sponsorName?: string;
  sponsorLogo?: string;
  sponsorUrl?: string;
  index?: number;
}

export const SponsoredEventCard = ({ 
  event, 
  sponsorName = "Patrocinador",
  sponsorLogo,
  sponsorUrl = "#",
  index = 0 
}: SponsoredEventCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-primary/30 transition-all duration-300",
        "hover:border-primary hover:shadow-lg hover:shadow-primary/10",
        "ring-1 ring-primary/20"
      )}
    >
      {/* Sponsored Badge - Top ribbon */}
      <div className="absolute top-0 right-0 z-20">
        <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-bl-lg flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" />
          Patrocinado
        </div>
      </div>

      {/* Event Image */}
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Tag overlay */}
          <div className="absolute top-3 left-3">
            <EventTag type={event.type} size="sm" />
          </div>
        </div>
      )}
      
      <div className="p-5">
        {/* Show tag here if no image */}
        {!event.image && (
          <div className="flex items-start justify-between gap-3 mb-3 mt-4">
            <EventTag type={event.type} size="sm" />
          </div>
        )}
        
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
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
            <Clock className="h-4 w-4 text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Sponsor footer */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <a 
            href={sponsorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group/sponsor"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Apresentado por
              </span>
              {sponsorLogo ? (
                <img 
                  src={sponsorLogo} 
                  alt={sponsorName}
                  className="h-5 object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-foreground group-hover/sponsor:text-primary transition-colors">
                  {sponsorName}
                </span>
              )}
            </div>
            <ExternalLink className="h-3 w-3 text-muted-foreground group-hover/sponsor:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
