import { TasksContext } from './ContextApi'

const TasksContextProvider = ({ children }) => {
  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>
}

export default TasksContextProvider
