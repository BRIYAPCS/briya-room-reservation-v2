import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoomsBySite } from "../services/roomsService";

export default function SitePage() {
  const { siteId } = useParams();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRoomsBySite(siteId).then(setRooms).catch(console.error);
  }, [siteId]);

  return (
    <div>
      <h1>Select a Room</h1>

      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/site/${siteId}/room/${room.id}`}>
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
