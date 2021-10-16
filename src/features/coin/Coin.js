import { useSelector } from "react-redux"


function Coin() {
    const coin = useSelector((state) => state.counterme.count)
    const themeTextColor = useSelector((state) => state.theme.color)

    return (
        <div className="Coin">
            <div className="Coin-value"
                style={{ color: themeTextColor }}>
                Total Coins: {coin}
            </div>
        </div>
    )
}

export default Coin;
