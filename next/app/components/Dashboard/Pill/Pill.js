import { chroma } from 'chroma-js';

const Pill = ({ text, color }) => { 
    // If there's no color use the default color of #242424
    const style = { 
        backgroundColor: color || "#242424",
        color: chroma(color).darken(0.3).hex() || "white", 
    };

    return (
        <div 
            className="pill"
            style={style}
        >
            <p className="pill__text">{text}</p>
        </div>
    )
}

export default Pill