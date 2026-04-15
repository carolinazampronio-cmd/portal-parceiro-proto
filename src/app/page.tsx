export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "'iFood RC Textos', sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "48px",
          textAlign: "center",
          maxWidth: "500px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#ea1d2c",
            marginBottom: "16px",
          }}
        >
          Portal do Parceiro
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#717171",
            lineHeight: "1.5",
          }}
        >
          Protótipo pronto! Mande o link do Figma para começar a criar as telas.
        </p>
      </div>
    </div>
  );
}
