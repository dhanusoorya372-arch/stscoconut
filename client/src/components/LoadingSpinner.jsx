const LoadingSpinner = ({ label = 'Loading...' }) => (
  <div className="flex items-center justify-center gap-3 py-10 text-coconut-green-dark">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-coconut-green border-t-transparent" />
    <span>{label}</span>
  </div>
);

export default LoadingSpinner;
