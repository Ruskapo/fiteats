export type CardType = {
  id: string;

  title: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  time: number;
  isFavorite: boolean;
  onToggleFavorite?: (id: string) => void;
  onAddToToday?: (id: string) => void;
};
