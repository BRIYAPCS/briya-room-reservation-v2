/**
 * Header
 * ------
 * Global app header.
 * Later this will include:
 * - User info
 * - PIN status
 * - Admin actions
 */

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ddd",
        background: "#f9f9f9"
      }}
    >
      <h2>Briya Room Reservation</h2>
    </header>
  );
}
