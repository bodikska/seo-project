import { Link } from "react-router-dom";
import './PrimaryButton.css'

export default function PrimaryButton({
  to = "/",
  text = "More about us",
  color = "#6C63FF",
  className = "0",
  border= '',
  key='',
  textcolor = 'white'
}) {
  return (
    <Link
      to={to}
      key={key}
      className={`primary-btn ${className}`}
      style={{ backgroundColor: color,
        border: border,
        color: textcolor
      }}
    >
      {text}
    </Link>
  );
}