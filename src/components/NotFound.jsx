import { Link } from "react-router";
// 
export default function NotFound() {
  //
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-6xl font-bold">404</p>
        <h1 class="mt-4 text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-lg font-medium sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to={"/"} class="rounded-xl bg-blue-500 px-3 py-2  text-white font-medium">
            Go back home
          </Link>
          <a href="#" class="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
