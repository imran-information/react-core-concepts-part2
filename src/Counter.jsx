import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);
    const handleAddCount = () => {
        const newCount = count + 1
        setCount(newCount)
    };
    const handleMinusCount = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '1px solid purple', borderRadius: '10px', margin: '20px' }}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleMinusCount}>Minus</button>
        </div>
    )
}