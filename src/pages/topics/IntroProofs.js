import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';


function IntroProofs() {
  return (
<div className="container">
<h1>Introduction to Proofs: 1.7</h1>
<h4>Formal: </h4>
<ul className="examples">
    <li>All steps are specified to support the given</li>
</ul>
<h4>Informal: </h4>
<ul className="examples">
    <li>Some steps may be skipped or multiple steps in one</li>
</ul>
<h4>Theorem: </h4>
<ul className="examples">
    <li>A statement that can be shown to be true, not a theory</li>
</ul>
<h4>Axioms/postulates: </h4>
<ul className="examples">
    <li>Statements that are assumed to be true but other assumptions must be proven</li>
</ul>
<h4>Corollary: </h4>
<ul className="examples">
    <li>Theorem established directly from a theorem that has been proved</li>
</ul>
<h4>Conjecture:</h4>
<ul className="examples">
    <li>A statement that is being proposed as true. When a proof of a conjecture is found, it becomes a theorem.</li>
</ul>
<p>________________________________________________________</p>
<h4>Direct Proofs: </h4>
<ul className="examples">
    <li>Start with an assumption</li>
    <li>Proceed step by step to arrive at conclusion</li>
    <li>Show all steps</li>
</ul>
<h4>Example: If n is an odd integer then n^2 is odd. Definition of an odd n=2k+1. </h4>
<ul className="examples">
    <li>n = 2k+1 (Assumption)</li>
    <li>n^2 = (2k+1)^2 (Square)</li>
    <li>n^2 = 4k^2 +4k +1 (Multiply)</li>
    <li>n^2 = 2(2k^2+2k)+1 (Factor)</li>
    <li>∴ n^2 is odd</li>
</ul>
<p>________________________________________________________</p>

<p className="description">Proofs by Contraposition: If we prove by a means other than starting with the premises and ending with the conclusion, they are called indirect proofs.</p>
<h4>Example: Prove that n is an integer and 3n+2 is odd, then n is odd.Definition of odd n=2k+1. Definition of even n=2k.</h4>
<ul className="examples">
    <li>n=2k (Assumption)</li>
    <li>3(2k)+2 (Substitute)</li>
    <li>6k+2 (Multiply)</li>
    <li>2(3k+1) (Factor)</li>
    <li>2(3k+1) is even</li>
    <li>∴n is even</li>
</ul>
<h4> Give a proof by contradiction that 3n+2 is odd, then n is odd.
		To prove that p→q by contradiction we assume ¬q is true, so n is even.</h4>
<ul className="examples">
    <li>n=2k (Assumption)</li>
    <li>3(2k)+2 (Substitute)</li>
    <li>6k+2 (Multiply)</li>
    <li>2(3k+1) (Factor)</li>
    <li>2(3k+1) is even</li>
    <li>∴3n+2 is even which contradicts the assumption 3n+2 is odd which means</li>
    <li>(p ∧ ¬q) → F</li>
    <li>∴p → q</li>
</ul>
<p>________________________________________________________</p>

<div className="button-container">
<ScrollToTopLink  to="/topics/Rules-of-Inference">
    <button>Previous: 1.6</button>
  </ScrollToTopLink>
  <ScrollToTopLink  to="/topics/Proof-Methods-and-Strategy">
    <button>Next Section: 1.8</button>
  </ScrollToTopLink>
</div>

</div>
  );
}

export default IntroProofs;