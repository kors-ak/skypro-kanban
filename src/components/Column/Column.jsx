import { cardList } from "../../data";
import Card from "../Card/Card";
import CardLoader from "../CardLoader";

const Column = ({ title = "Without Theme", loading }) => {
 return (
  <div className="main__column">
   <div className="column__title">
    <p>{title}</p>
   </div>
   <div className="cards">
    {cardList
     .filter((card) => card.status === title)
     .map((card) =>
      loading ? (
       <CardLoader key={card.id} />
      ) : (
       <Card
        theme={card.theme}
        title={card.title}
        date={card.date}
        key={card.id}
       />
      ),
     )}
   </div>
  </div>
 );
};

export default Column;
