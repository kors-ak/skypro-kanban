import Column from "../Column/Column";
import { columnsArr } from "../../data";

const Main = ({ loading }) => {
 return (
  <main className="main">
   <div className="container">
    <div className="main__block">
     <div className="main__content">
      {columnsArr.map((column, i) => (
       <Column title={column} loading={loading} key={i}></Column>
      ))}
     </div>
    </div>
   </div>
  </main>
 );
};

export default Main;
