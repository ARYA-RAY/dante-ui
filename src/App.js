import './App.css';


function App() {
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
            <div className='flex flex-row ml-3 mt-10'>
              <h1 className='text-pink-500 text-[17px]'>Functional Dependency: </h1>
              <input className='ml-3 bg-fuchsia-300 rounded-lg'>

              </input>
              <h1 className='text-pink-500 ml-3 text-[17px]'>-&gt;</h1>
              <input className='ml-3 bg-fuchsia-300 rounded-lg'>

              </input>
              <button className='ml-5 bg-pink-500 w-6 rounded-[100px]' >
                <h1 className='font-bold '>+</h1>
              </button>
            </div>
            <div className='flex flex-row ml-3 mt-10'>
              <h1 className='text-pink-500 text-[17px]'>Multivalued Dependency: </h1>
              <input className='ml-3 bg-fuchsia-300 rounded-lg'>

              </input>
              <h1 className='text-pink-500 ml-3 text-[17px]'>-&gt;-&gt;</h1>
              <input className='ml-3 bg-fuchsia-300 rounded-lg'>

              </input>
              <button className='ml-5 bg-pink-500 w-6 rounded-[100px]' >
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
        </div>
      </div>
    </div>
  );
}

export default App;
