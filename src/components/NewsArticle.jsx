import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const NewsArticle = ({ article }) => {
  return (
    <Card>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography variant="body2">{article.description}</Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
};

export default NewsArticle;
