
import { ScrollView, Text, View } from "react-native"
import { Header } from "../components/Home.Header"
import { HomeCard } from "../components/Home.Card"

export const Home = ( ) => {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff"
        }}>
            <Header />

            <ScrollView 
            style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "red"
            }}>
                <View style={{
                    width: "100%",
                    height: 60,
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 14,
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    // backgroundColor: "red"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        color: "gray"
                    }}>Boa tarde, </Text>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: "500",
                        color: "#000000"
                    }}>Tamires</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    paddingTop: 20,
                    paddingBottom: 20,
                    // padding: 14,
                    // backgroundColor: "red"
                }}>
                    <HomeCard 
                        icon="book-line"
                        name="Biblioteca"
                        description="Acesse a biblioteca de cores."
                    />
                    <HomeCard 
                        icon="tablet-line"
                        name="Tabela"
                        description="Relacione tons e fundos de clareamento."
                    />
                    <HomeCard 
                        icon="image-line"
                        name="Galeria"
                        description="Uma galeria cheia de amostras para você comparar."
                    />
                </View>
            </ScrollView>
        </View>
    )
}
