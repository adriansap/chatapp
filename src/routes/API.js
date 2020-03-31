export const getDeveloper = new Promise(function (resolve) {
    setTimeout(() => {
        const vendors = [
            {
                vendor: 'pepsi'

            },
            {
                vendor: 'wendys'
            }
        ]

        resolve({
            vendors
        });
    }, 1000);
});