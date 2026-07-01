'use client';

import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { useRouter } from 'next/navigation';

export default function DockWrapper() {
  const router = useRouter();

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => router.push('/') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => router.push('/archive') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => router.push('/profile') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => router.push('/settings') },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}
