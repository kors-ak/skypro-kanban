import styled from 'styled-components'

const SContainer = styled.div`
  display: flex;
  width: 230px;
  height: 140px;
  justify-content: center;
  align-items: center;
`

const SPlaceholder = styled.svg`
  width: 220px;
  height: 130px;
  flex-shrink: 0;
`

const DropPlaceholder = () => {
  return (
    <SContainer>
      <SPlaceholder viewBox="0 0 220 130">
        <rect
          x="0.5"
          y="0.5"
          width="219"
          height="129"
          rx="10"
          fill="transparent"
          stroke="rgb(148, 166, 190)"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </SPlaceholder>
    </SContainer>
  )
}

export default DropPlaceholder
