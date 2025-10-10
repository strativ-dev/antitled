import { CompressOutlined, ExpandOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import useAppStore from '@/stores/useAppStore';

export default function CompactModeToggle() {
  const { isCompactMode, toggleCompactMode } = useAppStore();

  return (
    <Button
      type='text'
      icon={
        isCompactMode ? (
          <ExpandOutlined color='' />
        ) : (
          <CompressOutlined color='' />
        )
      }
      onClick={toggleCompactMode}
      title={`${isCompactMode ? 'Expand' : 'Compact'} mode`}
    />
  );
}
