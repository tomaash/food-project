import styled from "@emotion/styled";
import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { useAtom } from "jotai";
import { Marker, MarkerData } from "./components/Marker";
import { Map } from "./components/Map";
import { mapAtom } from "./state/GlobalAtoms";

export const App = () => {
  const [map] = useAtom(mapAtom);
  const [places, setPlaces] = React.useState<
    google.maps.places.PlaceResult[] | null
  >(null);

  const [query, setQuery] = React.useState("Prague Castle");

  const defaultMarker: MarkerData = {
    lat: 50,
    lng: 14,
    name: "Prague",
  };

  const googleSearch = () => {
    var request: google.maps.places.FindPlaceFromQueryRequest = {
      query,
      fields: ["name", "geometry"],
    };

    if (map) {
      var service = new google.maps.places.PlacesService(map);

      service.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    }
  };

  const firstResult = places && places[0];

  let firstMarker = defaultMarker;

  if (firstResult) {
    firstMarker = {
      lat: firstResult.geometry?.location?.lat()!,
      lng: firstResult.geometry?.location?.lng()!,
      name: firstResult.name!,
    };
  }

  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <FullPage>
        <Flex>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && googleSearch()}
            css={{ width: 200 }}
            value={query}
          />
          <button onClick={googleSearch}>Search</button>
        </Flex>
        <Map center={{ lat: firstMarker.lat, lng: firstMarker.lng }} zoom={11}>
          {places?.map((place) => (
            <Marker
              key={place.name}
              position={{
                lat: place.geometry?.location?.lat()!,
                lng: place.geometry?.location?.lng()!,
              }}
              label={place.name}
            ></Marker>
          ))}
        </Map>
      </FullPage>
    </Wrapper>
  );
};

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;
