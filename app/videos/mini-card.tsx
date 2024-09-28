import { cn } from "@/lib/utils";
import { Video } from ".";


interface MiniCardVideoProps {
  video: Video;
  selectedVideo: number;
  onClick: () => void;
  className?: string
}
const MiniCardVideo = ({ video, selectedVideo, className, onClick }: MiniCardVideoProps) => {
  return (
    <div
      className={cn(
        'bg-background shadow-lg rounded-lg flex items-center justify-center text-primary text-lg cursor-pointer transition-transform transform hover:scale-105', // Classes base
        selectedVideo === video.id && 'bg-background/50',
        className
      )}
      onClick={onClick}
    >
      {video.title}
    </div>
  );
}

export default MiniCardVideo;