function Companies() {
  return (
    <div className="w-full space-y-8  lg:px-0 mx-auto overflow-hiden relative py-10">
      <h1 className="text-[1.125rem] leading-[175%] fonmedium text-center">
        Trusted by exceptional companies around the world
      </h1>
      <div className="flex items-center justify-center gap-4 overflow-hidden w-full lg:w-[80%] relative mx-auto">
        <div className="animate-loop-scroll flex items-center gap-4  grayscale space-x-8">
          <img src="/c1.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c2.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c3.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c5.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/logo2.png" alt="logo" className="max-w-none max-h-8" />
        </div>
        <div
          className="animate-loop-scroll flex items-center gap-4 grayscale space-x-8"
          aria-hidden="true"
        >
          <img src="/c1.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c2.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c3.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/c5.png" alt="logo" className="max-w-none max-h-[60px]" />

          <img src="/logo2.png" alt="logo" className="max-w-none max-h-8" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
