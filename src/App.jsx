import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://illmqbrdabvqrgslbmqu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbG1xYnJkYWJ2cXJnc2xibXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDU3NzAsImV4cCI6MjA1NTg4MTc3MH0.JjmvB5EwGIWJM1cj6KKVAdxHJjoSR0o3o7NG4MW3dFs");

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
      <h1>hello agusti</h1>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;