import { WindowControls } from "#components";
import { locations } from "#constants/Index";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Trash2 } from "lucide-react";

const Trash = () => {
  const { openWindow } = useWindowStore();
  const trashLocation = locations.trash;

  const openItem = (item) => {
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <Trash2 className="icon" />
        <h2>{trashLocation.name}</h2>
      </div>

      <div className="bg-white flex h-full flex-col p-5">
        {trashLocation?.children && trashLocation.children.length > 0 ? (
          <ul className="space-y-2">
            {trashLocation.children.map((item) => (
              <li
                key={item.id}
                onClick={() => openItem(item)}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <p className="text-sm font-medium truncate">{item.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Trash is empty</p>
          </div>
        )}
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;
