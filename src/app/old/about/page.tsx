"use client";
import Link from 'next/link';
import profileData from '../../../../public/json/profile.json';
import FadeIn from '../../../app/components/UI/FadeIn';
export default function Profile() {
  const { name, biography, activities, skills } = profileData;
  return (
    <div className='body'>
      <div className=" bg-gray-100 ">
        {/* <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md"> */}
        {/* Profile */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="w-full text-left mb-4">
            <h2 className="text-xl font-semibold p-4">Profile</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Left Side */}
            <div className="w-full sm:w-1/2 p-4">
              <div className="text-left mb-4">
                <img src="/img/me.jpg" alt="Profile" className="block w-32 h-36 rounded-lg" />
                {/* <img src="/img/me.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full" /> */}
              </div>
              <div className="text-left mb-4">
                <p className="text-sm mb-2">{name}</p>
                {/* <h3 className="text-lg font-semibold mb-2">略歴:</h3> */}
                <p className="text-xs">{biography}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full sm:w-1/2 p-4">
              <div className="text-left">
                <dl className="space-y-2">
                  {activities.map((activity, index) => (
                    <div className="flex mb-1" key={index}>
                      <dt className="w-1/7 pr-4 text-xs">{activity.date}</dt>
                      <dd className="w-4/7 text-xs">{activity.activity}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill */}
      <div className="scroll-section">
        <div className="background-image"></div>
        <div className="max-w-6xl mx-auto p-8">
          {/* <div className="w-full text-left mb-4"> */}
          <h2 className="flex font-semibold pt-32 pb-12">
            <div className='w-80'>
              <FadeIn>
                <span className='text-blue-500 text-2xl'>Skill</span>
              </FadeIn>
            </div>
            <span className='text-3xl skill-h2-2'>データサイエンスの力で社会に貢献します</span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <ul className="flex flex-col gap-10 ml-80">
              {skills.map((skill, index) => (
                <li key={index}>
                  <dt className="pr-4 text-2xl text-blue-500 font-bold mb-3">{skill.skill}</dt>
                  <dd className="text-lg">{skill.detail}</dd>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skill */}
      <div className="scroll-section-2">
        <div className="background-image"></div>
        <div className="max-w-6xl mx-auto p-8">
          <div className="w-full text-left mb-4">
            <h2 className="text-xl font-semibold p-4">
              <span className='fadeUp'>Skill</span>
            </h2>
          </div>
          <div>
            <div className="flex flex-wrap justify-center">
              {/* Left Side */}
              <div className="w-full sm:w-1/2 p-4">
                <img src="/img/ehime.png" alt="Profile" className="block w-50 h-50 rounded-lg" />
              </div>

              {/* Right Side */}
              <div className="w-full sm:w-1/2 p-4">
                <div className="text-left">
                  {skills.python}
                </div>
                <ul className="flex flex-col gap-10">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <dt className="pr-4 text-xl text-blue-500 font-bold mb-3">{skill.skill}</dt>
                      <dd className="text-lg">{skill.detail}</dd>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="background-skill">
          <div>
            <div className="flex flex-wrap justify-center">
              {/* Left Side */}
              <div className="w-full sm:w-1/2 p-4">
                <div className="text-left">
                  {skills.english}
                </div>
                <Link href={"https://iibc.cloudcerts.jp/viewer/cert/5aJemlWBgNAqgu68NgOA5VmIbVAVQ8JRavpo91x8eARGGuWro41Qv5gTdYq1eRJw"}>TOEIC820点：証明書</Link>
              </div>

              {/* Right Side */}
              <div className="w-full sm:w-1/2 p-4">
                <img src="/img/dazaihu.png" alt="Profile" className="block w-50 h-50 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            {/* Left Side */}
            <div className="w-full sm:w-1/2 p-4">
              <img src="/img/baystars25.jpg" alt="Profile" className="block w-50 h-50 rounded-lg" />
            </div>

            {/* Right Side */}
            <div className="w-full sm:w-1/2 p-4">
              <div className="text-left">
                {skills.frontend}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
