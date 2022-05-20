import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {IoChevronForwardOutline, IoSchoolOutline} from 'react-icons/io5';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 10rem;
  width: 100%;
  background: #fdfdfe;
  color: var(--colors-text);
`;

const List = styled.ul`

`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-family: var(--family);
  font-size: 2rem;
  font-weight: var(--fw-medium);
  color: var(--colors-text);

  border-radius: var(--radius);
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 2rem 1.6rem;
  display: flex;
  align-items: center;
  transition: box-shadow .22s ease-in-out, transform .22s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: 8px 14px 21px rgba(163, 172, 181, 23%);
    transform: translateY(-3px);
  }
`;

const ListLink = styled(NavLink)`
  position: relative;
  color: inherit;
  transition: color .22s ease-in;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem 0 5rem;

  &:hover {
    color: #004085;
  }

  & > .goTo {
    position: absolute;
    right: 0;
  }

  & > .img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    max-width: 7rem;
    font-size: 3.5rem;
  }
`;

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`;

const Title = styled.h1`
  font-family: var(--family);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--colors-text);
  margin: 0rem 0rem 2rem 0rem;
`;


const QuizList = () => {
    const renderQuizes = () => {
        return [1, 2, 3].map((quiz, i) => {
            return (
              <ListItem key={i}>
                  <ListLink to={"/quiz/" + quiz}>
                      <IoSchoolOutline className={"img"}/>
                      Тест {quiz}
                      <IoChevronForwardOutline className={"goTo"}/>
                  </ListLink>
              </ListItem>
            );
        });
    };

    return (
      <Wrapper>
          <Container>
              <Title>Список тестов</Title>

              <List>
                  {renderQuizes()}
              </List>
          </Container>
      </Wrapper>
    );
};

export default QuizList;
