export type EventType = 
  | 'music' 
  | 'theater' 
  | 'cinema' 
  | 'art' 
  | 'dance' 
  | 'literature' 
  | 'festival' 
  | 'workshop';

export interface CulturalEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  type: EventType;
  image?: string;
  featured?: boolean;
}

export const eventTypeLabels: Record<EventType, string> = {
  music: 'Música',
  theater: 'Teatro',
  cinema: 'Cinema',
  art: 'Arte',
  dance: 'Dança',
  literature: 'Literatura',
  festival: 'Festival',
  workshop: 'Workshop',
};

export const eventTypeColors: Record<EventType, string> = {
  music: 'tag-music',
  theater: 'tag-theater',
  cinema: 'tag-cinema',
  art: 'tag-art',
  dance: 'tag-dance',
  literature: 'tag-literature',
  festival: 'tag-festival',
  workshop: 'tag-workshop',
};
