import { useState } from "react";
import Toast from '../components/Toast'
import Skeleton from '../components/Skeleton'

function Home() {
    const [data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [toast, setToast] = useState(null)

    const fetchPosts = async() => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

            if(!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`)
            }

            const json = await res.json()
            setData(json)
            setToast({ message: 'data loaded!', type: 'success' })
        } catch (error) {
            setError(error.message)
            setToast({ message: 'Something Went Wrong!', type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    const fetchBadData = async () => {
     setLoading(true)
     setError(null)
     setData(null)

     try {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts/99999')

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`)
    }

    const json = await res.json()
    setData(json)
    setToast({ message: 'HTTP Error: 404', type: 'error' })
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

    return (
        <div className="container">
            <h1>Day 23 - Error Handling</h1>
            <button onClick={fetchPosts}>Fetch Posts</button>
            <button onClick={fetchBadData}>Fetch Bad Data (404 test)</button>
           {loading && <Skeleton />}
            {error && (
             <div>
          <p className="error-text">Error: {error}</p>
         <button onClick={fetchPosts}>Retry</button>
        </div>
           )}
            {data && (
                <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
            {toast && <Toast message={toast.message} type={toast.type} />}
        </div>
    )
}

export default Home;
