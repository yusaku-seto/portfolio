import Link from 'next/link';
import profileData from '../../../public/json/profile.json';
export default function Profile() {
  const { name, biography, activities, skills } = profileData;
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      {/* Profile */}
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
            <dl className="space-y-4">
              {activities.map((activity, index) => (
                <div className="flex mb-2" key={index}>
                  <dt className="w-1/7 pr-4 text-xs">{activity.date}</dt>
                  <dd className="w-4/7 text-xs">{activity.activity}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Skill */}
      <div className="w-full text-left mb-4">
        <h2 className="text-xl font-semibold p-4">Skill</h2>
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
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center">
          {/* Left Side */}
          <div className="w-full sm:w-1/2 p-4">
            <div className="text-left">
              {skills.english}
            </div>
            <Link href={"https://iibc.cloudcerts.jp/viewer/cert/5aJemlWBgNAqgu68NgOA5VmIbVAVQ8JRavpo91x8eARGGuWro41Qv5gTdYq1eRJw"}>見てみてーー！！！！！</Link>
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-1/2 p-4">
            <img src="/img/dazaihu.png" alt="Profile" className="block w-50 h-50 rounded-lg" />
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

  );
};
