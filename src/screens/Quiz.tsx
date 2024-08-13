import { View, Text } from "react-native"
import { LibraryHeader } from "../components/Library.Header"
import { QuestionCard } from "../components/Quiz.QuestionCard"
import { ScrollView } from "react-native-gesture-handler"
import { QuizContext } from "../../contexts/QuizContext"
import { useContext, useEffect } from "react"

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
    },
    {
        _number: 2,
        title: "Como você descreveria a textura do seu cabelo?",
        options: [
            "Liso",
            "Ondulado",
            "Cacheado",
            "Crespo",
        ]
    },
    {
        _number: 3,
        title: "Seu cabelo é?",
        options: [
            "Seco",
            "Oleoso",
            "Normal",
            "Misto",
        ]
    },
    {
        _number: 4,
        title: "Qual é a sua principal preocupação com o seu cabelo?",
        options: [
            "Danos e quebras",
            "Frizz",
            "Falta de volume",
            "Falta de brilho",
        ]
    },
    {
        _number: 5,
        title: "Qual tom de coloração você prefere?",
        options: [
            "Natural e discreto",
            "Vibrante e ousado",
            "Tons de loiro",
            "Tons de vermelho",
        ]
    },
    {
        _number: 6,
        title: "Com que frequência você está disposta a retocar a coloração?",
        options: [
            "Mensalmente",
            "A cada dois meses",
            "A cada seis meses",
            "Uma vez por ano",
        ]
    }
]

export const Quiz = ( ) => {
    const QuizContxt = useContext( QuizContext );

    useEffect(( ) => {
        console.log( QuizContxt?.answers );
    }, [ ]);

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

            {
                QuizContxt?.finished
                ? <Text style={{
                    fontSize: 14,
                }}>Você já participou do Quiz.</Text>
                : <ScrollView 
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
                                key={ item._number }
                            />
                        ))
                    }
                </ScrollView>
            }
        </View>
    )
}
