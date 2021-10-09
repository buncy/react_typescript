import React from 'react';

interface Props {
    text: string;
}

const TextField: React.FC<Props> = ({ text }) => {
    return (
        <div>
            <input value={text} />
        </div>
    )
}

export default TextField
