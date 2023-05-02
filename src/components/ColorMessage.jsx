export const ColorMessage = ({color, children }) => {
    // const {color , children} = props;
    const contentStyle = {
        color,
        fontSize: "2rem"
    }
    return <p style={contentStyle}>{children}</p>
}