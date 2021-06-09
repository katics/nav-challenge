import { createContext, FC } from "react";

import { createDispatchHook, createSelectorHook, Provider } from "react-redux";

import { AnyAction, Store } from "redux";

import { UserDataType } from "../utils/types/UserDataType";

export interface AppState {
  user: UserDataType;
}

interface ContextProps {
  state: AppState;
  dispatch: ({ type }: { type: string }) => void;
}

export const appContext: any = createContext<ContextProps>({} as ContextProps);

export const useSelectorApp = createSelectorHook(appContext);
export const useDispatchApp = createDispatchHook(appContext);

interface appProps {
  store: any;
  context: any;
}
const AppProvider: FC<appProps> = ({ store, context, ...props }: any) => (
  <Provider
    store={store as Store<AppState, AnyAction>}
    context={context}
    {...props}
  />
);

export default AppProvider;
