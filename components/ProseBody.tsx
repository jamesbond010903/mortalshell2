import type { Shell } from "@/lib/data";

export function ProseBody({ shell }: { shell: Shell }) {
  return (
    <div className="prose-invert mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {shell.howToUnlock && (
        <>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            How to unlock {shell.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {shell.howToUnlock}
          </p>
          {shell.unlockSteps && (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-lg leading-relaxed text-muted">
              {shell.unlockSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
        </>
      )}

      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
        How to play {shell.name}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">{shell.start}</p>

      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
        What to watch for
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">{shell.watch}</p>

      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
        About this guide
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {shell.name} is one of eight playable Shells in Mortal Shell II. This
        summary is drawn from {shell.source.toLowerCase()}. Unlock locations and
        ability details are being re-verified against the in-game world after
        launch, so treat specifics as guidance rather than final data.
      </p>
    </div>
  );
}
