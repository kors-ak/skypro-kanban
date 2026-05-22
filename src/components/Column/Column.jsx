import { cardList } from '../../data'
import Card from '../Card/Card.jsx'
import CardLoader from '../CardLoader.jsx'
import { SCards, SColumn, STitle } from './Column.styled'

const Column = ({ title = 'Without Theme', loading, setShowPopBrowse }) => {
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
              <Card
                cardData={card}
                key={card.id}
                setShowPopBrowse={setShowPopBrowse}
              />
            ),
          )}
      </SCards>
    </SColumn>
  )
}

export default Column
