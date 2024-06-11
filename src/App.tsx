import { Button } from "@/components/ui/button"
import { create } from "zustand"

const useStore = create<{
  count:number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1})),
}))

function App(){
  
  const store = useStore();

  return(
    <div className="darkMode bg-green-700 min-h-screen w-full flex justify-center items-center gap-5">
     <Button onClick={store.inc}>Increment</Button>
     <h1 className="text-green-200 text-[5vw]">{store.count}</h1>
     <Button onClick={store.dec}>Decrement</Button>
    </div>
  )
}
export default App

