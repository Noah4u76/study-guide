import React from 'react';
import { Link } from 'react-router-dom';

function Sets() {
  return (
<div className="container">
<h1>Sets : 2.1</h1>
<p className="description">Sets: an unordered collection of objects, called elements. We denote a ε A as the element “a” is in the set “A”.</p>
<p className="description">Set Builder Notation: Characterizes all elements in the set by stating the property or properties they must have to be members.</p>

<h4>Example: Set O of all positive odd integers less than 10.</h4>
      <ul className="examples">
        <li>O = {" {x | x is an odd positive integer less than 10} "}</li>
        </ul>

        <h4>Example: The set of all negative integers such that x^2 {">"} 0.</h4>
        <ul className="examples">
        <li>O = {" {x ε Z- | x^2  > 0} "}</li>
        <li>O = Is this set true? Yes, because 0^2 is not a part of negative integers.</li>

        <h4>Commonly used sets:</h4>
        <li>N = {"{0,1,2,3,...}"} Natural numbers</li>
        <li>Z = {"{...,-2,-1,0,1,2,...}"} Integers</li>
        <li>O = Z- = {"{-1,-2,-3,....}"} Negative integers</li>
        <li>Z+ = {"{1,2,3,....}"} Positive integers</li>
        <li>Q = {"{P/Q | P ε Z, Q ε Z and Q ≠ 0 }"} rational numbers</li>
        <li>R = Real numbers</li>
        </ul>

        <p>________________________________________________________</p>

        <p className="description">Subsets: The set A is a subset of B if and only if every element in A is also in B. To show A is not a subset of B, we only need to find one counterexample or element.</p>
        <p className="description">Power Sets: Given a set of S, the power set of S is the set of all subsets of the sets. The power set is denoted P(s).</p>

        <h4>Example: What is the power set of {"{0,1,2}"}</h4>
        <ul className="examples">
        <li>O = P{"({1,2,3})"}</li>
        <li>{"= {Ø, {0}, {1}, {2}, {0,1}, {0,2}, {1,2}, {0,1,2,3} }"}</li>
        <li>"= 2^8 elements"</li>
        </ul>

        <p className="description">Cartesian Product: Let A and B be sets. The cartesian product of A and B, denoted by A x B, is the set of all ordered pairs (a,b) where a ε A and b ε B.</p>
        <ul className="examples"><h4>Example:</h4>
        <li>A x B = {"{ (a,b) | a ε A ∧ b ε B }"}</li>
        </ul>

        <p>________________________________________________________</p>

        <div className="button-container">
      <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics/Set-Operations">
          <button>Next Section: 2.2</button>
        </Link>
      </div>
</div>
  );
}

export default Sets;