import React from "react";
import { useQuery, gql } from "@apollo/client";

const useGetRandomQuote = gql`
  {
    randomQuote{
      id
      quote
      author
    }
  }
`;

const useGetQuotes = gql`
  {
    quotes{
      id
      name
      author
    }
  }
`
const backgrounds = [
  'https://cdn2.outdoorphotographer.com/2021/10/autumn-schrock_aurora-moon-488x305.jpg',
  'https://www.birdlife.org/wp-content/uploads/2021/09/Nature_positive_shutterstock_1451653292_1_1.jpg',
  'https://oppla.eu/sites/default/files/styles/front_page_banner/public/images/banner/shutterstock_1699268866_0.jpg?itok=9qIMGutK&c=503f16f5c5c4cc2efea8ac8ca934e068',
  'https://images.csmonitor.com/csm/2020/04/0407%20DDP%20NATURECALM%20topaz%20lake.jpg?alias=standard_900x600'
]

function randomBG() {
  return  backgrounds[Math.floor(Math.random() * backgrounds.length)];
} 

const container =
{
  'background-image': `url(${randomBG()})`,
  'margin': '1.5rem auto',
  'padding': '1.5rem',
  'width' : '40%',
  'fontSize': '2rem',
  'font-family': 'Dancing Script, cursive',
  'borderRadius': '.75rem',
  'color':'white',
  'background-size':'cover',
  'text-shadow': '2px 2px 5px black'
}

const author =
{
  'font-style':'italic',
  'margin-left': '80%',
  'fontSize':'1.25rem',
  'color':'white'
}

export default function App() {
  const { data, loading, error } = useQuery(useGetRandomQuote);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div style={container}>
      <h1>
        {
          data.randomQuote.quote
        }
      </h1>
      <p style={author}>{data.randomQuote.author}</p>
    </div>
  );
}
