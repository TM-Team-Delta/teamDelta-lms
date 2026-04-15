import React, { useState } from 'react';
import { Search, Bell, MessageSquare, X, Flame, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import UserAvatar from '../common/UserAvatar';

const DashboardHeader = ({ onMenuClick }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { profile } = useAuth();
  const location = useLocation();
  const streakDays = Number(
    profile?.stats?.streakDays || profile?.streakDays || 0
  );
  const displayName =
    `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim() || 'User';

  // Determine page title based on route
  const getPageTitle = () => {
    if (location.pathname.includes('/dashboard/profile')) return 'My Profile';
    if (location.pathname.includes('/dashboard/settings/appearance')) {
      return 'Appearance';
    }
    if (location.pathname.includes('/dashboard/settings/privacy-security')) {
      return 'Privacy & Security';
    }
    if (location.pathname.includes('/dashboard/settings/language-region')) {
      return 'Language & Region';
    }
    if (location.pathname.includes('/dashboard/settings')) return 'Settings';
    if (location.pathname.includes('/dashboard/courses')) return 'Courses';
    if (location.pathname === '/dashboard') return 'Overview';
    return '';
  };

  const pageTitle = getPageTitle();

  return (
    <header className='flex items-center justify-between gap-3 p-4 bg-white md:bg-transparent'>
      <div className='flex min-w-0 flex-1 items-center gap-3'>
        {/* hamburger menu for mobile */}
        <button
          type='button'
          onClick={onMenuClick}
          className='md:hidden flex h-10 w-10 items-center justify-center text-text-primary hover:bg-bg-muted rounded-lg transition-colors'
          aria-label='Open menu'
        >
          <Menu size={24} />
        </button>

        {/* Mobile Page Title */}
        {pageTitle && (
          <h1 className='md:hidden text-lg font-bold text-gray-800 tracking-tight'>
            {pageTitle}
          </h1>
        )}

        <div className='hidden w-full max-w-xl items-center rounded-lg bg-bg-muted px-3 py-3 md:flex'>
          <Search size={18} className='shrink-0 text-text-secondary' />
          <input
            type='text'
            placeholder='Search courses, assignments, mentors...'
            className='ml-3 w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-secondary'
          />
        </div>

        <div className='md:hidden'>
          {!showSearch ? (
            <button
              type='button'
              onClick={() => setShowSearch(true)}
              className='flex h-10 w-10 items-center justify-center rounded-lg bg-bg-muted text-text-secondary'
              aria-label='Open search'
            >
              <Search size={18} />
            </button>
          ) : (
            <div className='flex items-center gap-2 rounded-lg bg-bg-muted px-3 py-2'>
              <Search size={18} className='shrink-0 text-text-secondary' />
              <input
                type='text'
                placeholder='Search...'
                autoFocus
                className='w-32 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-secondary'
              />
              <button
                type='button'
                onClick={() => setShowSearch(false)}
                className='text-text-secondary'
                aria-label='Close search'
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='flex shrink-0 items-center gap-2 sm:gap-3'>
        <div className='hidden items-center gap-2 rounded-lg bg-bg-muted px-4 py-2.5 md:flex'>
          <Flame size={18} className='text-brand-accent' />
          <span className='text-sm font-medium text-text-primary'>
            {streakDays}-day streak
          </span>
        </div>

        <Link
          to='dashboard/notifications'
          className='hidden md:flex h-10 w-10 items-center justify-center rounded-lg bg-bg-muted text-text-secondary transition hover:bg-brand-muted'
          aria-label='Notifications'
        >
          <Bell size={18} />
        </Link>

        <Link
          to='chat'
          className='flex h-10 w-10 items-center justify-center rounded-lg bg-bg-muted text-text-secondary transition hover:bg-brand-muted'
          aria-label='Messages'
        >
          <MessageSquare size={18} />
        </Link>

        <Link
          to='/dashboard/profile'
          className='block rounded-full transition hover:opacity-90'
          aria-label='Go to profile page'
        >
          <UserAvatar
            src={profile?.profilePhotoUrl}
            alt='User profile'
            firstName={profile?.firstName}
            lastName={profile?.lastName}
            name={displayName}
            className='h-10 w-10 sm:h-11 sm:w-11 object-cover'
            initialsClassName='text-xs sm:text-sm'
          />
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
