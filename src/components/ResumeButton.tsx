
import React from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ResumeButtonProps {
  className?: string;
  resumePath: string;
}

const ResumeButton = ({ className, resumePath }: ResumeButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className={cn(
            "h-12 px-8 group",
            className
          )}
        >
          <a 
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="inline-flex items-center justify-center gap-2"
          >
            <FileText size={18} className="transition-transform group-hover:scale-110" />
            <span>View Resume</span>
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open resume in new tab</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ResumeButton;
