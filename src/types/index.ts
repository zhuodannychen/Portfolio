export interface Book {
  title: string;
  date: string;
  link: string;
}

export interface TechNote {
  title: string;
  date: string;
  link: string;
}

export interface FinanceNote {
  title: string;
  date: string;
  link: string;
}

export interface Project {
  title: string;
  date: string;
  tools: string;
  img: string;
  desc: string;
  github: string;
  demo_link?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  type: string;
  level: number;
}

export interface ComponentProps {
  id?: string;
  className?: string;
}

export interface NavbarProps extends ComponentProps {
  isCollapsed?: boolean;
}

export interface SectionProps extends ComponentProps {
  title?: string;
}

export interface ProjectContainerProps {
  project_name: string;
  project_date: string;
  madeWith: string;
  project_img: string;
  project_body: string;
  github_link: string;
  demo_link?: string;
}

export interface NoteRenderProps {
  note: string;
}