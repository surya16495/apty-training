function compare() {
    const arr = Array.from({ length: 100000 }, (_, i) => i);
    const results = [];

    const measureFor = () => {
        const start = performance.now();
        for (let i = 0; i < arr.length; i++) {
            i;
        }
        const end = performance.now();
        return end - start;
    };

    const measureForOf = () => {
        const start = performance.now();
        for (const value of arr) {
            value
        }
        const end = performance.now();
        return end - start;
    };

    const measureForEach = () => {
        const start = performance.now();
        arr.forEach((value) => {
            value;
        });
        const end = performance.now();
        return end - start;
    };

    const timeFor = measureFor();
    const timeForOf = measureForOf();
    const timeForEach = measureForEach();

    results.push(`For Loop: ${timeFor.toFixed(2)} ms`);
    results.push(`For...Of Loop: ${timeForOf.toFixed(2)} ms`);
    results.push(`ForEach Loop: ${timeForEach.toFixed(2)} ms`);

    document.getElementById("results").innerText = results.join("\n");
}