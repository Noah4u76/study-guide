import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';


function CardinalitySets() {
  return (
<div className="container">
<h1>Cardinality of Sets: 2.5</h1>
<p className="description">Cardinality: The number of distinct elements in a set one to one correspondence from A to B, |A| = |B|.</p>
<p className="description">Countable Sets: Either finite or has the same cardinality as the set of positive integers called countable.</p>

<h4>Example: Show that the set of positive integers is a countable set, show one to one correspondence Z+.</h4>
      <ul className="examples">
        <li>f(n) = Zn - 1 : def of odd</li>
        <li>Suppose 2n - 1 = 2m - 1</li>
        <li>Therefore is is one to one</li>
        <li>Onto: t = 2k - 1</li>
        <li>1 = 2k + 1</li>
        <li>4:1</li>
        <li>Onto</li>
        <li>Countable</li>
        </ul>

        <p>________________________________________________________</p>

        <p className="description">Shroder Bernstein Theorem: If we have a one to one function f from A to B and a function g one to one from B to A then we have a one to one correspondence between A and B.</p>

<h4>Example: Show that if A and B are sets with the same cardinality, then |A| ≤ |B| and |B| ≤ |A|.</h4>
      <ul className="examples">
        <li>So if,</li>
        <li>f: A to B is |A| ≤ |B|</li>
        <li>f^-1: B to A is |B| ≤ |A|</li>
        <li>By Shroder Bernstein |A| = |B|</li>
        </ul>

        <p>________________________________________________________</p>

        <div className="button-container">
      <ScrollToTopLink  to="/topics/Sequences-and-Summations">
          <button>Previous: 2.4</button>
        </ScrollToTopLink>
        <ScrollToTopLink  to="/">
          <button>Home</button>
        </ScrollToTopLink>
      </div>
</div>
  );
}

export default CardinalitySets;