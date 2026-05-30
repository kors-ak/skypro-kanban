import Column from '../Column/Column'
import { columnsArr } from '../../data'
import { SMain, SContainer, SBlock, SContent } from './Main.styled'

const Main = ({ loading, tasks, err }) => {
  return (
    <SMain>
      <SContainer>
        <SBlock>
          <SContent>
            {err ? (
              <h2 style={{ whiteSpace: 'pre-wrap' }}>{err}</h2>
            ) : (
              columnsArr.map((column, i) => (
                <Column
                  title={column}
                  loading={loading}
                  tasks={tasks}
                  key={i}
                ></Column>
              ))
            )}
          </SContent>
        </SBlock>
      </SContainer>
    </SMain>
  )
}

export default Main
