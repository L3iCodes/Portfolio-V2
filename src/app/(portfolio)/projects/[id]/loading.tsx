export default function Loading() {
  return (
    <div className="min-h-screen flex gap-10 p-5 lg:p-10 relative animate-pulse">
      {/* Fake Background */}
      <div className="absolute inset-0 z-0 bg-base-200/50" />

      {/* Main Content Skeleton */}
      <div className="flex-1 space-y-5 z-10">
        {/* Title & Subtitle */}
        <div className="space-y-2">
          <div className="h-10 w-2/3 bg-base-300 rounded"></div>
          <div className="h-5 w-1/3 bg-base-300 rounded"></div>
        </div>

        {/* Cover Image Skeleton */}
        <div className="w-full aspect-video bg-base-300 rounded-sm"></div>

        {/* Sections Skeleton */}
        <div className="mt-15 space-y-10">
          <div className="h-32 w-full bg-base-300 rounded-sm"></div>
          <div className="h-32 w-full bg-base-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}