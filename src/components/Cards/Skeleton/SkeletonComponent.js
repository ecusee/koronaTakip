import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonComponent = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={310} height={118} />
    </div>
  );
}

export default SkeletonComponent;