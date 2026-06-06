import { useContext } from 'react'
import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'
import { TasksContext } from '../../context/ContextApi.js'

const Column = ({ column }) => {
  const { tasks, loading } = useContext(TasksContext)
  return (
    <SColumn>
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
              .map((task) => <Card task={task} key={task._id} />)}
      </SCards>
    </SColumn>
  )
}

export default Column
