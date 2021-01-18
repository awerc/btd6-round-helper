module.exports = {
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: false,
    printWidth: 120,
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            options: {
                parser: 'babel-ts',
            },
        },
    ],
};
