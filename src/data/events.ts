import { CulturalEvent } from '@/types/event';

// Import event images
import orchestraImg from '@/assets/events/orchestra.jpg';
import theaterImg from '@/assets/events/theater.jpg';
import cinemaImg from '@/assets/events/cinema.jpg';
import artExhibitionImg from '@/assets/events/art-exhibition.jpg';
import balletImg from '@/assets/events/ballet.jpg';
import literatureImg from '@/assets/events/literature.jpg';
import jazzFestivalImg from '@/assets/events/jazz-festival.jpg';
import workshopImg from '@/assets/events/workshop.jpg';
import mpbImg from '@/assets/events/mpb.jpg';
import documentaryImg from '@/assets/events/documentary.jpg';
import digitalArtImg from '@/assets/events/digital-art.jpg';
import spanishTheaterImg from '@/assets/events/spanish-theater.jpg';

// Mock data for demonstration
export const mockEvents: CulturalEvent[] = [
  {
    id: '1',
    title: 'Orquestra Sinfônica - Beethoven',
    description: 'Uma noite mágica com as obras mais célebres de Beethoven interpretadas pela Orquestra Sinfônica Nacional.',
    date: new Date(2026, 0, 30),
    time: '20:00',
    location: 'Teatro Municipal',
    type: 'music',
    image: orchestraImg,
    featured: true,
  },
  {
    id: '2',
    title: 'Hamlet - Shakespeare',
    description: 'A tragédia clássica de Shakespeare em uma montagem contemporânea e impactante.',
    date: new Date(2026, 0, 31),
    time: '19:30',
    location: 'Centro Cultural',
    type: 'theater',
    image: theaterImg,
    featured: true,
  },
  {
    id: '3',
    title: 'Mostra de Cinema Brasileiro',
    description: 'Festival exibindo os melhores filmes do cinema nacional contemporâneo.',
    date: new Date(2026, 1, 1),
    time: '14:00',
    location: 'Cinemateca',
    type: 'cinema',
    image: cinemaImg,
  },
  {
    id: '4',
    title: 'Exposição: Arte Moderna',
    description: 'Coleção de obras de artistas brasileiros do movimento modernista.',
    date: new Date(2026, 1, 2),
    time: '10:00',
    location: 'Museu de Arte',
    type: 'art',
    image: artExhibitionImg,
    featured: true,
  },
  {
    id: '5',
    title: 'Ballet Clássico - O Lago dos Cisnes',
    description: 'O clássico de Tchaikovsky apresentado pelo Ballet Nacional.',
    date: new Date(2026, 1, 5),
    time: '20:00',
    location: 'Teatro Municipal',
    type: 'dance',
    image: balletImg,
  },
  {
    id: '6',
    title: 'Feira Literária',
    description: 'Encontro com autores, lançamentos e debates sobre literatura contemporânea.',
    date: new Date(2026, 1, 8),
    time: '09:00',
    location: 'Biblioteca Central',
    type: 'literature',
    image: literatureImg,
  },
  {
    id: '7',
    title: 'Festival de Jazz',
    description: 'Três dias de música com artistas nacionais e internacionais.',
    date: new Date(2026, 1, 10),
    time: '18:00',
    location: 'Parque da Cidade',
    type: 'festival',
    image: jazzFestivalImg,
    featured: true,
  },
  {
    id: '8',
    title: 'Workshop de Cerâmica',
    description: 'Aprenda técnicas tradicionais de cerâmica com artesãos locais.',
    date: new Date(2026, 1, 12),
    time: '14:00',
    location: 'Ateliê Criativo',
    type: 'workshop',
    image: workshopImg,
  },
  {
    id: '9',
    title: 'Show de MPB',
    description: 'Uma noite com os clássicos da música popular brasileira.',
    date: new Date(2026, 1, 15),
    time: '21:00',
    location: 'Casa de Shows',
    type: 'music',
    image: mpbImg,
  },
  {
    id: '10',
    title: 'Peça: A Vida é Sonho',
    description: 'Clássico de Calderón de la Barca em versão contemporânea.',
    date: new Date(2026, 1, 18),
    time: '19:00',
    location: 'Teatro Experimental',
    type: 'theater',
    image: spanishTheaterImg,
  },
  {
    id: '11',
    title: 'Documentários Ambientais',
    description: 'Sessão especial de documentários sobre meio ambiente e sustentabilidade.',
    date: new Date(2026, 1, 20),
    time: '15:00',
    location: 'Cinemateca',
    type: 'cinema',
    image: documentaryImg,
  },
  {
    id: '12',
    title: 'Instalação Interativa',
    description: 'Arte digital e imersiva que convida o público a participar.',
    date: new Date(2026, 1, 22),
    time: '10:00',
    location: 'Galeria Contemporânea',
    type: 'art',
    image: digitalArtImg,
  },
];
