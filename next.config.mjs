/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "ranjeet.blr1.cdn.digitaloceanspaces.com",
                pathname: "/assets/**",
                protocol: "https",
                port: ''
            },
            // Add more remote patterns if needed
        ]
    }
};

export default nextConfig;
