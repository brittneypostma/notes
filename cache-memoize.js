const addTo80 = n => {
	console.log('long time');
	return n + 80;
};

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {};

const memoizedAddTo80 = n => {
	if (n in cache) {
		return cache[n];
	} else {
		console.log('long time');
		cache[n] = n + 80;
		return cache[n];
	}
};

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));

// the first time it runs it adds it to cache and does not have to recalulate that value again, so it takes less time //
