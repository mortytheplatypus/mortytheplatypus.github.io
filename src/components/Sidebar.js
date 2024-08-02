import React from "react";
import { Avatar, Box, Typography, IconButton, Link } from '@mui/material';

function Sidebar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                mt: 2, 
                bgcolor: '#E2E2B6',
                borderRadius: 1,
                boxShadow: 1
            }}
        >
            <Avatar
                src="al-amru-bil-maruf.jpg"
                alt="Al Amru Bil Maruf"
                sx={{ width: 250, height: 250, mt: 5, mb: 4 }}
            />

            <Typography variant="h4" sx={{ mb: 1 }}>
                <b>Al Amru Bil Maruf</b>
            </Typography>

            <Typography variant="body1" >
                Software Engineer at <Link href="https://www.synesisit.com.bd/" target="_blank" sx={{ textDecorationColor: 'inherit', color: 'inherit' }}>Synesis IT</Link>
            </Typography>
            <Typography variant="body1" >
                BSc in Computer Science and Engineering
            </Typography>

            <Box sx={{ mt: 2, textAlign: 'right', width: '100%' }}>
                <Typography variant="body2" >
                    <Link href="https://www.buet.ac.bd/" target="_blank" sx={{ textDecorationColor: 'inherit', color: 'inherit' }}>Bangladesh University of Engineering and Technology</Link>
                </Typography>

                <Typography variant="body2" >
                    <Link href="https://dinajpurgovtcollege.edu.bd/" target="_blank" sx={{ textDecorationColor: 'inherit', color: 'inherit' }}>Dinajpur Government College</Link>
                </Typography>

                <Typography variant="body2" >
                    <Link href="https://dinajpurzillaschool.edu.bd/" target="_blank" sx={{ textDecorationColor: 'inherit', color: 'inherit' }}>Dinajpur Zilla School</Link>
                </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
                <IconButton component={Link} href="https://linkedin.com/in/mortytheplatypus" target="_blank" aria-label="LinkedIn">
                    <img src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
                </IconButton>
                <IconButton component={Link} href="https://github.com/mortytheplatypus" target="_blank" aria-label="GitHub">
                    <img src="/icons/github.png" alt="GitHub" width={32} height={32} />
                </IconButton>
                <IconButton component={Link} href="https://facebook.com/mortytheplatypus" target="_blank" aria-label="Facebook">
                    <img src="/icons/facebook.png" alt="Facebook" width={32} height={32} />
                </IconButton>
                <IconButton component={Link} href="https://x.com/alamrubilmaruf_" target="_blank" aria-label="X">
                    <img src="/icons/x.png" alt="X" width={32} height={32} />
                </IconButton>
                <IconButton component={Link} href="mailto:mortytheplatypus@gmail.com" target="_blank" aria-label="Email">
                    <img src="/icons/email.png" alt="Email" width={32} height={32} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Sidebar;