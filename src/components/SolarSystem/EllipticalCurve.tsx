const EllipticalCurve = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center z-0 ${className}`}
      >
        <div
          className={`h-[60vh] w-[135vh] rounded-[50%] border absolute border-gray-800`}
        />
        <div
          className={`h-[90vh] w-[180vh] rounded-[50%] border absolute border-gray-800`}
        />
        <div
          className={`h-[135vh] w-[270vh] rounded-[50%] border absolute border-gray-800`}
        />
      </div>
    </>
  );
};

export default EllipticalCurve;
