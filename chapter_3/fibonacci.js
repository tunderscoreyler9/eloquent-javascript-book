function fibonacci() {
    let fib = [0, 1];
    let n = Number(prompt("Enter a # for the desired Nth Fibonacci.."))

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    };

    return `F_sub_${n} = ${fib[n]}`;
};
