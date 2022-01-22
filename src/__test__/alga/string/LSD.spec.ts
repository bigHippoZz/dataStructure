import { LSD } from "../../../alga/string/LSD";

describe("LSD", () => {
	it("should sort", () => {

		
		let mock = ["B", "C", "A", "E", "D"];
		LSD.sort(mock);
		expect(mock).toEqual(["A", "B", "C", "D", "E"]);

		mock = ["AB", "CC", "AE", "BD", "DB", "EA"];
		LSD.sort(mock);
		expect(mock).toEqual(["AB", "AE", "BD", "CC", "DB", "EA"]);

		mock = [
			"bed",
			"bug",
			"dad",
			"yes",
			"zoo",
			"now",
			"for",
			"tip",
			"ilk",
			"dim",
			"tag",
			"jot",
			"sob",
			"nob",
			"sky",
			"hut",
			"men",
			"egg",
			"few",
			"jay",
			"owl",
			"joy",
			"rap",
			"gig",
			"wee",
			"was",
			"wad",
			"fee",
			"tap",
			"tar",
			"dug",
			"jam",
			"all",
			"bad",
			"yet",
		];
		LSD.sort(mock);
		expect(mock).toEqual([
			"all",
			"bad",
			"bed",
			"bug",
			"dad",
			"dim",
			"dug",
			"egg",
			"fee",
			"few",
			"for",
			"gig",
			"hut",
			"ilk",
			"jam",
			"jay",
			"jot",
			"joy",
			"men",
			"nob",
			"now",
			"owl",
			"rap",
			"sky",
			"sob",
			"tag",
			"tap",
			"tar",
			"tip",
			"wad",
			"was",
			"wee",
			"yes",
			"yet",
			"zoo",
		]);
	});
});
