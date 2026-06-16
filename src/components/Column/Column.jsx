import { useContext } from 'react'
import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'
import { TasksContext } from '../../context/ContextApi.js'
import { useDroppable } from '@dnd-kit/core'
import DropPlaceholder from '../DropPlaceholder.jsx'

const Column = ({ column, activeTask }) => {
  const { tasks, loading } = useContext(TasksContext)

  const { setNodeRef, isOver } = useDroppable({
    id: column.title,
  })
  const draggedTask = tasks.find((task) => task._id === activeTask)

  return (
    <SColumn ref={setNodeRef} $active={isOver}>
      <STitle>
        <p>{column.title}</p>
      </STitle>
      <SCards>
        {loading
          ? Array.from({ length: column.loaders }, (_, i) => (
              <CardLoader key={i} />
            ))
          : tasks
              .filter((task) => task.status === column.title)
              .map((task) =>
                task._id === activeTask ? (
                  <DropPlaceholder key={task._id} />
                ) : (
                  <Card task={task} key={task._id} id={task._id} />
                ),
              )}
        {activeTask && draggedTask?.status !== column.title && (
          <DropPlaceholder />
        )}
      </SCards>
    </SColumn>
  )
}

export default Column
