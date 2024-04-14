import './App.css';
import { useState } from 'react';


function App() {
  const [inputs, setInputs] = useState([{ left: '', right: '' }]);
  const [multinputs, multsetInputs] = useState([{ left: '', right: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { left: '', right: '' }]);
  };

  const handleMultAddInput = () => {
    multsetInputs([...multinputs, { left: '', right: '' }]);
  };

  const handleInputChange = (index, side, value) => {
    const newInputs = [...inputs];
    newInputs[index][side] = value;
    setInputs(newInputs);
  };

  const handleMultInputChange = (index, side, value) => {
    const newInputs = [...multinputs];
    newInputs[index][side] = value;
    multsetInputs(newInputs);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className='bg-fuchsia-200 w-full'>
        <div className='w-[95%] bg-violet-900 h-[91%] my-9 mx-auto rounded-lg'>
          <div className='ml-4'>
            <h1 className='text-pink-500 text-3xl font-semibold pt-3'>Graphql Dante</h1>
          </div>
          <div className='mt-10'>
            <div className='flex flex-row ml-3'>
              <h1 className='text-pink-500 text-[17px]'>Attributes(comma seperated): </h1>
              <input className='ml-3 bg-fuchsia-300 rounded-lg'>

              </input>
            </div>
            <div className='flex flex-col'>
              {inputs.map((input, index) => (
                <div className='flex flex-row ml-3 mt-10'>
                  <h1 className='text-pink-500 text-[17px]'>Functional Dependency: </h1>
                  <input
                    className='ml-3 bg-fuchsia-300 rounded-lg'
                    name='left'
                    value={input.left}
                    onChange={e => handleInputChange(index, 'left', e.target.value)}
                  />
                  <h1 className='text-pink-500 ml-3 text-[17px]'>-&gt;</h1>
                  <input
                    className='ml-3 bg-fuchsia-300 rounded-lg'
                    name='right'
                    value={input.right}
                    onChange={e => handleInputChange(index, 'right', e.target.value)}
                  />
                </div>
              ))}
              <button className='ml-3 bg-pink-500 mt-10 w-6 rounded-[100px]' onClick={handleAddInput}>
                <h1 className='font-bold '>+</h1>
              </button>
            </div>
            <div className='flex flex-col'>
              {multinputs.map((input, index) => (
                <div className='flex flex-row ml-3 mt-10'>
                  <h1 className='text-pink-500 text-[17px]'>Multivalued Dependency: </h1>
                  <input
                    className='ml-3 bg-fuchsia-300 rounded-lg'
                    name='left'
                    value={input.left}
                    onChange={e => handleMultInputChange(index, 'left', e.target.value)}
                  />
                  <h1 className='text-pink-500 ml-3 text-[17px]'>-&gt;-&gt;</h1>
                  <input
                    className='ml-3 bg-fuchsia-300 rounded-lg'
                    name='right'
                    value={input.right}
                    onChange={e => handleMultInputChange(index, 'right', e.target.value)}
                  />
                </div>
              ))}
              <button className='ml-3 bg-pink-500 mt-10 w-6 rounded-[100px]' onClick={handleMultAddInput}>
                <h1 className='font-bold '>+</h1>
              </button>
            </div>
          </div>
          <div className='mt-10'>
            <div>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>Display Relation</h1></button>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>Closures</h1></button>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>Minimum Key Closures</h1></button>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>Canonical Cover</h1></button>
            </div>
            <div className='mt-5'>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>Check Normal Forms</h1></button>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>3NF Decomposition</h1></button>
              <button className='ml-5 bg-pink-500 rounded-[100px]'><h1 className='mx-3 my-2'>BCNF Decomposition</h1></button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-fuchsia-200 w-full'>
        <div className='w-[95%] bg-violet-900 h-[91%] my-9 mx-auto rounded-lg'>
          <div className='ml-4'>
            <h1 className='text-pink-500 text-3xl font-semibold pt-3'>Output</h1>
          </div>
          <div className='flex flex-row ml-3 mt-10'>
            <div>
              <h1 className='text-[17px] text-pink-500'>Relation: </h1>
            </div>
            <div className='ml-2'>
              <h1 className='text-[17px] text-fuchsia-300'>R(A,b,C,D)</h1>
            </div>
          </div>
          <div className='flex flex-row ml-3 mt-10'>
            <div>
              <h1 className='text-[17px] text-pink-500'>Closures: </h1>
            </div>
            <div className='ml-2'>
              <h1 className='text-[17px] text-fuchsia-300'>A,B,C</h1>
            </div>
          </div>
          <div className='flex flex-row ml-3 mt-10'>
            <div>
              <h1 className='text-[17px] text-pink-500'>Canonical Cover: </h1>
            </div>
            <div className='ml-2'>
              <h1 className='text-[17px] text-fuchsia-300'>R(A,b,C,D)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
