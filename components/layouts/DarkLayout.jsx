const styles = {
  backgroundColor: "#244075",
  color: "white",
  padding: "5px",
  borderRadius: "7px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
};

export const DarkLayout = ({ children }) => {
  return (
    <div style={styles}>
      <h3>Dark- Layout</h3>
      {children}
    </div>
  );
};
