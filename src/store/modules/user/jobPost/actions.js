const actions={
    submitNewJobPost(context, credentials) {
        return new Promise((resolve, reject) => {
            request.post('/api/job-post', {
                title: credentials.title,
                description: credentials.description,
                requirements: credentials.requirements,
                benefits: credentials.benefits,
                location: credentials.location,
                publish_date: credentials.publish_date,
                expiration_date: credentials.expiration_date,
            }).then(response => {
                resolve(response)
            })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    },
};

export default ({
    actions
});

