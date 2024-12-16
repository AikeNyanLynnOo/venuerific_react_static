export default function WhiteLabel({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col">
        <div className="w-full">{children}</div>
      </section>
    );
  }
  