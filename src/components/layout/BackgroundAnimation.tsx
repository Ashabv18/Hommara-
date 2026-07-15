"use client";

/**
 * Subtle animated background: slow-drifting blurred gradient orbs in the
 * ZOROVA brand palette. Fixed behind all page content (pointer-events: none).
 */
export default function BackgroundAnimation() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#faf6f1" }}
    >
      <div className="bg-orb bg-orb--primary" />
      <div className="bg-orb bg-orb--accent" />
      <div className="bg-orb bg-orb--primary-light" />
      <div className="bg-orb bg-orb--accent-light" />
    </div>
  );
}