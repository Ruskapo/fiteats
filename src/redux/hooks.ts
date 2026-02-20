import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// типизированный dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// типизированный selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
