import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';


function ProofMethods() {
  return (
<div className="container">
<h1>Proof Methods and Strategy: 1.8</h1>
<h4>Exhaustive Proofs: Limited sets</h4>
<h4>Example: Prove that x+2{'>'}x for all positive integers between 1 and 5 </h4>
<ul className="examples">
    <li>For x=1,2,3,4,5</li>
    <li>1+2=3{'>'}1</li>
    <li>2+2=4{'>'}2</li>
    <li>3+2=5{'>'}3</li>
    <li>4+2=6{'>'}4</li>
    <li>5+2=7{'>'}5</li>
</ul>

<p>________________________________________________________</p>

<h4>Proof by Cases:</h4>
<ul className="examples">
    <li>Too many domain values</li>
    <li>Must prove all possible cases</li>
    <li>Must cover all cases</li>
</ul>
<h4>Example:  Prove that if n is an integer, then n^2 ≥ n</h4>
<ul className="examples">
    <li>For x=1,2,3,4,5</li>
    <li>Case 1: n=0</li>
    <li>0^2=0</li>
    <li>0 = 0 TRUE</li>
    <li>Case 2: n=1</li>
    <li>1^2 = 1</li>
    <li>1 = 1 TRUE</li>
    <li>Case 3: n=-1</li>
    <li>-1^2=-1</li>
    <li>1{'>'}-1 TRUE</li>
</ul>
<p>________________________________________________________</p>

<h4>Existence Proofs:</h4>
<ul className="examples">
    <li>Constructive: Finds the element in the domain that exists if you can find it, great method.</li>
    <li>Non-Constructive: If you cannot find the element that exists you can try a non-constructive proof ∃xP(x), one common way to do this is with a proof of contradiction showing the negation.</li>
</ul>
<h4>Example: Prove that there is a positive integer that equals the sum of the positive integers not exceeding it.</h4>
<ul className="examples">
    <li>Constructive:  ∃x(x=x, +x2 + xn….., 1xn) where xn=x</li>
    <li>Let num be 1</li>
    <li>1=0+1</li>
    <li>1=1</li>
    <li>TRUE</li>
</ul>
<p>________________________________________________________</p>

<div className="button-container">
<ScrollToTopLink to="/topics/Intro-to-Proofs">
    <button>Previous: 1.7</button>
  </ScrollToTopLink >
  <ScrollToTopLink to="/">
    <button>Home</button>
  </ScrollToTopLink >
</div>

</div>
  );
}

export default ProofMethods;