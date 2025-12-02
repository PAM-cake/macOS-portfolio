import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { gallery } from "#constants/Index";

const Gallery = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5 bg-white overflow-y-auto">
        {(!gallery || gallery.length === 0) ? (
          <div className="flex items-center justify-center h-40 text-gray-500">No pictures in gallery</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {gallery.map(({ id, img }) => (
              <div key={id} className="rounded overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`Gallery ${id}`}
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => window.open(img, "_blank")}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
