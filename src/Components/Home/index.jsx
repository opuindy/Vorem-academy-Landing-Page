import BackToTop from '../BackToTop';
import Banner from '../Banner';
import Chat from '../Chat';
import Course from '../Course';
import UpcomingCourse from '../UpcomingCourses';

const Home = () => {
  return (
    <>
      <Banner />
      <Course />
      <UpcomingCourse />
      <BackToTop />
      <Chat />
    </>
  );
};

export default Home;
