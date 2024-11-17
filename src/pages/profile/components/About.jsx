import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const About = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <p className="text-gray-600 lg:text-[16px] md:text-[16px] text-sm lg:leading-[1.5] md:leading-[1.5] leading-[2]">{user?.bio ?? "No bio has been added"}</p>
  )
}

export default About

About.propTypes = {
  about: PropTypes.string
}