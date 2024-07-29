import { useState } from "react"

const Contact = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleNameBlur = (e) => {
    if (!name) {
      setError('Name is required.')
    }
  }

  const handleEmailValidation = (e) => {
    const isValidEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!email) {
      setError('E-mail is required.')
    } else if (!email.match(isValidEmailPattern)) {
      setError('Please enter a valid e-mail.')
    }
  }

  const handleMessageBlur = (e) => {
    if (!message) {
      setError('Message is required.')
    }
  }
  
  return (
    <>
      <h1>Contact Me</h1>
      <div className="w-1/2 flex flex-col gap-6">
        <label className="input input-bordered flex items-center gap-2">
          Name: 
          <input 
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            onBlur={handleNameBlur}
            type="text" 
            className="grow" 
            placeholder="Your Name"
           />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            onBlur={handleEmailValidation}
            type="text" 
            className="grow" 
            placeholder="your@email.com" 
          />
        </label>
        <div className="flex">
          <textarea 
            className="textarea textarea-bordered grow" 
            placeholder="Message"
            onChange={(e) => {setMessage(e.target.value)}}
            onBlur={handleMessageBlur}
          >
            {message}

          </textarea>

        </div>
          { error && <p className="text-red-400">{error}</p>}
          <button className="btn btn-active btn-secondary">Send</button>
      </div>


    </>
  )
}

export default Contact