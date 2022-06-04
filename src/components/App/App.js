import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Quiz from "../Quiz/Quiz";
import QuizCreator from "../QuizCreator/QuizCreator";
import QuizList from "../QuizList/QuizList";
import ContactForm from '../ContactForm/ContactForm';
import Dashboard from '../Dashboard/Dashboard';
import SuccessLogin from '../SuccessLogin/SuccessLogin';

function App() {
    return (
      <div className="App">
          <Layout>
              <Routes>
                  <Route path="/" element={<ContactForm/>}/>
                  <Route path="/quiz-creator" element={<QuizCreator/>}/>
                  <Route path="/quiz/:id" element={<Quiz/>}/>
                  <Route path="/contact-form" element={<ContactForm/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/success" element={<SuccessLogin/>}/>
                  <Route path="/quiz-list" element={<QuizList/>}/>
              </Routes>
          </Layout>
      </div>
    );
}


export default App;
