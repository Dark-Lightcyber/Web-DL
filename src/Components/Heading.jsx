import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions } from '@mui/material';
import pic2 from '../Asserts/pic-card.png';

const cardData = [
  {
    title: 'Learn About Us',
    description: 'Animals are a diverse group of organisms found across every continent except Antarctica. With over 6,000 species of reptiles alone.',
    image: pic2,
  },
  {
    title: 'Discover Wildlife',
    description: 'Explore the amazing diversity of species around the world and learn how they adapt to their environments and coexist in nature.',
    image: pic2,
  },
  {
    title: 'Nature & Beyond',
    description: 'Understand the role of reptiles and other animals in preserving ecological balance and how we can protect them.',
    image: pic2,
  },
];

const Heading = () => {
  return (
    <Box sx={{ backgroundColor: 'white', margin: '10px', padding: '50px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '30px' }}>
        This is a Heading
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="200" image={card.image} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: 'orange',
                  padding: '10px',
                  width: '150px',
                  '&:hover': {
                    backgroundColor: '#e69500',
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Heading;



