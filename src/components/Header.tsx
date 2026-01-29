import { motion } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow transition-shadow group-hover:shadow-[var(--shadow-glow-primary)]">
              <Calendar className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold hidden sm:block">
              Agenda <span className="text-primary">Cultural</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#calendario" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Calendário
            </a>
            <a href="#eventos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Eventos
            </a>
            <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categorias
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Adicionar Evento
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              <a href="#calendario" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Calendário
              </a>
              <a href="#eventos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Eventos
              </a>
              <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Categorias
              </a>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full"
              >
                Adicionar Evento
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
