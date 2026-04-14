const CircleProgress = ({ value = 65, size = 80, showLabel = false }) => {
  const degree = value * 3.6;

  return (
    <div
      className='relative flex shrink-0 items-center justify-center'
      style={{ width: size, height: size }}
    >
      <div
        className='rounded-full'
        style={{
          width: size,
          height: size,
          background: `conic-gradient(var(--color-brand-accent) ${degree}deg, var(--color-bg-primary) 0deg)`,
        }}
      >
        <div
          className='absolute flex flex-col items-center justify-center rounded-full bg-white'
          style={{
            inset: size * 0.1,
          }}
        >
          <span
            className='font-semibold'
            style={{ fontSize: size * 0.24 }}
          >
            {value}%
          </span>

          {showLabel && (
            <span
              className='text-text-secondary'
              style={{ fontSize: size * 0.12 }}
            >
              Complete
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
