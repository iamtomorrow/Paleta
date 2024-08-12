import { TouchableOpacity } from "react-native-gesture-handler"

interface ColorTriangleProps {
    title: string
    color: string
    rotation: string
    xPosition: number
    yPosition: number
}

export const ColorTriangle = ({ title, color, rotation, xPosition, yPosition }: ColorTriangleProps) => {
    return (
        <TouchableOpacity style={{
            position: "absolute",
            width: 100,
            height: 100,
            transform: [{ translateX: xPosition }, { translateY: yPosition }, { rotate: rotation }],
            backgroundColor: "rgba(0, 0, 0, 0)",

            borderTopWidth: 0,
            borderLeftWidth: 50,
            borderBottomWidth: 80,
            borderRightWidth: 50,

            borderTopColor: "rgba(0, 0, 0, 0)",
            borderBottomColor: color,
            borderLeftColor: "rgba(0, 0, 0, 0)",
            borderRightColor: "rgba(0, 0, 0, 0)",
        }}>

        </TouchableOpacity>
    )
}