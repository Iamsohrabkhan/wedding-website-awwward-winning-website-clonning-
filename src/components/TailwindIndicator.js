const ResponsiveIndicators = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-[90%] right-5 z-50 bg-pink-500 text-white shadow-md px-2 rounded-bl font-mono">
        <span className="sm:hidden">default</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline">xl</span>
      </div>
    );
  } else {
    // Return null or an empty component if you don't want to render anything in production
    return null;
  }
};

export default ResponsiveIndicators;
