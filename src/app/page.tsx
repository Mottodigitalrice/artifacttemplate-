import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {APP_NAME}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {APP_DESCRIPTION}
        </p>
      </div>
    </div>
  );
}
