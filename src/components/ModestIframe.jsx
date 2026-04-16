const ModestIframe = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/modest/index.html"
        title="Modest Project"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default ModestIframe;