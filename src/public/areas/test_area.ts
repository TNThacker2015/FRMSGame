import { speak } from "../index";
/** @type {TileResolvable} */
export const area: TileResolvable[][] = [
	[1, 2, 3, 2, 1, 2, 2, 2, 2],
	[2, 3, 1, 2, 1, 1, 1, 1, 3],
	[3, 3, 3, 3, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, [3, 0, { start: 0 }], 3, 3, 3, 3],
	[3, 3, 3, 3, [3, 3], 3, 3, 3, 3],
	[3, 3, 3, [3, 4], [3, 2], [3, 5], 3, 3, 3],
	[3, 3, 3, 3, 3, 3, 3, 3, 3],
	[1, 2, 2, 2, 2, 1, 1, 1, 3],
	[1, 1, 1, 1, 2, 1, 2, 1, 2],
];
speak("a a a a a a a sw f g yu u re w wf rffff dddd sss rtygfd wetyujh erty");
