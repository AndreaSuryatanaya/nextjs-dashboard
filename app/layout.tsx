import "@/app/ui/global.css";
import { poppins } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acme Dashboard",
    description: "The official Next.js Course Dashboard, built with App Router.",
    metadataBase: new URL("https://nextjs-dashboard-three-bice.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>{children}</body>
        </html>
    );
}
