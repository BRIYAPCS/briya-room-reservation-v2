/**
 * Breadcrumbs
 * -----------
 * Generates navigation breadcrumbs
 * based on the current URL path.
 */

import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  let path = "";

  return (
    <nav
      style={{
        padding: "0.5rem 1rem",
        background: "#fafafa",
        borderBottom: "1px solid #eee"
      }}
    >
      <Link to="/">Home</Link>

      {segments.map((segment, index) => {
        path += `/${segment}`;

        return (
          <span key={index}>
            {" "}›{" "}
            <Link to={path}>
              {segment}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
