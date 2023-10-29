import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGames } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const games = await getGames();
  return json({ games });
};

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold">German Football Bundesliga Data</h1>
      <div className="bg-orange-400">
        {games.map((game: any, i: any) => {
          return (
            <div className="bg-orange-500 my-2" key={i}>
              {JSON.stringify(game, undefined, 2)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
