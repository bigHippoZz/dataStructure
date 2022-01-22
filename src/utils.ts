export type ICompareFunction<T> = (a: T, b: T) => number;

export enum Compare {
	LESS_THAN = -1,
	BIGGER_THAN = 1,
	EQUALS = 0,
}

export function lessComparisonFunction<T>(
	a: T,
	b: T,
	comparison: ICompareFunction<T> = defaultCompare,
) {
	return comparison(a, b) === Compare.EQUALS || comparison(a, b) === Compare.LESS_THAN;
}

export function biggerComparisonFunction<T>(
	a: T,
	b: T,
	comparison: ICompareFunction<T> = defaultCompare,
) {
	return comparison(a, b) === Compare.EQUALS || comparison(a, b) === Compare.BIGGER_THAN;
}

export function defaultCompare<T>(a: T, b: T): Compare {
	if (a === b) return Compare.EQUALS;
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
