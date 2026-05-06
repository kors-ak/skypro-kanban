import Column from "../Column/Column";
import Card from "../Card/Card";

const Main = () => {
 return (
  <main className="main">
   <div className="container">
    <div className="main__block">
     <div className="main__content">
      <Column title="Без статуса">
       <Card groupColor="_orange" groupName="Web Design" />

       <Card groupColor="_green" groupName="Research" />

       <Card groupColor="_orange" groupName="Web Design" />

       <Card groupColor="_purple" groupName="Copywriting" />

       <Card groupColor="_orange" groupName="Web Design" />
      </Column>

      <Column title="Нужно сделать">
       <Card groupColor="_green" groupName="Research" />
      </Column>

      <Column title="В работе">
       <Card groupColor="_green" groupName="Research" />

       <Card groupColor="_purple" groupName="Copywriting" />

       <Card groupColor="_orange" groupName="Web Design" />
      </Column>

      <Column title="Тестирование">
       <Card groupColor="_green" groupName="Research" />
      </Column>

      <Column title="Готово">
       <Card groupColor="_green" groupName="Research" />
      </Column>
     </div>
    </div>
   </div>
  </main>
 );
};

export default Main;
