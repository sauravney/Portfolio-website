
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  reverse?: boolean;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
  repoUrl,
  reverse = false,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-8",
      "lg:flex-row lg:items-center",
      reverse && "lg:flex-row-reverse"
    )}>
      <div className="lg:w-1/2 overflow-hidden rounded-xl group">
        <img
          src={imageSrc}
          alt={`${title} project preview`}
          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-display font-bold mb-3">
          {title}
        </h3>
        
        <p className="text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              Live Preview
            </a>
          )}
          
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
