import { motion } from "framer-motion";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";

const Todo = () => {
  const { register, handleSubmit, getValues, setValue } = useForm<IForm>();

  const [todo, setTodo] = useRecoilState(todoState);

  const onValid = (data: IForm) => {
    setTodo((prev) => [...prev, { content: data.keyword, isDone: false }]);
    setValue("keyword", "");
  };

  const onDeleteClick = (keyword: string) => {
    setTodo((prev) => {
      let index = prev.findIndex((e) => e.content === keyword);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const onCheckClick = (keyword: string) => {
    // TODO : add check logic
    setTodo((prev) => {
      let index = prev.findIndex((e) => e.content === keyword);
      let target = [...prev][index];
      return [...prev.slice(0, index), { content: target.content, isDone: !target.isDone }, ...prev.slice(index + 1)];
    });
  };

  return (
    <Wrapper>
      <Container variants={todoVar} initial="initial" animate="animate">
        <Form onSubmit={handleSubmit(onValid)}>
          <Input {...register("keyword", { required: true, minLength: 1 })} placeholder="Add Todo" autoComplete="off" />
        </Form>
        <TodoList>
          {todo.map((e, i) => (
            <TodoElement key={i} variants={todoElementVar} initial="initial" animate="animate">
              <TodoMain>
                <TodoCheck onClick={() => onCheckClick(e.content)}></TodoCheck>
                <TodoContent>{e.content}</TodoContent>
              </TodoMain>
              <TodoButton
                onClick={() => {
                  onDeleteClick(e.content);
                }}
              >
                X
              </TodoButton>
            </TodoElement>
          ))}
        </TodoList>
      </Container>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  width: 400px;
  height: 600px;
  padding: 40px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid white;
  padding: 7px 5px;
  font-weight: 300;
  letter-spacing: 0.8px;
  &:focus {
    outline: none;
  }
`;

const TodoList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const TodoElement = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const TodoMain = styled.div`
  display: flex;
  align-items: center;
`;

const TodoCheck = styled.button`
  background-color: transparent;
  width: 10px;
  height: 10px;
  border: 1px solid white;
  margin-right: 10px;
`;

const TodoContent = styled.h2`
  font-weight: 300;
`;

const TodoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const todoVar = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.3 } },
};

const todoElementVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

interface IForm {
  keyword: string;
}
