// LoginFormStyles.js
export const LoginFormStyles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      width: '300px',
      margin: 'auto',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
    },
    logo: {
      width: '80px',
      height: '80px', // Set height equal to width to make it a circle
      borderRadius: '50%', // Make the logo a circle
      marginBottom: '20px',
      objectFit: 'cover', // Maintain the aspect ratio of the image
    },
    input: {
      margin: '10px',
      padding: '8px',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
      border: 'none',
      transition: 'border-color 0.3s ease',
    },
    'input:focus': {
      borderColor: '#007bff',
    },
    button: {
      padding: '10px',
      borderRadius: '5px',
      background: '#80ADBC',
      color: '#fff',
      cursor: 'pointer',
      width: '100%',
      boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
      border: 'none',
      transition: 'background-color 0.3s ease',
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
  