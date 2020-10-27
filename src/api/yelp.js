import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3-Zg09JQ9i_g-B0aiLtU4maIUVYmaJ38JnDA0UlRCGJIY2lb7gDFEHw4C5cDNIJHssm4dH8aQdM5XzsRpmIrxrvZ_-zvXHOcWi35PwM6CK_wlVCkJ6Zrv2JxYdqXX3Yx'
    }
});

