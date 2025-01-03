import Link from "next/link";
import Image from 'next/image';
export default function MyWork() {
  return (
    <div>
      {/* Section 1 */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/sorsala_bg.jpg')",
        }}>

        {/* ใช้ pseudo-element สำหรับจางพื้นหลัง */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* รูปภาพ */}
        <img
          src="/sorsala_logo.png"
          alt="Studio Logo"
          className="w-60 h-60 object-contain z-10"
        />
        {/* ข้อความ */}
        <h1 className="text-2xl md:text-5xl font-bold text-center text-white z-10">
          Welcome to S.Sorsala Studio
        </h1>
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0 justify-center z-20">
          <div className="text-center md:text-left">
            <Link href="/" className="btn-main mt-5 w-34 h-9 mx-auto md:mx-0 text-center text-xs md:text-lg ">
              <span>Main Page</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-black flex justify-center px-10 z-30 py-10">
        <div className="w-full max-w-6xl">
          <h1 className="text-center text-2xl md:text-5xl font-bold text-white mb-8 md:mb-12">
            Members
          </h1>
          {/* Grid สำหรับสมาชิก 3x3 */}
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {/* สมาชิกที่ 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Namtan.png"
                  alt="Member 1"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Namtan</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
              </div>
            </div>

            {/* สมาชิกที่ 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Chokun.png"
                  alt="Member 2"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Chokun</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
              </div>
            </div>

            {/* สมาชิกที่ 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Film.jpg"
                  alt="Member 3"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Film</p>
                <p className="text-gray-400">ตำแหน่ง เด้ง</p>
              </div>
            </div>

            {/* สมาชิกที่ 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Best.png"
                  alt="Member 4"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Best</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
              </div>
            </div>

            {/* สมาชิกที่ 5 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Prim.png"
                  alt="Member 5"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Prim</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
              </div>
            </div>

            {/* สมาชิกที่ 6 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Punch.png"
                  alt="Member 6"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Punch</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
              </div>
            </div>

            {/* สมาชิกที่ ว่าง */}
            <div>
            </div>
            {/* สมาชิกที่ 7 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Lio2.png"
                  alt="Member 7"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Lio</p>
                <p className="text-gray-400">ตำแหน่ง ไม่บอก</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, black, transparent 20%), linear-gradient(to top, black, transparent 20%) ,url('/Myfan_poster.jpg')",
      }}>

      </section>
    </div>
  );
}
