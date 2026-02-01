import { Calendar, Facebook, Instagram, Twitter } from 'lucide-react';
import { WavyLine } from './DecorativeElements';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t-2 border-border py-12 md:py-16 relative">
      {/* Wavy top border */}
      <div className="absolute -top-4 left-0 right-0">
        <WavyLine className="text-border" />
      </div>
      
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-artisanal rotate-2">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl text-foreground">
                Agenda <span className="text-primary">Cultural</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm font-body">
              Sua plataforma para descobrir os melhores eventos culturais da cidade. 
              Shows, exposições, teatro e muito mais.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  Calendário
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all hover:-rotate-3"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all hover:rotate-3"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all hover:-rotate-2"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © 2026 Agenda Cultural. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
