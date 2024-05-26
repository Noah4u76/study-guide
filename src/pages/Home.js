import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <p>Select a topic to start learning:</p>
      <h2>Chapter 1</h2>
      <ul className='topics'>
        <li><button><Link to="/topics/prop-logic">1.1: Propositional Logic</Link></button></li>
        <li><button><Link to="/topics/App-Of-Prop-Logic">1.2: Applications of Propositional Logic</Link></button></li>
        <li><button><Link to="/topics/Prop-Equivalences">1.3: Propositional Equivalences</Link></button></li>
        <li><button><Link to="/topics/Predicates-and-Quantifiers">1.4: Predicates and Quantifiers</Link></button></li>
        <li><button><Link to="/topics/Nested-Quantifiers">1.5: Nested Quantifiers</Link></button></li>
        <li><button><Link to="/topics/Rules-of-Inference">1.6: Rules of Inference</Link></button></li>
        <li><button><Link to="/topics/Intro-to-Proofs">1.7: Introduction to Proofs</Link></button></li>
        <li><button><Link to="/topics/Proof-Methods-and-Strategy">1.8: Proof Methods and Strategy</Link></button></li>
      </ul>
      <h2>Chapter 2</h2>
      <ul>
        <li><button><Link to="/topics/Sets">2.1: Sets</Link></button></li>
        <li><button><Link to="/topics/Set-Operations">2.2: Set Operations</Link></button></li>
        <li><button><Link to="/topics/Functions">2.3: Functions</Link></button></li>
        <li><button><Link to="/topics/Sequences-and-Summations">2.4: Sequences and Summations</Link></button></li>
        <li><button><Link to="/topics/Cardinality-of-Sets">2.5: Cardinality of Sets</Link></button></li>
        <li><button><Link to="/topics/Matrices">2.6: Matrices</Link></button></li>
      </ul>
      <Link to="/topics/prop-logic">
        <button>Study!</button>
      </Link>
      {/* Footer */}
      <footer className="footer">
        <p>Connect with me!</p>
        <ul className="social-links">
          <li><button><a href="https://www.linkedin.com/in/noah-sanderson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button></li>
          <li><button><a href="https://github.com/Noah4u76" target="_blank" rel="noopener noreferrer">GitHub</a></button></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
