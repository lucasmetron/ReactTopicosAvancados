import React, { useState } from 'react'

export default function TextCounter(props) {

    const [text, setText] = useState('');

    return (
        <div>
            <textarea value={text} onChange={(event) => { setText(event.target.value) }} ></textarea>
            <p>tamanho: {text.length}</p>
        </div>

    );
}