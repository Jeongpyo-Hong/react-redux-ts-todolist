import Layout from "./components/Layout/Layout";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

const App = () => {
  return (
    <Layout>
      <TodoHeader />
      <TodoFormContainer />
      <TodoListContainer />
    </Layout>
  );
};

export default App;
