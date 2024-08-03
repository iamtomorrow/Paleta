
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

interface HeaderButtonProps {
    name: string,
    icon: any
}

export const HeaderButton = ({ name, icon }: HeaderButtonProps ) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red"
        }}>
            <Ionicons 
                name={ icon } 
                size={ 24 }
                color={"#000000"}
            />
        </TouchableOpacity>
    )
}