import styled from 'styled-components'

export const SPopUser = styled.div`
  display: block;
  position: absolute;
  top: 41px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ theme }) => theme.secondaryBg};
  box-shadow: 0px 10px 39px 0px ${({ theme }) => theme.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${({ theme }) => theme.buttonBg};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.buttonBg};

    a {
      color: ${({ theme }) => theme.buttonBg};
    }
  }
`

export const SName = styled.div`
  color: ${({ theme }) => theme.primaryText};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`

export const SMail = styled.div`
  color: rgb(148, 166, 190);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`

export const STheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.primaryText};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type='checkbox'] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: rgb(234, 238, 246);
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::before {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: rgb(148, 166, 190);
      transition: 0.5s;
    }
  }

  input:checked[type='checkbox']::before {
    left: 12px;
  }
`

export const SButton = styled.button`
  &:hover {
    border: 0.7px solid rgb(86, 94, 239);
    background-color: rgb(86, 94, 239);
    color: rgb(255, 255, 255);

    a {
      color: rgb(255, 255, 255);
    }
  }
`
