import { createContext, FC } from "react";
import { createDispatchHook, createSelectorHook, Provider } from "react-redux";
import { AnyAction, Store } from "redux";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {}

interface ContextProps {
  stete: AppState;
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
  ></Provider>
);

export default AppProvider;
