import axios from "axios";

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: '31903531-47471845ef932624bfd3a089f',
  },
});

export const fetchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
      per_page: 12,
    },
  });
  return data;
};

export const fetchAllImg = async () => {
  const { data } = await instance.get('/');
  return data;
};