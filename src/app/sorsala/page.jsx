export default function MyWork() {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/sorsala_bg.jpg')",
        }}
      >
        {/* ใช้ pseudo-element สำหรับจางพื้นหลัง */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
  
        {/* รูปภาพ */}
        <img
          src="/sorsala_logo.png"
          alt="Studio Logo"
          className="w-60 h-60 object-contain z-10"
        />
        {/* ข้อความ */}
        <h1 className="text-5xl font-bold text-center text-white z-10">
          Welcome to S.Sorsala Studio
        </h1>
      </div>
    );
  }
  