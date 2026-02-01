import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Confetti, WavyLine, StarBurst } from './DecorativeElements';

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Confetti decorations */}
        <motion.div
          animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 opacity-60"
        >
          <Confetti />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -5, 0], y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-16 w-24 h-24 opacity-50"
        >
          <Confetti />
        </motion.div>
        
        {/* Star decorations */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-1/4 text-primary"
        >
          <StarBurst className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-40 right-1/4 text-accent"
        >
          <StarBurst className="w-8 h-8" />
        </motion.div>
        
        {/* Soft colored circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-2 border-primary/30 mb-8 rotate-slight-3"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary font-heading">
              Descubra eventos incríveis
            </span>
          </motion.div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-foreground">
            Sua{' '}
            <span className="text-primary relative inline-block">
              Agenda Cultural
              <WavyLine className="absolute -bottom-2 left-0 right-0 text-primary/40" />
            </span>
            <br />
            em um só lugar
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-body">
            Explore shows, exposições, peças de teatro, festivais e muito mais. 
            Encontre os melhores eventos culturais da cidade.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="btn-artisanal bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base rounded-xl border-2 border-foreground/10"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Calendário
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-artisanal border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 px-8 py-6 text-base rounded-xl font-bold"
            >
              Explorar Eventos
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-background fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" />
        </svg>
      </div>
    </section>
  );
};
