"use server";

import PetsList from "@/app/pets/components/PetsContainer/PetsList";
import pets from "@/data/pets";

const baseUrl = "https://pets-react-query-backend.eapi.joincoded.com";
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchpets() {
  const response = await fetch(`${baseUrl}/pets`);
  const pets = await response.json();
  return pets;
}
async function PetsPage() {
  const pets = await fetchpets();
  return <PetsList pets={pets} />;
}
export async function createPet(formData) {
  const petData = {
    ...Object.fromEntries(formData),
    adopted: 0,
  };
  const response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers,
    body: JSON.stringify(petData),
  });
  const newPet = await response.json();
}
