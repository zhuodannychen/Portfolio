declare module 'react-particles-js' {
  import { Component } from 'react';
  
  interface ParticlesProps {
    params?: any;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export default class Particles extends Component<ParticlesProps> {}
}

declare module 'react-skillbars' {
  import { Component } from 'react';
  
  interface Skill {
    type: string;
    level: number;
  }
  
  interface SkillBarProps {
    skills: Skill[];
    height?: number;
    animationDelay?: number;
    animationDuration?: number;
    offset?: number;
    colors?: {
      bar?: string;
      title?: {
        text?: string;
        background?: string;
      };
    };
  }
  
  export default class SkillBar extends Component<SkillBarProps> {}
}

declare module 'react-vertical-timeline-component' {
  import { Component } from 'react';
  
  interface VerticalTimelineProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    date?: string;
    dateClassName?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    onTimelineElementClick?: () => void;
    position?: 'left' | 'right';
  }
  
  export class VerticalTimeline extends Component<VerticalTimelineProps> {}
  export class VerticalTimelineElement extends Component<VerticalTimelineElementProps> {}
}

declare module 'react-scroll' {
  interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    activeClass?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }
  
  export const Link: React.FC<LinkProps>;
  
  export const animateScroll: {
    scrollToTop: (options?: any) => void;
    scrollToBottom: (options?: any) => void;
    scrollTo: (to: number, options?: any) => void;
  };
}