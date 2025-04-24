/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 's3.amazonaws.com'
    },
    {
      protocol: 'https',
      hostname: 'media.tarkett-image.com'
    },
    {
      protocol: 'https',
      hostname: 'images2.alphacoders.com'
    },
    {
      protocol: 'https',
      hostname: 'encrypted-tbn0.gstatic.com'
    },
    {
      protocol: 'https',
      hostname: 'media.designcafe.com'
    }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/rss",
        destination: "/feed/rss.xml",
      },
      {
        source: "/feed",
        destination: "/feed/rss.xml",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
      {
        source: "/json",
        destination: "/feed/feed.json",
      },
    ];
  },
};

module.exports = nextConfig;
