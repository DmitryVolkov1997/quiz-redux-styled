import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Quiz from "../Quiz/Quiz";
import QuizCreator from "../QuizCreator/QuizCreator";
import QuizList from "../QuizList/QuizList";
import ContactForm from '../ContactForm/ContactForm';
import Dashboard from '../Dashboard/Dashboard';

function App() {
    return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/auth" element={<ContactForm/>}/>
                  <Route path="/quiz-creator" element={<QuizCreator/>}/>
                  <Route path="/quiz/:id" element={<Quiz/>}/>
                  <Route path="/contact-form" element={<ContactForm/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/" element={<QuizList/>}/>
              </Routes>
          </Layout>
      </div>
    );
}


export default App;
