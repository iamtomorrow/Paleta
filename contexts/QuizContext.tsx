import { createContext, useState } from "react";
import { ChildrenProps, QuizAnswersProps } from "../Types/types";

interface QuizContextProps {
    answers: QuizAnswersProps[]
    finished: boolean
    updateQuiz: ( answer: QuizAnswersProps ) => void
}

export const QuizContext = createContext<QuizContextProps | null>(null);

export const QuizContextProvider = ({ children }: ChildrenProps ) => {
    const [ answers, setAnswers ] = useState<QuizAnswersProps[]>([]);
    const [ finished, setFinished ] = useState<boolean>(false);

    const updateQuiz = ( answer: QuizAnswersProps ) => {
        let updatedAnswers = [...answers, answer];
        setAnswers( updatedAnswers );

        if ( answers.length === 5 ) {
            setFinished(true);
        } 

        console.log( answers );
    }

    return (
        <QuizContext.Provider value={{ answers, finished, updateQuiz }}>
            { children }
        </QuizContext.Provider>
    )
}