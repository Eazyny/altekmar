import Link from "next/link";

export const metadata = {
  title: "Página no encontrada",
  description: "La página solicitada no está disponible.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        color: "#fffef8",
        background: "#090a0a",
      }}
    >
      <div style={{ maxWidth: "760px", textAlign: "center" }}>
        <p style={{ color: "#c7a252", letterSpacing: ".24em" }}>
          ALTEKMAR · 404
        </p>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 108px)", lineHeight: ".92" }}>
          Página no encontrada.
        </h1>
        <p style={{ margin: "28px auto", maxWidth: "520px", opacity: ".72" }}>
          La dirección puede haber cambiado o el contenido ya no está disponible.
        </p>
        <Link className="btn" href="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
