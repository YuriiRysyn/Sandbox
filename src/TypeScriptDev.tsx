import React from 'react';

function TypeScriptDev () {
  // Custom types overview
  // https://prnt.sc/111mrln

  function calculate(x: number, y: number, z: number) {
    const result = (x + y) * z;
  
    // console.log(`(${x} + ${y}) * ${z} = ${result}`);

    return (`(${x} + ${y}) * ${z} = ${result}`);
  };

  const multiply = (x: number, y: number) : number => {
    return x * y;
  }

  type Callback = (x:number) => number;
  const cube: Callback = x => x * x * x;

  type ObjShape = {
    name: string,
    secondName: string,
    age?: number,
    sex?: string,
    phone?: number,
    getFullName: any
  }

  const user: ObjShape = {
    name: 'John',
    secondName: 'Smith',
    age: 24,
    sex: 'dasdas',
    getFullName: function () {
      return this.name + ' ' + this.secondName
    }
  }

  console.log(user.getFullName());

  function sayHiTo(name: string): void {
    console.log(`Hi, ${name}`);
  }

  const num = (a: any): string => { 
      return `this is a number ${a}`
  } 

  console.log(num('2'));
  
  sayHiTo('Bant')

///
  type Age = 12 | 122 | 13; // Literal type
  let a: Age;
  a = 12
  console.log(a);
  // //
  const items: (string | number)[] = [1, 3, 'sad']; 
  const strings: string[] = ['123', 'yea'];
  // const itemsdas: [number, number, string?] = [1, 3]; //Tuple

  const results = strings.includes('2');
  console.log(results);
  

  console.log(items);   
  // console.log(items2);

  type Obj = object;

  let d: Obj;

  d = {value: 12}

  console.log(d);
  
  
  
  return (
    <>
      <h1>TS Component</h1>
      <p>{calculate(1, 5, 2)}</p>
      <p>{calculate(22, 5, 2)}</p>

      <p>5 ** 3 = {cube(5)}</p>

    </>
  );
}

export default TypeScriptDev;