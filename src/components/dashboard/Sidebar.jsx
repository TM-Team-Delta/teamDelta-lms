import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import sidepic from '../../assets/sidepic.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Settings,
  LogOut,
  CircleAlert,
  Medal,
  Bell,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    end: true,
  },
  {
    id: 2,
    name: 'Courses',
    path: '/dashboard/courses',
    icon: GraduationCap,
  },
  {
    id: 3,
    name: 'Team',
    path: '/dashboard/team',
    icon: Users,
  },
  {
    id: 4,
    name: 'Assignment',
    path: '/dashboard/assignment',
    icon: BookOpen,
  },
  {
    id: 5,
    name: 'Track progress',
    path: '/dashboard/track-progress',
    icon: Trophy,
  },
  {
    id: 6,
    name: 'Certification',
    path: '/dashboard/certificate',
    icon: Medal,
  },
  {
    id: 7,
    name: 'Notifications',
    path: '/dashboard/notifications',
    icon: Bell,
  },
];

const utilityItems = [
  {
    id: 1,
    name: 'Help',
    icon: CircleAlert,
  },
  {
    id: 2,
    name: 'Settings',
    icon: Settings,
    path: '/dashboard/settings',
  },
  {
    id: 3,
    name: 'Logout',
    icon: LogOut,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await logout();
    navigate('/login');
  };

  // Auto-collapse sidebar below 1280px and expand on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayName =
    `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim() || 'User';

  const displayEmail = profile?.email || 'No email';

  const displayPhoto = profile?.profilePhotoUrl || sidepic;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className='fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity md:hidden'
          onClick={onClose}
        />
      )}

      <aside
        className={`
          ${collapsed ? 'w-16' : 'w-64'} 
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
          fixed inset-y-0 left-0 z-[70] flex h-screen flex-col overflow-hidden border-r border-neutral bg-white transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0 md:transition-all
        `}
      >
        <div className='flex min-h-0 flex-1 flex-col justify-between overflow-y-auto'>
          <div className='flex flex-1 flex-col'>
            {/* Logo */}
            <div className='border-b border-neutral p-3.5'>
              {collapsed ? (
                <div className='group relative flex justify-center'>
                  <div className='relative flex h-12 w-12 items-center justify-center'>
                    <img
                      src={logo}
                      alt='Logo'
                      className='h-10 w-10 object-contain flex-shrink-0'
                    />

                    <button
                      type='button'
                      onClick={() => setCollapsed(false)}
                      aria-label='Expand sidebar'
                      className='absolute inset-0 flex items-center justify-center rounded-md bg-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100'
                    >
                      <PanelLeftOpen size={18} className='text-brand-primary' />
                    </button>
                  </div>
                </div>
              ) : (
                <div className='flex items-center justify-between gap-3'>
                  <div className='flex min-w-0 items-center gap-3'>
                    <img
                      src={logo}
                      alt='Logo'
                      className='h-12 w-12 min-h-12 min-w-12 object-contain flex-shrink-0'
                    />
                    <h2 className='truncate text-lg font-bold text-brand-primary'>
                      Trueminds
                    </h2>
                  </div>

                  <button
                    type='button'
                    onClick={() => setCollapsed(true)}
                    aria-label='Collapse sidebar'
                    className='flex h-9 w-9 items-center justify-center rounded-md border border-neutral text-brand-primary transition hover:bg-brand-muted'
                  >
                    <PanelLeftClose size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Navlinks */}
            <nav className='flex flex-1 flex-col gap-2 px-2 py-4'>
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center rounded-lg text-sm font-medium transition-colors ${
                        collapsed
                          ? 'justify-center px-2 py-3'
                          : 'gap-3 px-3 py-3'
                      } ${
                        isActive
                          ? 'bg-brand-primary text-white'
                          : 'text-brand-primary hover:bg-brand-muted'
                      }`
                    }
                    title={collapsed ? item.name : ''}
                  >
                    <Icon size={20} className='shrink-0' />
                    {!collapsed && (
                      <span className='truncate'>{item.name}</span>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className='border-t border-neutral'>
            <div className='flex flex-col gap-2 px-2 py-4'>
              {utilityItems.map((item) => {
                const Icon = item.icon;

                if (item.path) {
                  return (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      onClick={onClose}
                      title={collapsed ? item.name : ''}
                      className={({ isActive }) =>
                        `flex items-center rounded-lg text-sm transition ${
                          collapsed
                            ? 'justify-center px-2 py-3'
                            : 'gap-3 px-3 py-3'
                        } ${
                          isActive
                            ? 'bg-brand-primary text-white'
                            : 'text-brand-primary hover:bg-brand-muted'
                        }`
                      }
                    >
                      <Icon size={20} className='shrink-0' />
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  );
                }

                return (
                  <button
                    key={item.id}
                    type='button'
                    onClick={item.name === 'Logout' ? handleLogoutClick : undefined}
                    title={collapsed ? item.name : ''}
                    className={`flex items-center rounded-lg text-sm text-brand-primary transition hover:bg-brand-muted ${
                      collapsed ? 'justify-center px-2 py-3' : 'gap-3 px-3 py-3'
                    }`}
                  >
                    <Icon size={20} className='shrink-0' />
                    {!collapsed && <span>{item.name}</span>}
                  </button>
                );
              })}
            </div>

            <NavLink
              to='/dashboard/profile'
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center p-3 transition-all duration-200 ${
                  collapsed ? 'justify-center' : 'mx-2 mb-2 gap-3 rounded-xl'
                } ${
                  isActive
                    ? 'bg-[#0E3326] text-white shadow-lg border-none'
                    : 'border-t border-neutral text-text-primary hover:bg-brand-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={displayPhoto}
                    alt='sidepic'
                    className='h-11 w-11 min-h-11 min-w-11 rounded-full object-cover flex-shrink-0'
                  />

                  {!collapsed && (
                    <div className='min-w-0'>
                      <h1
                        className={`truncate text-sm font-bold ${isActive ? 'text-white' : 'text-text-primary'}`}
                      >
                        {displayName}
                      </h1>
                      <h3
                        className={`truncate text-xs ${isActive ? 'text-gray-300' : 'text-text-secondary'}`}
                      >
                        {displayEmail}
                      </h3>
                    </div>
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
