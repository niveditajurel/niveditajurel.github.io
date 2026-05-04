import BackgroundComponents from "@/components/ui/background-components";

export function BackgroundComponentsDemo() {
  return (
    <BackgroundComponents variant="concentric-squares">
      <section className="grid min-h-screen place-items-center px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
            Concentric Squares Background
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A reusable light-pattern background for landing sections, hero compositions, and editorial layouts.
          </p>
        </div>
      </section>
    </BackgroundComponents>
  );
}
