import React from "react";
import { useState } from "react";
import BreweriesListItem from "./BreweriesListItem";

type brewery = {
    id: number
    brewery: string
    
}

export default function BreweriesList({ breweries }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <article>
      <ul className="breweries-list">
        {breweries.map((brewery) => (
          <BreweriesListItem
            key={brewery.id}
            brewery={brewery}
            setOpenForm={setOpenForm}
            isFormOpen={brewery.id === openForm}
          />
        ))}
      </ul>
    </article>
  );
}
