export default function Input( {onChange} ) {
  return (
    <div className='border-2 border-emerald-600 w-1/4 mx-auto h-20'>
      <input type="text" onChange={onChange}/>
    </div>
  )
}
