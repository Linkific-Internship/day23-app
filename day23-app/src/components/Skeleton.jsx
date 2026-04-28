function Skeleton() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((i) => (
        <li key={i} className="skeleton-item"></li>
      ))}
    </ul>
  )
}

export default Skeleton;