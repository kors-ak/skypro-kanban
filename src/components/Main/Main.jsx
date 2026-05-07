import Column from "../Column/Column";
import Card from "../Card/Card";
import { cardList } from "../../data";

const Main = () => {
 return (
  <main className="main">
   <div className="container">
    <div className="main__block">
     <div className="main__content">
      <Column title="Без статуса">
       {cardList
        .filter((card) => card.status === "Без статуса")
        .map((card) => (
         <Card theme={card.theme} key={card.id} />
        ))}
      </Column>

      <Column title="Нужно сделать">
       {cardList
        .filter((card) => card.status === "Нужно сделать")
        .map((card) => (
         <Card theme={card.theme} key={card.id} />
        ))}
      </Column>

      <Column title="В работе">
       {cardList
        .filter((card) => card.status === "В работе")
        .map((card) => (
         <Card theme={card.theme} key={card.id} />
        ))}
      </Column>

      <Column title="Тестирование">
       {cardList
        .filter((card) => card.status === "Тестирование")
        .map((card) => (
         <Card theme={card.theme} key={card.id} />
        ))}
      </Column>

      <Column title="Готово">
       {cardList
        .filter((card) => card.status === "Готово")
        .map((card) => (
         <Card theme={card.theme} key={card.id} />
        ))}
      </Column>
     </div>
    </div>
   </div>
  </main>
 );
};

export default Main;
