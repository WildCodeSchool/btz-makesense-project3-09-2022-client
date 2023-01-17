export default function EditorSkeletton() {
  return (
    <div
      role="status"
      className=" w-full p-2 flex f-full space-x-5 justify-between items-center h-[400px]  rounded  animate-pulse  "
    >
      <div className="flex h-full items-center grow w-full justify-center  mb-4 bg-gray-200 rounded dark:bg-gray-700" />
      <div className="w-1/2 h-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
        <div className="flex items-center mt-4 space-x-3">
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
