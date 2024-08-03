import { ReactNode } from "react";

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