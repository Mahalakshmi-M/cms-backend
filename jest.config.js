module.exports = {
    reporters: [
        'default',
        [
            'jest-junit',
            {
                suiteName: 'Jest JUnit Unit Tests',
                outputDirectory: 'tests/outputs',
                suiteNameTemplate: '{filename}',
                classNameTemplate: '{filename}: {classname}',
                titleTemplate: '{title}'
            },
        ],
    ]
}
