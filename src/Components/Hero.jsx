import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import img1 from '../Asserts/pic1.png';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e6e6e6',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Grid container spacing={0}>
        {/* Text Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ ml: { xs: '0', md: '0', lg: '200px' } }}>
            <Typography
              sx={{
                fontSize: { xs: '18px', sm: '20px' },
                fontWeight: 'bold',
              }}
            >
              Bloom Website.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                maxWidth: { xs: '100%', md: '500px' },
                mx: { xs: 'auto', md: 0 },
                mb: 3,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellendus accusamus provident quasi! Sint facere qui harum quis
              vitae nihil? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: 'orange',

                  px: 3,
                  py: 1.5,
                  width: { xs: 'auto', sm: '150px' },
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#cc8400',
                  },
                  m: { xs: '20px', md: '20px', lg: '0' }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center' },
            }}
          >
            <img
              src={img1}
              alt="Bloom Website Visual"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
