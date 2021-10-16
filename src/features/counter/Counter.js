import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from './counterSlice'


function Counter() {

    const count = useSelector((state) => state.counterme.count)
    const themeTextColor = useSelector((state) => state.theme.color)
    const dispatch = useDispatch()

    return (
        <div className="main" style={{ background: themeTextColor }}>
            <div className="top">
                <button className="button" aria-label="Increment value"
                    onClick={() => { dispatch(increment()) }}>
                    +
                </button>

                <div className="value" >
                    Count: {count}
                </div>

                <button className="button" aria-label="Decrement value"
                    onClick={() => { dispatch(decrement()) }}>
                    -
                </button>
            </div>
            <div className="increment"
                onClick={() => { dispatch(incrementByAmount(10)) }}>

                🎁 +10
            </div>
        </div>
    )
}

export default Counter
