import { cardList } from '../../data'
import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'

const Column = ({ title = 'Without Theme', loading }) => {
  return (
    <SColumn>
      <STitle>
        <p>{title}</p>
      </STitle>
      <SCards>
        {cardList
          .filter((card) => card.status === title)
          .map((card) =>
            loading ? (
              <CardLoader key={card.id} />
            ) : (
              <Card card={card} key={card.id} />
            ),
          )}
      </SCards>
    </SColumn>
  )
}

export default Column
