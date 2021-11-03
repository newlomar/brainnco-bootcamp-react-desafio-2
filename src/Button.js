function Button({ anchor, kind, value }) {
  return (
    <a href={anchor}>
      <button 
        className={kind}
      >
        {value}
      </button>
    </a>
  )
}

export default Button