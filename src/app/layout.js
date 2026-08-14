import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/fonts.css";
import LanguageProvider from "~/i18n/LanguageProvider";
import { SITE_URL } from "~/lib/seo";
import { OrganizationStructuredData } from "~/seo/StructuredData";
import "./altekmar-overrides.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Altekmar | Soluciones integradas para edificios",
    template: "%s | Altekmar",
  },
  description:
    "Elevadores, generadores, aire acondicionado, seguridad y videovigilancia con suministro e instalación en República Dominicana.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "/",
    siteName: "Altekmar Group",
    title: "Altekmar | Soluciones integradas para edificios",
    description:
      "Elevadores, generadores, climatización y sistemas de seguridad coordinados bajo una sola organización.",
    images: ["/brand/android-chrome-512x512.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
    shortcut: [
      {
        rel: "shortcut icon",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <OrganizationStructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
