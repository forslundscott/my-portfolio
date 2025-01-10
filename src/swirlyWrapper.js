// will likely remove, brackets did not look as nice as I imagined
const SwirlyWrapper = ({ children }) => {
    // const childStyle = children.props.style || {};
  
    return (
      <span style={{ display: "inline-flex", alignItems: "center" }}>
        <span
          style={{
            // fontSize: childStyle.fontSize || "inherit",
            color: "#ceff00", 
            fontFamily: 'Kosugi'
          }}
        >
          {"{"}
        </span>
        {children}
        <span
          style={{
            // fontSize: childStyle.fontSize || "inherit",
            color: "#ceff00", 
            fontFamily: 'Kosugi'
          }}
        >
          {"}"}
        </span>
      </span>
    );
  };
  export default SwirlyWrapper