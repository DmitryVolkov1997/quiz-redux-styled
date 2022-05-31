import styled from 'styled-components';

const GroupButton = styled.div`
  display: flex;
  margin-top: 2rem;
  overflow-x: auto;
  max-width: 400px;
`

const Button = styled.button`
  color: #fff;
  cursor: pointer;
  padding: .7rem 1rem;
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--colors-text);
  border: 1px solid rgb(226,232,240);
  background-color: transparent;
  cursor: pointer;
`

const DashboardPagination = ({dataPerPage, totalData, paginate}) => {
    const pagesNumbers = []

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pagesNumbers.push(i)
    }

    return (
      <GroupButton>
          {
              pagesNumbers.map((number) => {
                  return (
                    <Button key={number} onClick={() => paginate(number)}>{number}</Button>
                  )
              })
          }
      </GroupButton>
    );
};

export default DashboardPagination;
