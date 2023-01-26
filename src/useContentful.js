const contentful = require('contentful')

const useContentful = () => {
    const client = contentful.createClient({
        space: "fafxp6w9fe46",
        accessToken: "O8l1Azm1__5tT9ywvM-31K0KEmhroanpgfzg7W-cYI0",
    });
    const getData = async () => {
        try {
            const data = await client.getEntries();
            return data
        } catch (error) {
            console.log("Error fetching starter video")
        }
    }
    return { getData }
}

export default useContentful