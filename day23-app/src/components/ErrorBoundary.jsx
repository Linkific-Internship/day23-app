import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log('Error:', error)
    console.log('Info:', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Kuch galat ho gaya!</h2>
          <p>Page load nahi ho saka.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary