// NewsFeed.js
import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

function NewsFeed({ articles }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {articles.map((article, index) => (
        <Card key={index} style={{ width: '300px', margin: '10px' }}>
          {/* CardActionArea with href to open the URL in a new tab */}
          <CardActionArea component="a" href={article.url} target="_blank">
            <CardContent>
              <Typography variant="h6">{article.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {article.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default NewsFeed;
