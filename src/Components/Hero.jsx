import heroImage from '../assets/hero-banner.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="position-relative text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >

    </section>
  )
}

export default Hero
