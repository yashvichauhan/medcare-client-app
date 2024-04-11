import './App.css';
import Home from './Modules/Home';
import {Route, Routes} from 'react-router-dom';
import SignIn from './Modules/SignIn';
import SignUp from './Modules/SignUp';
import NurseDashboard from './Modules/NurseDashboard';
import RecordVisitForm from './Modules/RecordVisitForm';
import PatientDashboard from './Modules/PatientDashboard';
import DailyInformationForm from './Modules/DailyInformationForm';
import SymptomChecklistForm from './Modules/SymptomsChecklistForm';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/nurse-dashboard" element={<NurseDashboard/>} />
        <Route path="/record-visit" element={<RecordVisitForm/>} />
        <Route path="/daily-information" element={<DailyInformationForm/>} />
        <Route path="/patient-dashboard" element={<PatientDashboard/>} />
        <Route path="/symptom-checklist" element={<SymptomChecklistForm/>} />
    </Routes>
  );
}

export default App;
