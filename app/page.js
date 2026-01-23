export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-4'>
            Professional IT Services & Custom PC Solutions
          </h1>
          <p className='text-xl mb-8'>
            Expert setup for gaming rigs, media servers, and complete IT support
          </p>
          <a
            href='/contact'
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition'
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>My Services</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Service Card 1 */}
            <div className='border rounded-lg p-6 hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3'>General IT Support</h3>
              <p className='text-gray-600 mb-4'>
                Troubleshooting, network setup, software installation, and
                ongoing maintenance.
              </p>
              <a
                href='/services#it-support'
                className='text-blue-600 hover:underline'
              >
                Learn more →
              </a>
            </div>

            {/* Service Card 2 */}
            <div className='border rounded-lg p-6 hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3'>Media Server Setup</h3>
              <p className='text-gray-600 mb-4'>
                Plex, Jellyfin, or custom solutions for your home entertainment
                system.
              </p>
              <a
                href='/services#media-server'
                className='text-blue-600 hover:underline'
              >
                Learn more →
              </a>
            </div>

            {/* Service Card 3 */}
            <div className='border rounded-lg p-6 hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3'>Custom PC Building</h3>
              <p className='text-gray-600 mb-4'>
                High-performance builds tailored to your needs and budget.
              </p>
              <a
                href='/services#pc-building'
                className='text-blue-600 hover:underline'
              >
                Learn more →
              </a>
            </div>

            {/* Service Card 4 */}
            <div className='border rounded-lg p-6 hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3'>
                Gaming Setup & Emulation
              </h3>
              <p className='text-gray-600 mb-4'>
                Retro gaming stations, emulation systems, and optimized gaming
                configurations.
              </p>
              <a
                href='/services#gaming-setup'
                className='text-blue-600 hover:underline'
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Why Choose Me */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>Why Choose My Services?</h2>
          <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='font-semibold mb-2'>Fast Response</h3>
              <p className='text-gray-600'>
                Same-day service available for urgent issues
              </p>
            </div>
            <div>
              <div className='text-4xl mb-4'>💰</div>
              <h3 className='font-semibold mb-2'>Transparent Pricing</h3>
              <p className='text-gray-600'>
                No hidden fees, clear quotes upfront
              </p>
            </div>
            <div>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='font-semibold mb-2'>Expert Knowledge</h3>
              <p className='text-gray-600'>
                Years of experience with latest technology
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
