export const MOCK_SITES = [
  { id: 1, name: "Fort Totten" },
  { id: 2, name: "Georgia Ave" }
];

export const MOCK_ROOMS = [
  { id: 1, siteId: 1, name: "Conference Room A" },
  { id: 2, siteId: 1, name: "Training Room" }
];

export const MOCK_RESERVATIONS = [
  {
    id: 1,
    siteId: 1,
    roomId: 1,
    title: "Staff Meeting",
    startTime: "2026-01-20 09:00",
    endTime: "2026-01-20 10:00"
  }
];
