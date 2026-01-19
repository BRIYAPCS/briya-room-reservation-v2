import { apiGet } from "./api";

export function getSites() {
  return apiGet("/sites");
}
