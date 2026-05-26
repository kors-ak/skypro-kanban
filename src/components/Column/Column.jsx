import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'

const Column = ({ title, loading, tasks }) => {
  return (
    <SColumn>
      <STitle>
        <p>{title}</p>
      </STitle>
      <SCards>
        {tasks
          .filter((task) => task.status === title)
          .map((task) =>
            loading ? (
              <CardLoader key={task._id} />
            ) : (
              <Card task={task} key={task._id} />
            ),
          )}
      </SCards>
    </SColumn>
  )
}

export default Column
