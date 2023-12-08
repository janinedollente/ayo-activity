// LoginFormStyles.js
export const LoginFormStyles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      padding: '20px',
      borderRadius: '15px',
      width: '300px',
      margin: 'auto',
      backgroundColor: '#E4EBF1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      boxShadow: '10px 10px 20px #bfc7d1, -10px -10px 20px #ffffff', // Neumorphic box shadow
    },
    logo: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '20px',
      objectFit: 'cover',
      boxShadow: 'inset 6px 6px 10px #bfc7d1, inset -6px -6px 10px #ffffff', // Neumorphic inset shadow for logo
    },
    input: {
      margin: '10px',
      padding: '8px',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
      border: 'none',
      transition: 'box-shadow 0.3s ease', // Add transition for smooth effect
      boxShadow: '5px 5px 10px #bfc7d1, -5px -5px 10px #ffffff', // Neumorphic box shadow
    },
    'input:focus': {
      outline: 'none', // Remove focus outline
      boxShadow: 'inset 5px 5px 10px #bfc7d1, inset -5px -5px 10px #ffffff', // Neumorphic inset shadow on focus
    },
    button: {
      padding: '10px',
      borderRadius: '5px',
      background: '#B1B9B8',
      color: '#fff',
      cursor: 'pointer',
      width: '100%',
      border: 'none',
      transition: 'background-color 0.3s ease',
      boxShadow: '10px 10px 20px #bfc7d1, -10px -10px 20px #ffffff', // Neumorphic box shadow
    },
    'button:hover': {
      background: '#63B8FF',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };
  