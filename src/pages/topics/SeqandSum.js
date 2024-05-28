import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';


function SeqandSum() {
  return (
<div className="container">
<h1>Sequences and Summations: 2.4</h1>
<p className="description">Sequences: is a function from a subset of the set of integers ( usually either the set {"{0,1,2,3,...} or {1,2,3,...})"} to a set S. We use the notation an to denote the image of the integer n.</p>

<h4>Example: Consider the sequence {"{an}"} when:</h4>
      <ul className="examples">
        <li>{" {an} = 1/n "}</li>
        <li>{" n = {1,2,3,...} "}</li>
        <li>{" = {1,½,⅓,....} decreasing "}</li>
        </ul>

        <p>________________________________________________________</p>

<p className="description">Recurrence Relation: for the sequence {"{an} is an equation that expresses an in terms of one or more of the previous terms of the sequence, a0,a1,a2,...., an for non negative integers"}.</p>

<h4>Example:  let {"{a} be the sequence that satisfies the recurrence relation an = an-1 + 3 for n=1,2,3…. And suppose a0 = 2. What are a1,a2,a3 ?"}</h4>
      <ul className="examples">
        <li>a.{") a1 = a0 + 3 "}</li>
        <li>{" = 2+3 "}</li>
        <li>{" = 5 "}</li>
        <li>b.{") a2 = a1 + 3 "}</li>
        <li>{"= 5+3 "}</li>
        <li>{"= 8 "}</li>
        <li>c.{") a3 = a2 + 3 "}</li>
        <li>{" = 8+3 "}</li>
        <li>{" = 11 "}</li>
        </ul>

<h4>Example:  Show that the sequence {"{an}"} is a solution of the recurrence relation an = -3an-1 + 4an-2 if,</h4>
      <ul className="examples">
        <li> an = 2(-4)^n + 3</li>
        <li>= -3 (2(-4)^n + 3) + 4( 2(-4)^n + 3)</li>
        <li>= -6(-4)^n-1 -9 + 8(-4)^n-2 + 12</li>
        <li>= -6 (-4)(-4)^n-2 + 8(-4)^n-2 + 3</li>
        <li>= (-4)^n-2 (-6(-4) + 8) + 3</li>
        <li>= (-4)^n-2 (32) + 3</li>
        <li>= (-4)^n-2 (16)(2) + 3</li>
        <li>= (-4)^n-2 (-4)^2 (2) + 3</li>
        <li>= (-4^n) (2) + 3</li>
        <li>an = 2(-4)^n + 3</li>
        </ul>

        <p>________________________________________________________</p>

        <div className="button-container">
      <ScrollToTopLink to="/topics/Functions">
          <button>Previous: 2.3</button>
        </ScrollToTopLink >
        <ScrollToTopLink to="/topics/Cardinality-of-Sets">
          <button>Next Section: 2.5</button>
        </ScrollToTopLink >
      </div>
</div>
  );
}

export default SeqandSum;