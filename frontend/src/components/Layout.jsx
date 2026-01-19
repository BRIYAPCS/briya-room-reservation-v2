/**
 * Layout
 * ------
 * Wraps all pages with:
 * - Header
 * - Breadcrumbs
 * - Main content area
 */

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Breadcrumbs />

      <main style={{ padding: "1rem" }}>
        {children}
      </main>
    </>
  );
}
