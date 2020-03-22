// Y combinator
console.log(
    (
        f => n => n < 2 ? 1 : n * f(f)(n - 1)
    )(
        f => n => n < 2 ? 1 : n * f(f)(n - 1)
    )(
        5
    )
);
