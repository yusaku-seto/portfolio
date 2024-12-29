"use client";
import Link from 'next/link';
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
              <Link href="https://www.linkedin.com/in/yusaku-seto/">
                LinkedInプロフィールはこちら
              </Link>
            </section>
          </section>
        </div>

      </div>
    </div >
  );
}
