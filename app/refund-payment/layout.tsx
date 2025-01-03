export default function RefundPayment({
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
  