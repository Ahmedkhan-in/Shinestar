import { ImageResponse } from "next/og";

// iPhone / iPad home-screen icon — same star mark as icon.svg, drawn as a PNG
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0756A4" }}>
        <svg width="128" height="128" viewBox="0 0 64 64">
          <path fill="#DDA52D" d="M32 11.5l6.03 12.98 14.22 1.7-10.5 9.74 2.78 14.05L32 43l-12.53 6.97 2.78-14.05-10.5-9.74 14.22-1.7z" />
        </svg>
      </div>
    ),
    size
  );
}
