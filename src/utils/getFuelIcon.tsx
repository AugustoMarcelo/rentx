import React, { useMemo } from 'react';
import { DropletIcon, EnergyIcon, LeafIcon } from '../images/icons';

const getFuelIcon = (type: 'gasoline' | 'energy' | 'alcohol') =>
  useMemo(() => {
    switch (type) {
      case 'gasoline':
        return <DropletIcon width={24} height={24} fill="#AEAEB3" />;
      case 'energy':
        return <EnergyIcon width={24} height={24} fill="#AEAEB3" />;
      default:
        return <LeafIcon width={24} height={24} fill="#AEAEB3" />;
    }
  }, []);

export default getFuelIcon;
