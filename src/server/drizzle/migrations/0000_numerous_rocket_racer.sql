CREATE TABLE `pokemon` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`number` varchar(10) NOT NULL,
	`types` json,
	CONSTRAINT `pokemon_id` PRIMARY KEY(`id`)
);
