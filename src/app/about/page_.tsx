import profileData from '../../../public/json/profile.json';

const Profile = () => {
    const { name, biography, activities } = profileData;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-4xl p-8 bg-gray-100 rounded-lg shadow-md flex">
                {/* Left side */}
                <div className="w-1/3 mr-4">
                    <div className="mb-4">
                        <Image src="/profile-image.jpg" alt="Profile Image" width={200} height={200} className="rounded-full" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{name}</h2>
                    <p className="text-gray-600">{biography}</p>
                </div>
                {/* Right side */}
                <div className="w-2/3">
                    {activities.map((activity, index) => (
                        <div className="mb-4" key={index}>
                            <h3 className="text-lg font-semibold mb-2">{activity.date}</h3>
                            <p>{activity.activity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
