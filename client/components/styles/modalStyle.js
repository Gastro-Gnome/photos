const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    Height: '100%',
    Width: '90%',
    minHeight: '400px',
    maxWidth: '1300px',
    minWidth: '960px',
    border: '1px solid #ccc',
    background: 'rgba(0, 0, 0, 0.7)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    // margin: '0 auto',
    padding: 0,
  },
};

export default modalStyle;
