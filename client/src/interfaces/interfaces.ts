import { SetStateAction, Dispatch } from 'react';

export interface Ifilm {
    id: number
    name: string
    description: string
    src: string
    scenario: number
    actingSkill: number
    cameraWork: number
    rated?: boolean
    favorite?: boolean
}

export type filmsType = Ifilm[] | []

export interface ICardProps {
    film: Ifilm;
}

export interface IRatingState {
    scenario: number | null
    actingSkill: number | null
    cameraWork: number | null
}
export interface IRatingProps {
    film: Ifilm
}

export interface IRatingStarsProps {
    film: Ifilm
    setOpen: Dispatch<SetStateAction<boolean>>
}


