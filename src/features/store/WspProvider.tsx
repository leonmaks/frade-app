// import {
//   createContext,
//   PropsWithChildren,
//   useContext,
//   useState
// } from "react"
// import {
//   createStore,
//   StoreApi,
//   useStore
// } from "zustand"

// type WspStore = {
//   count: number
//   inc: () => void
// }

// const WspCtx = createContext<StoreApi<WspStore> | undefined>(undefined)

// type WspProviderProps = PropsWithChildren & {
//   initialCount: number
// }

// export default function WspProvider({
//   children,
//   initialCount
// }: WspProviderProps) {
//   const [store] = useState(() => createStore<WspStore>(set => ({
//     count: initialCount,
//     inc: () => set(state => ({ count: state.count + 1 }))
//   })))
//   return <WspCtx.Provider value={store}>
//     {children}
//   </WspCtx.Provider>
// }

// export function useWspStore<T>(selector: (state: WspStore) => T) {
//   const context = useContext(WspCtx)
//   if (!context) {
//     throw new Error("WspCtx.Provider is missing")
//   }
//   return useStore(context, selector)
// }
