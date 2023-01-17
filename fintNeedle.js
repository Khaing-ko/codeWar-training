function findNeedle(haystack) {
    return (
        console.log(`"found the needle at position ${haystack.indexOf('needle')}"`)
    );
}
haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
findNeedle(haystack);