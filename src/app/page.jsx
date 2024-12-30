import { FaFacebookF, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image.jpg')" }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent z-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between pl-10 pr-10 pt-5 text-white z-10">
        <div className="flex items-center">
          <h1 className="font-bold text-4xl">CChatchawan</h1>
        </div>
        <div className="flex items-center space-x-10 relative z-10">
          {/* GitHub */}
          <a
            href="https://github.com/Liochatchawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/lio_3030x/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100019622294847"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@lio_3030x"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>

      {/* Content */}
      <section className="h-full flex items-center justify-between text-white px-10 z-20 relative">
        {/* Photo */}
        <div className="ml-60 flex items-center justify-start">
          <img src="/Lio.jpg" alt="Lio Photo" className="h-96 rounded-xl object-contain" />
        </div>

        {/* Detail */}
        <div className="w-2/3 flex items-center">
          <div>
            <h2 className="text-4xl font-bold">Hi My Name Chatchawan Chanprom</h2>
            <p className="mt-4 text-lg">
              I'm the owner of this website. I created this website to store my work.
            </p>
            <p className="mt-4 text-lg">
              I'm a student at Mahasarakham University, Majoring in Computer Science and International Technology.
            </p>
    
            <button className="btn-main mt-5">
              <span>Continue</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>


          </div>
        </div>
      </section>
    </div>
  );
}
