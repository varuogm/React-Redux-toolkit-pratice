import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"

const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
    return (
        <div className="theme">
            <input className="theme-textbox"
                type="text"
                placeholder="enter color"
                onChange={(e) => setColor(e.target.value)}
            />

            <button className="theme-textbox-button"
                onClick={() => { dispatch(changeTextColor(color)) }}
            > Change Text Color
            </button>

            <div className="theme-colors" >
                or click any of these   ➤

                <div className="theme-colors-circle"
                    onClick={(e) => { dispatch(changeTextColor("linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%)")) }}
                >🎨  </div>

                <div className="theme-colors-circle"
                    onClick={(e) => { dispatch(changeTextColor("linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)")) }}
                > 🎨
                </div>

                <div className="theme-colors-circle"
                    onClick={(e) => { dispatch(changeTextColor("linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)")) }}
                > 🎨
                </div>

                <div className="theme-colors-circle"
                    onClick={(e) => { dispatch(changeTextColor("black")) }}
                > 🎨
                </div>

            </div>

        </div>
    )
}

export default Theme
