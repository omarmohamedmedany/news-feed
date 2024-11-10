import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';

const LoadingArticle = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" width="100%" height={30} />
        <Skeleton variant="text" width="80%" height={20} />
      </CardContent>
    </Card>
  );
};

export default LoadingArticle;
