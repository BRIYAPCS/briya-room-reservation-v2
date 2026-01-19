import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReservations } from "../services/reservationsService";

export default function CalendarPage() {
  const { siteId, roomId } = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations(siteId, roomId)
      .then(setReservations)
      .catch(console.error);
  }, [siteId, roomId]);

  return (
    <div>
      <h1>Calendar</h1>

      <ul>
        {reservations.map(r => (
          <li key={r.id}>
            {r.title} ({r.startTime} → {r.endTime})
          </li>
        ))}
      </ul>
    </div>
  );
}
