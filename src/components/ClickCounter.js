import React, { useEffect, useState } from 'react';

export default function ClickCounter(props) {

    const [totalClicks, setTotalclicks] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    function onchange() {
        setIsChecked(!isChecked);
        setTotalclicks(totalClicks + 1);
    }

    useEffect(() => {
        console.log(totalClicks)
        console.log(isChecked)
    }, [totalClicks, isChecked])

    return (

        <div>
            <input type="checkbox"
                checked={isChecked}
                onChange={onchange}
            />

            <div id='checkStatus'>
                {isChecked ? 'ON' : 'OFF'}
            </div>

            <div>
                <strong>Clicks: {totalClicks}</strong>
            </div>
        </div>
    );
}