import { isObject, isString } from "lodash";

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

export function stopWatchWrapper(
	options: { message: string; async: false },
	execution: () => void,
): void;
export function stopWatchWrapper(
	options: { message: string; async: true },
	execution: () => Promise<unknown>,
): void;
export function stopWatchWrapper(options: string, execution: () => void): void;
export function stopWatchWrapper(
	options: { message: string; async: boolean } | string,
	execution: () => void | Promise<unknown>,
): void {
	let message: string, async: boolean;
	if (isString(options)) {
		message = options;
	} else if (isObject(options)) {
		({ message, async = false } = options);
	} else {
		throw new Error("incoming parameter error : " + options);
	}
	const start = performance.now();
	if (async) {
		(execution() as Promise<unknown>).then(() => {
			console.log(`[stopWatch] ${message} -> ${performance.now() - start}ms`);
		});
	} else {
		execution();
		console.log(`[stopWatch] ${message} -> ${performance.now() - start}ms`);
	}
}
