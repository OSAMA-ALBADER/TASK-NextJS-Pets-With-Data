// import pets from "@/data/pets"; deleting this import

import PetsContainer from "./components/PetsContainer";

// adding await fetch and json
async function PetsPage() {
  const response = await fetch(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  const pets = await response.json();
  return <PetsContainer pets={pets} />;
}

export default PetsPage;

// thsi page is a server component
