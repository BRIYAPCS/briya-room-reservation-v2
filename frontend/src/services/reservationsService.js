import { apiGet } from "./api";

export function getReservations(siteId, roomId) {
  return apiGet(`/sites/${siteId}/rooms/${roomId}/reservations`);
}
