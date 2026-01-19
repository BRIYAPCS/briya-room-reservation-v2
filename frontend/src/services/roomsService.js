import { apiGet } from "./api";

export function getRoomsBySite(siteId) {
  return apiGet(`/sites/${siteId}/rooms`);
}
