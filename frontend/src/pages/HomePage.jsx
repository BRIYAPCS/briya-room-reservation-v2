import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSites } from "../services/sitesService";

export default function HomePage() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    getSites().then(setSites).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Briya Room Reservation</h1>
      <p>Select a site to continue.</p>

      <ul>
        {sites.map(site => (
          <li key={site.id}>
            <Link to={`/site/${site.id}`}>
              {site.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
