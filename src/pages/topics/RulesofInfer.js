import React from 'react';
import { Link } from 'react-router-dom';


function RulesofInfer() {
  return (
<div className="container">
<h1>Rules of Inference: 1.6</h1>
<p className="description">Propositional Logic: an argument is just a sequence of statements that end with a conclusion. Is valid if the conclusion follows the truth of preceding statements or premises.</p>
<h4>Example:  If you have a sandwich, then you can eat it</h4>
<h4>“You have a sandwich”</h4>
<h4>Therefore, “you can eat it”. (Modus Ponens)</h4>
<ul className="examples">
        <li>p → q</li>
        <li>p</li>
        <li>∴ q</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Modus Tollens:</h4>
      <ul className="examples">
        <li>¬q</li>
        <li>p → q</li>
        <li>∴¬p</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Hypothetical Syllogism:</h4>
      <ul className="examples">
        <li>p → q</li>
        <li>q → r</li>
        <li>∴p → r</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Disjunctive Syllogism:</h4>
      <ul className="examples">
        <li>p ∨ q</li>
        <li>¬p</li>
        <li>∴q</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Addition:</h4>
      <ul className="examples">
        <li>if p is true p ∨ q is true.</li>
        <li>p</li>
        <li>∴p ∨ q</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Simplification:</h4>
      <ul className="examples">
        <li>p ∧ q is true</li>
        <li>p is true</li>
        <li>p ∧ q</li>
        <li>∴p</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Conjunction:</h4>
      <ul className="examples">
        <li>If p is true and q is true then p ∧ q is true.</li>
        <li>p</li>
        <li>q</li>
        <li>∴p ∧ q</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Resolution:</h4>
      <ul className="examples">
        <li>If p or q is true and not p or r is true then q and r is true.</li>
        <li>p ∨ q</li>
        <li>¬p ∨ r</li>
        <li>∴q ∨ r</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Affirming the conclusion Fallacy:</h4>
      <ul className="examples">
        <li>p → q</li>
        <li>q</li>
        <li>∴p</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Denying the Hypothesis Fallacy:</h4>
      <ul className="examples">
        <li>p → q</li>
        <li>¬p</li>
        <li>∴¬q</li>
      </ul>
      <p>________________________________________________________</p>
      <h4>Building Arguments:</h4>
      <ul className="examples">
        <li>Combine our rules of inference</li>
        <li>Same vertical written format</li>
        <li>Each line is true</li>
        <li>Combined with a logical AND</li>
      </ul>
      <p>________________________________________________________</p>

      <div className="button-container">
<Link to="/topics/Nested-Quantifiers">
    <button>Previous: 1.5</button>
  </Link>
  <Link to="/topics/Intro-to-Proofs">
    <button>Next Section: 1.7</button>
  </Link>
</div>
</div>
  );
}

export default RulesofInfer;