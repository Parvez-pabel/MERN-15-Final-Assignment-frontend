const Dashboard = () => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="newsList" />
          NEWS LIST
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          news list
        </div>

        <label className="tab">
          <input type="radio" name="uploadNews" defaultChecked />
          UPLOAD NEWS
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          UPLOAD NEWS FUNCTIONALITY
        </div>

        <label className="tab">
          <input type="radio" name="userList" />
          USER LIST
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          user list
        </div>
        <label className="tab">
          <input type="radio" name="userRequest" />
          USER REQUESTS
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          ALL REQUESTS
        </div>
        <label className="tab">
          <input type="radio" name="userProfile" />
          USER PROFILE
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          PROFILE DATA
        </div>
        <label className="tab">
          <input type="radio" name="newsCategory" />
          News Category
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Category DATA
        </div>
      </div>
    </>
  );
};

export default Dashboard;
