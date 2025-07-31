export interface Module {
  title: string;
  description: string;
  id?: string;
  icon?: string;
  completed?: boolean;
}

export interface TimelineEvent {
  year: string;
  text: string;
  id?: string;
}

export interface VideoPlayerProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
}

export interface ProgressIndicatorProps {
  progress: number;
  label?: string;
  className?: string;
}

export interface NavItem {
  name: string;
  href: string;
  id?: string;
}