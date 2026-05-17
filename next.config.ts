import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Bei GitHub Pages wird der Repo-Name als Basispfad benötigt.
  // Für eine eigene Domain (z.B. praxis-rosefid.de) diese Zeile entfernen.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
