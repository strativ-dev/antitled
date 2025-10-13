import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { useEffect } from 'react';

import useAppStore from '@/stores/useAppStore';

export default function ThemeToggle() {
  const { theme, setTheme } = useAppStore();

  // Detect system theme once on initial load if theme is 'system'
  useEffect(() => {
    if (theme === 'system') {
      const systemIsDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(systemIsDark ? 'dark' : 'light');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      checked={isDark}
      onChange={toggleTheme}
      title={`Theme: ${theme === 'light' ? 'Light' : 'Dark'}`}
    />
  );
}
