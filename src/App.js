import './App.css';
import { useState } from 'react';


function App() {
  const [inputs, setInputs] = useState([{ left: '', right: '' }]);
  const [multinputs, multsetInputs] = useState([{ left: '', right: '' }]);
  const [attributes, setAttributes] = useState('');
  const [activeButtons, setActiveButtons] = useState([]);

  const buttons = [
    'Display Relation',
    'Closures',
    'Minimum Key Closures',
    'Canonical Cover',
    'Check Normal Forms',
    '3NF Decomposition',
    'BCNF Decomposition'
  ];

  const data = [
    'R(A,b,C,D)',
    'A,B,C',
    'R(A,b,C,D)',
    'R(A,b,C,D)',
    'R(A,b,C,D)',
    'R(A,b,C,D)',
    'R(A,b,C,D)'
  ]

  const toggleButton = (index) => {
    const isActive = activeButtons.includes(index);
    if (isActive) {
      setActiveButtons(activeButtons.filter((btnIndex) => btnIndex !== index));
    } else {
      setActiveButtons([...activeButtons, index]);
    }
  };

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

  const handleAttributeChange = (value) => {
    setAttributes(value);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className='bg-fuchsia-200 w-full'>
        <div className='w-[95%] bg-violet-900 h-[91%] my-9 mx-auto rounded-lg overflow-auto'>
          <div className='ml-4'>
            <h1 className='text-pink-500 text-3xl font-semibold pt-3'>Graphql Dante</h1>
          </div>
          <div className='mt-10'>
            <div className='flex flex-row ml-3'>
              <h1 className='text-pink-500 text-[17px]'>Attributes(comma seperated): </h1>
              <input
                className='ml-3 bg-fuchsia-300 rounded-lg'
                name='attributes'
                value={attributes}
                onChange={e => handleAttributeChange(e.target.value)}
              />
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
          <div className='my-10'>
            {buttons.map((text, index) => (
              <button
                key={index}
                className={activeButtons.includes(index) ? 'ml-5 bg-pink-500 rounded-[100px] my-2' : 'ml-5 bg-fuchsia-300 rounded-[100px] my-2'}
                onClick={() => toggleButton(index)}
              >
                <h1 className='mx-3 my-2'>{text}</h1>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-fuchsia-200 w-full'>
        <div className='w-[95%] bg-violet-900 h-[91%] my-9 mx-auto rounded-lg overflow-auto'>
          <div className='ml-4'>
            <h1 className='text-pink-500 text-3xl font-semibold pt-3'>Output</h1>
          </div>
          <div style={{ marginTop: '20px' }}>
            {buttons.map((text, index) => (
              <div
                key={index}
                className='flex flex-row ml-3 mt-10'
                style={{
                  display: activeButtons.includes(index) ? 'flex' : 'none',
                }}
              >
                <div>
                  <h1 className='text-[17px] text-pink-500'>{text}: </h1>
                </div>
                <div className='ml-2'>
                  <h1 className='text-[17px] text-fuchsia-300'>R(A,B,C,d)</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
