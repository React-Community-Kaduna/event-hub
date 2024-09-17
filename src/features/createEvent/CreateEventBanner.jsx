import { AppButton } from "../../components/button/AppButton";
import useEvent from "../../hooks/useEvent";
import PropTypes from "prop-types";
import { useView } from "../../hooks/useView";

export default function CreateEventBanner({ navigate, navigateBack }) {
  const {
    banner: { error },
    imageUrl: { error1 },
    dispatchFn,
  } = useEvent();

  const onSubmit = function () {
    navigate();
  };
  //effect to makes component view start from the top of the page
  useView();

  return (
    <form className="capitalize w-full lg:px-16 " onSubmit={onSubmit}>
      <h2 className="mb-6 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
        upload image
      </h2>
      <div className="file:bg-[#EEEEEE] file:font-openSans border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg  p-2.5 placeholder-[#828282] bg-white outline-none w-2/3 lg:mx-0 mx-auto min-w-fit mb-4">
        <input
          className="text-start text-sm border cursor-pointer focus:outline-none border-none file:text-[#1D1D1D] file:font-medium"
          id="file_input"
          type="file"
          placeholder="select an image"
          required
          onChange={(e) => {
            const url = URL.createObjectURL(e.target.files[0]);
            console.log("url", e.target.files[0]);
            dispatchFn({ type: "event/banner", image: url });
            dispatchFn({ type: "event/imageUrl", imageUrl: e.target.files[0] });
          }}
        />
      </div>
      {error ||
        (error1 && <p className="text-red-600 ">A banner is required</p>)}
      <div className="text-[#5A5A5A] font-normal">
        <p>
          Feature Image must be at least 1170 pixels wide by 504 pixels high.
        </p>
        <p>Valid file formats: JPG, GIF, PNG.</p>
      </div>
      <div className="flex justify-end gap-3 items-center">
        <AppButton
          variant="text"
          label="Go back to Edit Event"
          type="nav"
          containerStyle="capitalize"
          handleClick={navigateBack}
        />
        <AppButton
          type="submit"
          label="save & continue"
          containerStyle="capitalize"
        />
      </div>
    </form>
  );
}

CreateEventBanner.propTypes = {
  navigate: PropTypes.func,
  navigateBack: PropTypes.func,
};
