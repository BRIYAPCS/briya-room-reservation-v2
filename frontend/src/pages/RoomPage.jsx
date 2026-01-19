import { MOCK_ROOMS } from "../utils/mockData";

export default function RoomPage() {
  return (
    <div>
      <h1>Select a Room</h1>
      <ul>
        {MOCK_ROOMS.map(room => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}
