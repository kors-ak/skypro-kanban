import { useContext } from 'react'
import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'
import { TasksContext } from '../../context/ContextApi.js'
import { useDroppable } from '@dnd-kit/core'

const Column = ({ column }) => {
  const { tasks, loading } = useContext(TasksContext)

  const { setNodeRef, isOver } = useDroppable({
    id: column.title,
  })
  
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
              .map((task) => <Card task={task} key={task._id} id={task._id} />)}
      </SCards>
    </SColumn>
  )
}

export default Column
