const theme = {
    colors: {
      // Primary colors (Algerian theme)
      primary: '#2A5C8D', // Deep Mediterranean blue
      primaryLight: '#3D7CB6', // Lighter blue
      primaryDark: '#1C4466', // Navy blue
      
      // Secondary colors (Algerian flag)
      secondary: '#E84C3D', // Vibrant red
      secondaryLight: '#FF6B5B',
      secondaryDark: '#C0392B',
      
      // Accent colors
      accent: '#F9C12D', // Sahara gold
      accentLight: '#FFD95E',
      accentDark: '#E0A910',
      
      // Neutrals
      background: '#FAFAFA', // Off-white
      surface: '#FFFFFF', // Pure white
      error: '#E74C3C', // Error red
      success: '#27AE60', // Success green
      
      // Text colors
      text: {
        primary: '#2C3E50', // Dark blue-gray
        secondary: '#7F8C8D', // Medium gray
        disabled: '#BDC3C7', // Light gray
        onPrimary: '#FFFFFF', // White text on primary
        onSecondary: '#FFFFFF', // White text on secondary
      },
      
      // E-commerce specific
      sale: '#E84C3D', // Sale tags
      new: '#27AE60', // New arrival tags
      discount: '#F9C12D', // Discount badges
      stock: '#2ECC71', // In stock indicator
    },
  
    typography: {
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      fontSize: {
        xsmall: '0.75rem', // 12px
        small: '0.875rem', // 14px
        regular: '1rem', // 16px
        medium: '1.25rem', // 20px
        large: '1.5rem', // 24px
        xlarge: '2rem', // 32px
        xxlarge: '2.5rem', // 40px
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      lineHeight: {
        normal: 1.5,
        heading: 1.2,
        tight: 1.1,
      },
    },
  
    spacing: {
      xsmall: '0.25rem', // 4px
      small: '0.5rem', // 8px
      medium: '1rem', // 16px
      large: '1.5rem', // 24px
      xlarge: '2rem', // 32px
      xxlarge: '3rem', // 48px
    },
  
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px',
      xlarge: '16px',
      circle: '50%',
      pill: '9999px',
    },
  
    shadows: {
      subtle: '0 1px 2px rgba(0,0,0,0.08)',
      small: '0 2px 4px rgba(0,0,0,0.12)',
      medium: '0 4px 8px rgba(0,0,0,0.15)',
      large: '0 8px 16px rgba(0,0,0,0.2)',
      elevation1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      elevation2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
  
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
      wide: '1200px',
      ultraWide: '1440px',
    },
  
    transitions: {
      fast: '0.15s ease-in-out',
      medium: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
  
    zIndex: {
      base: 0,
      dropdown: 10,
      sticky: 20,
      overlay: 30,
      modal: 40,
      toast: 50,
      tooltip: 60,
    },
  
    // E-commerce specific styles
    ecommerce: {
      headerHeight: '80px',
      footerHeight: '120px',
      maxContentWidth: '1200px',
      productCard: {
        imageHeight: '200px',
        hoverElevation: 'elevation2',
      },
    },
  };
  
  export default theme;