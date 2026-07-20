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
import "./altekmar-overrides.css";

export const metadata = {
  title: "Altekmar | Equipos, Sistemas y Construcción",
  description:
    "Elevadores, generadores, aire acondicionado, seguridad, equipos y contratación general en República Dominicana.",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon.png",
      },
    ],
    shortcut: [
      {
        rel: "shortcut icon",
        url: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
