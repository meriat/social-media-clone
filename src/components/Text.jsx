import React from "react";

function Text() {
    const TextStyles = {
        border: '2px solid gray',
        float: 'left',
        padding: '1em'
    }
    return(
        <p style={TextStyles}>
            Lorem Ipsum is simply dummy text of typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
    );
}

export default Text;