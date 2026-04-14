import { Clock3 } from 'lucide-react';

const NotificationCard = ({
  title,
  message,
  time,
  actionText,
  onAction,
  icon: Icon,
}) => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between'>
      {/* LEFT */}
      <div className='flex items-start gap-3 sm:gap-4'>
        {/* Icon */}
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-brand-primary'>
          {Icon && <Icon size={18} />}
        </div>

        {/* Text */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-text-primary sm:text-base'>
            {title}
          </h3>

          <p className='text-xs leading-6 text-text-secondary sm:text-sm'>
            {message}
          </p>

          <div className='flex items-center gap-2 text-xs text-text-secondary sm:text-sm'>
            <Clock3 size={14} />
            <span>{time}</span>
          </div>
        </div>
      </div>

      {/* RIGHT ACTION */}
      {actionText && (
        <button
          onClick={onAction}
          className='md:min-w-[130px] mdh-11 inine-flex self-end w-full rounded-full bg-brand-primary px-5 py-2 text-xs font-medium text-white transition hover:opacity-90 sm:w-auto'
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
