import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

const StyledDiv = styled.div`
  background-color: aquamarine;
  min-height: 300px;
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
`;

const GET_ALBUMS_QUERY = gql`
  query GetAlbums {
    albums(options: { paginate: { page: 0, limit: 15 } }) {
      data {
        id
        title
      }
    }
  }
`;
export const App = () => {
  const { data, loading } = useQuery(GET_ALBUMS_QUERY);
  if (loading) {
    return <div> Waiting for magic to happen ....</div>;
  }
  const result = data.albums.data.map((album) => (
    <li>{`#${album.id} -> ${album.title} `}</li>
  ));
  return (
    <StyledDiv>
      <StyledUnorderedList>{result}</StyledUnorderedList>
    </StyledDiv>
  );
};
