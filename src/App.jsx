import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
    const [value, onChange] = useState(new Date());
    return <Calendar onChange={onChange} showWeekNumbers value={value} />;
}

export default App;
