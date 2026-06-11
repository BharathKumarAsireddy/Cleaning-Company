import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.97 0-1.5 1.5-1.5H17V4.4c-.27-.04-1.2-.12-2.27-.12-2.27 0-3.73 1.38-3.73 3.92V10.5H8.5v3H11V21h3z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3h3.6l4.1 5.6L16.4 3H20l-6.2 7.9L20.4 21h-3.6l-4.6-6.2L7 21H3.4l6.6-8.3z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.5h-3V19h3zM5 7a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 5 7zM10.5 8.5h-3V19h3v-5.4c0-1.43.27-2.8 2.04-2.8 1.74 0 1.76 1.62 1.76 2.9V19h3v-6.4c0-2.9-.62-5.1-4-5.1-1.62 0-2.7.89-3.15 1.73h-.04z" />
    </svg>
  );
}
