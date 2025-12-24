export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center justify-center min-h-screen
      bg-[url('/background-4.svg')]
      bg-cover
      bg-center
      bg-no-repeat
      bg-fixed
      px-4
      
      "
    >
      {children}
    </div>
  );
}
