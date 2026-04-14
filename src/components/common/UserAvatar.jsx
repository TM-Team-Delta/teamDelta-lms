import { useState } from 'react';

const getInitials = ({ firstName = '', lastName = '', name = '' }) => {
  const firstInitial = firstName.trim().charAt(0);
  const lastInitial = lastName.trim().charAt(0);

  if (firstInitial || lastInitial) {
    return `${firstInitial}${lastInitial}`.toUpperCase() || 'TM';
  }

  const nameParts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (nameParts.length >= 2) {
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  }

  if (nameParts.length === 1) {
    return nameParts[0].slice(0, 2).toUpperCase();
  }

  return 'TM';
};

const UserAvatar = ({
  src,
  alt = 'User avatar',
  firstName,
  lastName,
  name,
  className = '',
  initialsClassName = '',
}) => {
  const [hasImageError, setHasImageError] = useState(false);
  const shouldShowImage = Boolean(src) && !hasImageError;
  const initials = getInitials({ firstName, lastName, name });

  if (shouldShowImage) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setHasImageError(true)}
        className={`rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      aria-label={alt}
      className={`flex items-center justify-center rounded-full bg-[#0E3326] font-bold text-white ${className} ${initialsClassName}`}
    >
      {initials}
    </div>
  );
};

export default UserAvatar;
