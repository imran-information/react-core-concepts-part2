import { useState } from "react"

export default function Team() {
    const [player, playerState] = useState(11)

    const handlePlayerAdd = () => {
        playerState(player + 1)
    }
    const handlePlayerRemove = () => {
        playerState(player - 1)
    }
    return (
        <div style={{ border: '1px solid white', borderRadius: '10px', margin: '10px' }}>
            <h2>Player: {player}</h2>
            <button onClick={handlePlayerAdd}>Player Add</button>
            <button onClick={handlePlayerRemove}>Player Remove</button>
        </div>
    )
}