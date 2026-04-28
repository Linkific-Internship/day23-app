function Toast({ message, type }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '12px 20px',
      backgroundColor: type === 'error' ? '#ff4d4d' : '#4caf50',
      color: 'white',
      borderRadius: '6px',
    }}>
      {message}
    </div>
  )
}

export default Toast;