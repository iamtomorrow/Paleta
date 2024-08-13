import { ReactNode } from "react";

export interface QuizAnswersProps {
    question: string
    answer: string
}

export interface GaleryPhotoProps {
    id: string
    title: string
    url: string,
    tags: string[]
}

export interface ChildrenProps {
    children: ReactNode
}

export interface ColorProps {
    id: number,
    key: string,
    base: string,
    name: string,
    description: string,
    icon: string,
    sample: string,
    colorCode: string,
    lighteningColor: lighteningColorProps[],
    examples: string[],
}

interface lighteningColorProps {
    id: number,
    key: string,
    name: string,
    description: string,
    colorCode: string,
}

export interface UserProps {
    name: string,
    token: string,
}