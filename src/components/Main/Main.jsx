import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { TasksContext, ThemeContext } from '../../context/ContextApi'
import { columnsArr } from '../../data'
import { STitle } from '../Auth/AuthForm.Styled'
import Card from '../Card/Card'
import Column from '../Column/Column'
import { SBlock, SContainer, SContent, SMain } from './Main.styled'

const Main = () => {
  const { getTasks, loadingErr, tasks, moveTask, loading } =
    useContext(TasksContext)

  useEffect(() => {
    async function fetchData() {
      await getTasks()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { theme } = useContext(ThemeContext)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
  )
  const handleDragEnd = (e) => {
    const { active, over } = e

    if (!over) return

    const taskId = active.id
    const newStatus = over.id

    moveTask(taskId, newStatus)
    setActiveTask(null)
  }

  const [activeTask, setActiveTask] = useState(null)

  const noTasks = tasks.length === 0

  return (
    <SMain>
      <SContainer>
        <SBlock>
          <SContent>
            {loadingErr ? (
              <STitle style={{ whiteSpace: 'pre-wrap' }}>{loadingErr}</STitle>
            ) : !loading && noTasks ? (
              <STitle>Список задач пуст</STitle>
            ) : (
              <DndContext
                sensors={sensors}
                onDragStart={(e) => {
                  setActiveTask(e.active.id)
                }}
                onDragEnd={handleDragEnd}
              >
                {columnsArr.map((column, i) => (
                  <Column
                    id={column.title}
                    column={column}
                    key={i}
                    activeTask={activeTask}
                  />
                ))}
                <DragOverlay>
                  {activeTask ? (
                    <Card
                      task={tasks.find((task) => task._id === activeTask)}
                      isOverlay
                    />
                  ) : null}
                </DragOverlay>
              </DndContext>
            )}
          </SContent>
        </SBlock>
      </SContainer>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        newestOnTop
        theme={theme.mode}
      />
    </SMain>
  )
}

export default Main
