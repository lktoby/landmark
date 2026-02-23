import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <Image
                src="https://placehold.co/200"
                alt="weather image"
                width={200}
                height={200}
                unoptimized
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title">0°C at 00:00 in Hong Kong</h1>
              <div className="card-actions justify-end">
                <p>insert weather description. your mom says you should wear a jacket.</p>
                {/* maybe put some kinda ai here to generate weather advice from an asian mom (?) */}
                <button className="btn btn-primary">more</button>
              </div>
            </div>
          </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bookmarks
          </h1>
          {/* to be worked on later... */}
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/* to be worked on later... */}
        </div>
      </main>
    </div>
  );
}
