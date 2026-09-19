import { NavLink } from 'react-router-dom';
import { BarChart3, Home, MessageSquare, Heart, LogOut, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Relationships', path: '/relationships', icon: Heart },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoInfo}>
        <div className={styles.logoIcon}><Heart size={18} /></div>
        <span className={styles.logoText}>RelateAI</span>
      </div>

      <nav className={styles.navMenu}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.active}` : styles.navItem)}
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.logoutBtn}>
        <LogOut size={18} />
        <span>Logout</span>
      </div>
    </aside>
  );
}