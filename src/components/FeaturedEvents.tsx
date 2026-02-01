import { motion } from 'framer-motion';
import { CulturalEvent } from '@/types/event';
import { EventCard } from './EventCard';
import { Star } from 'lucide-react';
import { StarBurst } from './DecorativeElements';

interface FeaturedEventsProps {
  events: CulturalEvent[];
}

export const FeaturedEvents = ({ events }: FeaturedEventsProps) => {
  const featuredEvents = events.filter(event => event.featured).slice(0, 4);
  
  if (featuredEvents.length === 0) return null;
  
  return (
    <section className="py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-12 left-8 text-primary/30 hidden md:block">
        <StarBurst className="w-12 h-12 animate-wiggle" />
      </div>
      <div className="absolute bottom-20 right-12 text-accent/30 hidden md:block">
        <StarBurst className="w-10 h-10 animate-wiggle" />
      </div>
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-primary/10 rounded-lg -rotate-3">
            <Star className="h-6 w-6 text-primary fill-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Eventos em <span className="text-primary">Destaque</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
