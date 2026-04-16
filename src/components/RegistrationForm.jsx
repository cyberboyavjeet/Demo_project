import {useState} from 'react'
function RegistrationForm(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        course:''
    })

    const handleChange=(e)=>{
       const {name,value} =e.target
       setFormData({[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(`form Submitted:`,formData)
        alert(`Welcome:${formData.name}`)
    }
    return(
        <div className='p-6 max-w-md mx-auto bg-white shadow rounded'>
            <h2 className='text-xl font-bold mb-4'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='Enter yoyr name'
                value={formData.name} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mb-4' ></input>
                <input 
                type='email'
                name='email'
                placeholder='Enter yoyr email'
                value={formData.email} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mb-4' ></input>
                <input 
                type='text'
                name='course'
                placeholder='Enter your course'
                value={formData.course} 
                onChange={handleChange} 
                className='w-full p-2 border rounded mb-4' ></input>
                <button className='w-full p-2 border rounded mb-4'
                        type='submit'
                        >Submit</button>
                </form>
                
                <div className='text-blue-2'>
                    <p><strong>Name:</strong>{formData.name}</p>
                    <p><strong>Email:</strong>{formData.email}</p>
                    <p><strong>Course:</strong>{formData.course}</p>
                </div>
                
        </div>
    )
}
export default RegistrationForm