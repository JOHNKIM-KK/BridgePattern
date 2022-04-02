import React from 'react';


import {Tiger} from "./RefindAbstraction/Tiger";
import {Bird} from "./RefindAbstraction/Bird";
import {Hunting_Method1} from "./ConcreteImplementor/Hunting_Method1";
import {Hunting_Method2} from "./ConcreteImplementor/Hunting_Method2";

function App() {

  const tiger = new Tiger(new Hunting_Method2());
  const bird = new Bird(new Hunting_Method1());

  tiger.hunt()
  bird.hunt();
  return (
   <div>브릿지</div>

  );
}

export default App;
