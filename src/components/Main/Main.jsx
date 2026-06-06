import Column from '../Column/Column'
import { columnsArr } from '../../data'
import { SMain, SContainer, SBlock, SContent } from './Main.styled'
import { useContext, useEffect } from 'react'
import { TasksContext } from '../../context/ContextApi'

const Main = () => {
  const { getTasks, loadingErr } = useContext(TasksContext)

  useEffect(() => {
    async function fetchData() {
      await getTasks()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SMain>
      <SContainer>
        <SBlock>
          <SContent>
            {loadingErr ? (
              <h2 style={{ whiteSpace: 'pre-wrap' }}>{loadingErr}</h2>
            ) : (
              columnsArr.map((column, i) => (
                <Column column={column} key={i}></Column>
              ))
            )}
          </SContent>
        </SBlock>
      </SContainer>
    </SMain>
  )
}

export default Main
