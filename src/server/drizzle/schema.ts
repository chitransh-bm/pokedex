import {
  foreignKey,
  int,
  json,
  mysqlTable,
  PrimaryKey,
  primaryKey,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";

export const PokemonTable = mysqlTable("pokemon", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  number: varchar("number", { length: 10 }).notNull(),
  types : json('types').$type<string[]>(),
});

