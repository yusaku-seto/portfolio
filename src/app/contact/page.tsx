"use client";
import Header from "../components/base/Header";
export default function Contact() {
  return (
    <div className='body'>
      <Header></Header>
      <div className=" bg-gray-100 ">

      </div>

      {/* Skill */}
      <div className="scroll-section">
        <div className="background-image"></div>
        <div className="max-w-6xl mx-auto p-8">
          <section>
            <section className='vision-section'>
              <h2 className='h2-title'>Contact</h2>
              <a href="mailto:seto.yusaku.2027@gmail.com">
                メールからお気軽にお問い合わせください
              </a>
              <p>
                <a href="mailto:seto.yusaku.2027@gmail.com">
                  seto.yusaku.2027@gmail.com
                </a>
              </p>
            </section>
          </section>
        </div>

      </div>
    </div >
  );
}
