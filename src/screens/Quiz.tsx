import { View, Text } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { QuestionCard } from "../components/Quiz.QuestionCard"
import { ScrollView } from "react-native-gesture-handler"

const questions = [
    {
        _number: 1,
        title: "Qual é a sua cor natural de cabelo?",
        options: [
            "Preto",
            "Castanho",
            "Castanho Escuro",
            "Castanho Claro",
            "Loiro Escuro",
            "Loiro Claro",
            "Ruivo"
        ]
    }
]

export const Quiz = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <LibraryHeader />

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{
                width: "100%",
                height: "auto"
            }}>
                <View style={{
                    marginTop: 10,
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "500",
                        color: "#000000",
                    }}>Quiz</Text>
                </View>

                {
                    questions.map((item) => (
                        <QuestionCard 
                            _number={ item._number }
                            title={ item.title }
                            options={ item.options }
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}
