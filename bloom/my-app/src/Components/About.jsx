import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GoogleIcon from '@mui/icons-material/Google';
import TodayIcon from '@mui/icons-material/Today';

const About = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          p: '50px',
          justifyContent: 'space-around',
          backgroundColor: 'black',
          color: 'white',
          columnGap: 10,
          rowGap: 10,
        }}
      >
        {/* Latest Post Section */}
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <Typography sx={{ fontWeight: 'bold', mb: '20px' }}>
            Latest Post
          </Typography>
          <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
            {['Month one', 'Month two', 'Month three'].map((month, idx) => (
              <Box component="li" key={idx} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TodayIcon sx={{ fontSize: 30, mr: 1 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {month} web site info
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }}>
                      Working without any issue
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* About Section */}
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <Typography sx={{ fontWeight: 'bold', mb: '20px' }}>About</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            blanditiis sunt illo asperiores! Id unde sequi numquam. Unde officia
            obcaecati, quo ad praesentium corporis perferendis! Deserunt quia
            fugit ea architecto.
          </Typography>
        </Grid>

        {/* Stay Connected Section */}

        <Grid item lg={2} md={3} sm={4} xs={12}>
          <Typography sx={{ fontWeight: 'bold', mb: '20px' }}>
            Stay Connected
          </Typography>
          <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', margin: '10px' }}>      <FacebookIcon sx={{ mr: 1, color: 'blue' }} />
              Facebook
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <XIcon sx={{ mr: 1 }} />
              X
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <RssFeedIcon sx={{ mr: 1, color: 'orange' }} />
              RSS
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>      <GoogleIcon sx={{ mr: 1, color: 'red' }} />
              Google
            </li>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default About;
