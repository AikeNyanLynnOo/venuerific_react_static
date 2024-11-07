export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-screen">
      <main className="w-full h-auto mx-auto pt-20 pb-10 flex-grow h-screen min-h-screen">
        {children}
      </main>
    </section>
  );
}
