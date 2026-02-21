import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// типизированный dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// типизированный selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
