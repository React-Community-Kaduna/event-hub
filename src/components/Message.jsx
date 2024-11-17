import { Link } from "react-router-dom";
import { appRoutes } from "../config/routeMgt/RoutePaths";

function Message() {
  return (
    <div className="my-24">
    <div className="mx-auto w-4/5 md:w-1/2 bg-white flex flex-col justify-center items-center h-20 text-center gap-4">
  <h2 className="font-medium">No Events Available</h2>
<p>It looks like there are no events at the moment.</p>
<p>
Be the first to create an event and make it live! Share your events with others in our community.
</p>
<Link className="text-white rounded-md bg-[#3557c2] py-4 w-full" to={appRoutes.create_Event}>create event</Link>
</div>
    </div>
  );
}

export default Message;