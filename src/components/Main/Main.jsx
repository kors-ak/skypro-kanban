import Column from "../Column/Column";
import { columnsArr } from "../../data";
import { SMain, SContainer, SBlock, SContent } from "./Main.styled";

const Main = ({ loading }) => {
 return (
  <SMain>
   <SContainer>
    <SBlock>
     <SContent>
      {columnsArr.map((column, i) => (
       <Column title={column} loading={loading} key={i}></Column>
      ))}
     </SContent>
    </SBlock>
   </SContainer>
  </SMain>
 );
};

export default Main;
