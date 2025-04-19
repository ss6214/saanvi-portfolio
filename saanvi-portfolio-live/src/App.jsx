function App() {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial', color: 'white', background: 'black', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Saanvi Shankar</h1>
        <p style={{ textAlign: 'center', color: 'gray' }}>
          Data Scientist | ML Engineer | Healthcare + Sustainability Advocate
        </p>
  
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href="mailto:saanvis2@uci.edu" style={{ color: 'lightblue' }}>Email</a>
          <a href="https://github.com/ss6214" style={{ color: 'lightblue' }}>GitHub</a>
          <a href="https://linkedin.com/in/saanvishankar" style={{ color: 'lightblue' }}>LinkedIn</a>
        </div>
  
        <h2 style={{ marginTop: '2rem', borderBottom: '1px solid gray' }}>Projects</h2>
        <ul>
          <li><b>Handwritten Text Recognition & Voice Detection:</b> A system for visually impaired. Tech: Python, OpenCV, TensorFlow</li>
          <li><b>Website Traffic Analytics:</b> Built on AWS using Lambda, S3, and SageMaker</li>
          <li><b>No Cell Left Behind:</b> Cell tracking using NetworkX. Tech: Python, Matplotlib</li>
          <li><b>Speech Emotion Recognition:</b> With VAE + Librosa</li>
        </ul>
  
        <h2 style={{ marginTop: '2rem', borderBottom: '1px solid gray' }}>Achievements</h2>
        <ul>
          <li>TA @ UC Irvine (Computer Systems & C)</li>
          <li>Data Analyst Intern @ Ernst & Young</li>
          <li>Led Community Coding Workshop</li>
          <li>AWS SageMaker ML Deployment</li>
          <li>Centenarian Research (LiveGood, Inc.)</li>
          <li>Top Contributor @ Rotary Club</li>
        </ul>
  
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/resume_saanvi_shankar.pdf" download style={{ padding: '10px 20px', border: '1px solid white', color: 'white' }}>
            Download My Resume
          </a>
        </div>
      </div>
    );
  }
  
  export default App;
  