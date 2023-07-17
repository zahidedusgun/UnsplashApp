import axios from "axios";

const searchImages = async(e) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization:'Client-ID uZjqR21r8cI4AGVc_L89hkmlcnQKjGy04a5SkET2JAA'
      },
      params:{
        query:e
      }})
      return response.data.results;
  };
  export default searchImages;