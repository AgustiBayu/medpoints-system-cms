import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://odnuoadxduyvhmmooljz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kbnVvYWR4ZHV5dmhtbW9vbGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyOTEyOTAsImV4cCI6MjA1NTg2NzI5MH0.I9HOb8l6s_nbuSDeeSbznu6kmptCDeahM3lFhcboqe0");

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;