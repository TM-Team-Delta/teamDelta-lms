import React, { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Bell,
  ChevronDown,
  Globe,
  Lock,
  Menu,
  Palette,
  UserRound,
  X,
} from 'lucide-react';

const settingGroups = [
  {
    title: 'Account',
    items: [
      {
        id: 'profile',
        label: 'Profile',
        icon: UserRound,
        path: '/dashboard/settings',
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: Bell,
        path: '/dashboard/notifications',
      },
      {
        id: 'appearance',
        label: 'Appearance',
        icon: Palette,
        path: '/dashboard/settings/appearance',
      },
    ],
  },
  {
    title: 'Preferences',
    items: [
      {
        id: 'language',
        label: 'Language & Region',
        icon: Globe,
        path: '/dashboard/settings/language-region',
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        id: 'privacy',
        label: 'Privacy & Security',
        icon: Lock,
        path: '/dashboard/settings/privacy-security',
      },
    ],
  },
];

const SettingsSidebar = ({ activeItem = 'profile' }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const activeLabel = useMemo(() => {
    for (const group of settingGroups) {
      for (const item of group.items) {
        if (location.pathname === item.path || item.id === activeItem) {
          return item.label;
        }
      }
    }

    return 'Settings menu';
  }, [activeItem, location.pathname]);

  return (
    <aside className='w-full lg:max-w-[220px] lg:shrink-0'>
      <button
        type='button'
        onClick={() => setIsMobileOpen((currentState) => !currentState)}
        className='flex w-full items-center justify-between rounded-xl border border-neutral bg-white px-4 py-3 text-left text-sm font-medium text-text-primary shadow-sm transition hover:bg-bg-muted lg:hidden'
        aria-expanded={isMobileOpen}
        aria-label='Toggle settings menu'
      >
        <span className='flex items-center gap-3'>
          <Menu size={16} className='text-brand-primary' />
          <span className='truncate'>{activeLabel}</span>
        </span>

        {isMobileOpen ? (
          <X size={16} className='shrink-0 text-text-secondary' />
        ) : (
          <ChevronDown size={16} className='shrink-0 text-text-secondary' />
        )}
      </button>

      <div
        className={`border border-neutral bg-white p-4 shadow-sm sm:p-5 ${
          isMobileOpen ? 'mt-3 block' : 'mt-3 hidden'
        } lg:mt-0 lg:block`}
      >
        <div className='space-y-6'>
          {settingGroups.map((group) => (
            <div key={group.title}>
              <p className='mb-3 text-xs font-medium text-text-secondary'>
                {group.title}
              </p>

              <div className='space-y-1.5'>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    location.pathname === item.path || item.id === activeItem;

                  if (item.path) {
                    return (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          isActive
                            ? 'bg-brand-primary text-white'
                            : 'text-text-primary hover:bg-bg-muted'
                        }`}
                      >
                        <Icon size={16} className='shrink-0' />
                        <span className='truncate'>{item.label}</span>
                      </NavLink>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      type='button'
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        isActive
                          ? 'bg-brand-primary text-white'
                          : 'text-text-primary hover:bg-bg-muted'
                      }`}
                    >
                      <Icon size={16} className='shrink-0' />
                      <span className='truncate'>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
