import "./App.css";
import "./mailerLite.css";
import Background from "./components/background";
import MailerLiteForm from "./components/MailerLiteForm";

function App() {
  return (
    <div className="landing-container">
      <Background />
      
      <main className="main-content">
        <div className="hero-content">
          <h1 className="main-title">YOUR TOOLS<br />YOUR VISION<br />NICE TOUCH</h1>
          <p className="infoline">See What A Nice Touch Can Do. Join The List.</p>

          <div className="signup-box">
            <MailerLiteForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
