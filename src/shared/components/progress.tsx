import { cn } from '@/shared/libs/utils.ts';

type ProgressProps = {
  progress: number;
};

const Progress = ({ progress }: ProgressProps) => {
  const percentages = [25, 50, 75, 100];

  const isActive = (percent: number) => {
    return progress >= percent;
  };

  return (
    <div className="flex gap-2">
      {percentages.map((percent) => (
        <div
          key={percent}
          className={cn(
            'border-border relative flex h-8 flex-1 items-center justify-center rounded-full border',
            isActive(percent) ? 'bg-blue' : 'bg-white'
          )}
        >
          <span className={cn(isActive(percent) ? 'text-white' : 'text-gray')}>{percent}%</span>
        </div>
      ))}
    </div>
  );
};

export default Progress;
