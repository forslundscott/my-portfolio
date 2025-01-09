const SwirlyWrapper = ({ children }) => {
    // Clone the child to access its styles
    // const childStyle = children.props.style || {};
  
    return (
      <span style={{ display: "inline-flex", alignItems: "center" }}>
        <span
          style={{
            // fontSize: childStyle.fontSize || "inherit",
            color: "#ceff00", // Swirly brackets' color
            fontFamily: 'Kosugi'
          }}
        >
          {"{"}
        </span>
        {children}
        <span
          style={{
            // fontSize: childStyle.fontSize || "inherit",
            color: "#ceff00", // Swirly brackets' color
            fontFamily: 'Kosugi'
          }}
        >
          {"}"}
        </span>
      </span>
    );
  };
  export default SwirlyWrapper