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
          <h2>Something Went Wrong</h2>
          <p>The page cannot be loaded</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
