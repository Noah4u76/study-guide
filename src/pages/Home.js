import React from 'react';
import ScrollToTopLink from './topics/ScrollToTopLink';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <p>Select a topic to start learning:</p>
      <h2>Chapter 1</h2>
      <ul className='topics'>
        <li><button><ScrollToTopLink to="/topics/prop-logic">1.1: Propositional Logic</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/App-Of-Prop-Logic">1.2: Applications of Propositional Logic</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Prop-Equivalences">1.3: Propositional Equivalences</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Predicates-and-Quantifiers">1.4: Predicates and Quantifiers</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Nested-Quantifiers">1.5: Nested Quantifiers</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Rules-of-Inference">1.6: Rules of Inference</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Intro-to-Proofs">1.7: Introduction to Proofs</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Proof-Methods-and-Strategy">1.8: Proof Methods and Strategy</ScrollToTopLink></button></li>
      </ul>
      <h2>Chapter 2</h2>
      <ul>
        <li><button><ScrollToTopLink to="/topics/Sets">2.1: Sets</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Set-Operations">2.2: Set Operations</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Functions">2.3: Functions</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Sequences-and-Summations">2.4: Sequences and Summations</ScrollToTopLink></button></li>
        <li><button><ScrollToTopLink to="/topics/Cardinality-of-Sets">2.5: Cardinality of Sets</ScrollToTopLink></button></li>
      </ul>
      <ScrollToTopLink to="/topics/prop-logic">
        <button>Study!</button>
      </ScrollToTopLink>
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
