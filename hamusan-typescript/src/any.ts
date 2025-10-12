import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  type Data = {
    id: number;
    title: string;
    description: string;
  };
  let data: Article[] = response.data;
  data = [
    {
      id: 1,
      title: 'sssss',
      description: 'faonfoa',
    },
  ];
  console.log(response);
});
