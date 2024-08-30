import { PokemonTable } from './../drizzle/schema';
import { z } from "zod";
import { procedure, router } from "../trpc";
import { db } from "../drizzle/drizzle";

export const appRouter = router({
  getPokemons: procedure.query(async (opts) => {
      const items = await db.select().from(PokemonTable);
      return items
    }),
});

export type AppRouter = typeof appRouter;
