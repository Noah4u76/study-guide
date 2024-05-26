import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';
import Home from './pages/Home';
import LogicProofs from './pages/topics/Proplogic';
import AppOfPropLogic from './pages/topics/AppOfPropLog';
import PropEquiv from './pages/topics/PropEquiv';
import PredandQuant from './pages/topics/PredandQuant';
import NestedQuant from './pages/topics/NestedQuant';
import RulesofInfer from './pages/topics/RulesofInfer';
import IntroProofs from './pages/topics/IntroProofs';
import ProofMethods from './pages/topics/ProofMethods';
import Sets from './pages/topics/Sets';
import SetOperations from './pages/topics/SetOperations';
import Functions from './pages/topics/Functions';
import SeqandSum from './pages/topics/SeqandSum';
import CardinalitySets from './pages/topics/CardinalitySets';
import Matrices from './pages/topics/Matrices';



function App() {
  return (
    <Router>   
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/prop-logic" element={<LogicProofs />} />
            <Route path="/topics/App-Of-Prop-Logic" element={<AppOfPropLogic />} />
            <Route path="/topics/Prop-Equivalences" element={<PropEquiv />} />
            <Route path="/topics/Predicates-and-Quantifiers" element={<PredandQuant />} />
            <Route path="/topics/Nested-Quantifiers" element={<NestedQuant />} />
            <Route path="/topics/Rules-of-Inference" element={<RulesofInfer />} />
            <Route path="/topics/Intro-to-Proofs" element={<IntroProofs />} />
            <Route path="/topics/Proof-Methods-and-Strategy" element={<ProofMethods />} />

            {/*chapter 2 */}

            <Route path="/topics/Sets" element={<Sets />} />
            <Route path="/topics/Set-Operations" element={<SetOperations />} />
            <Route path="/topics/Functions" element={<Functions />} />
            <Route path="/topics/Sequences-and-Summations" element={<SeqandSum />} />
            <Route path="/topics/Cardinality-of-Sets" element={<CardinalitySets />} />
            <Route path="/topics/Matrices" element={<Matrices />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
