type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      {children}
    </div>
  );
}