import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  sectionId: string;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: Home, sectionId: 'home' },
  { name: 'About', icon: User, sectionId: 'about' },
  { name: 'Projects', icon: Briefcase, sectionId: 'projects' },
  { name: 'Resume', icon: FileText, sectionId: 'resume' },
];

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '2rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 1000,
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: isHovered ? '220px' : '100px',
        transition: 'width 0.3s ease',
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.sectionId;
        
        return (
          <Box
            key={item.sectionId}
            onClick={() => scrollToSection(item.sectionId)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              padding: '0.75rem',
              borderRadius: '1.25rem',
              backgroundColor: isActive ? 'rgba(144, 202, 249, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: isActive ? 'rgba(144, 202, 249, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <Icon
              size={32}
              color={isActive ? '#90caf9' : '#ffffff'}
            />
            {isHovered && (
              <Typography
                sx={{
                  color: isActive ? 'primary.main' : 'text.secondary',
                  fontSize: '1rem',
                  fontWeight: isActive ? 'bold' : 'normal',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.name}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}; 