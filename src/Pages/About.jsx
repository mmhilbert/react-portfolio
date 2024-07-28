import { Outlet } from "react-router-dom"

const AboutPage = () => {
  return (
    <>
      <h1 className="mb-8">About</h1>
      <div className="flex">
        <p>Hi there! My name is Meg and I'm a Registered Dietitian Nutritionist and web developer looking to blend my love for wellness and technology. With over 5 years of experiecing working with health tech start ups from all over the country including Noom, Thrive Health.</p>
        <img height={400} width={200} src="./src/assets/selfportrait.jpeg" />
      </div>
    </>
  )
}

export default AboutPage