import { MealType } from "./today";

export type MealModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (meal: MealType) => void;
}