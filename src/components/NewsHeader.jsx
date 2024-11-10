// NewsHeader.js
import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function NewsHeader({ category, onCategoryChange, onSearchChange }) {
  return (
    <div style={{ padding: '20px' }}>
      <FormControl variant="outlined" style={{ marginRight: '20px' }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={onCategoryChange}
          label="Category"
        >
          <MenuItem value="general">General</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Search News"
        variant="outlined"
        onChange={onSearchChange}
        fullWidth
      />
    </div>
  );
}

export default NewsHeader;
