import { createContext } from "react"

const TasksContext = createContext()

const TasksContextProvider = ({ children }) => {
  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>
}

export default TasksContextProvider
