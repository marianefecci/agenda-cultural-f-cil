import { motion } from 'framer-motion';
import { CulturalEvent } from '@/types/event';
import { EventCard } from './EventCard';
import { Star } from 'lucide-react';

interface FeaturedEventsProps {
  events: CulturalEvent[];
}

export const FeaturedEvents = ({ events }: FeaturedEventsProps) => {
  const featuredEvents = events.filter(event => event.featured).slice(0, 4);
  
  if (featuredEvents.length === 0) return null;
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Star className="h-6 w-6 text-primary fill-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Eventos em Destaque
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
