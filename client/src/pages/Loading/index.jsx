const Loading = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-background min-h-[60vh]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
