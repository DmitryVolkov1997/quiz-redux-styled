import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Quiz from "../Quiz/Quiz";
import Auth from "../Auth/Auth";
import QuizCreator from "../QuizCreator/QuizCreator";
import QuizList from "../QuizList/QuizList";
import ContactForm from '../ContactForm/ContactForm';

function App() {
    return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/auth" element={<Auth/>}/>
                  <Route path="/quiz-creator" element={<QuizCreator/>}/>
                  <Route path="/quiz/:id" element={<Quiz/>}/>
                  <Route path="/contact-form" element={<ContactForm/>}/>
                  <Route path="/" element={<QuizList/>}/>
              </Routes>
          </Layout>
      </div>
    );
}


export default App;
