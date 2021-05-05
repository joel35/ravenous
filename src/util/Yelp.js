const apiKey = process.env.REACT_APP_YELP_API_KEY

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: {Authorization: `Bearer ${apiKey}`}}
        )
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse.businesses && jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address1: business.location.address1,
                    address2: business.location.address2,
                    address3: business.location.address3,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }));
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export default Yelp;