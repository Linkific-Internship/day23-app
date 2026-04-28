import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>404 - Page Not Found</h1>
            <p>This page does not exist</p>
            <Link to="/">Go to the Home Page</Link>
        </div>
    )
}

export default NotFound;