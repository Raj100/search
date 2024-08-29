import { NextResponse } from 'next/server';

const suggestions = [
  { name: "Sarita Vihar, Delhi NCR", id: "ZWL005764" },
  { name: "Faridabad Sector 41-50, Delhi NCR", id: "ZWL008752" },
  { name: "New Friends Colony, Delhi NCR", id: "ZWL005996" },
  { name: "Sector 26 (Noida), Delhi NCR", id: "ZWL005243" },
  { name: "New Industrial Town, Delhi NCR", id: "ZWL009032" },
  { name: "Tilak Nagar, Delhi NCR", id: "ZWL005428" },
  { name: "Sector 10, Gurgaon, Delhi NCR", id: "ZWL001073" },
  { name: "Ashok Vihar, Delhi, Delhi NCR", id: "ZWL001319" },
  { name: "Kalkaji, Delhi NCR", id: "ZWL004800" },
  { name: "Sector 53, Delhi NCR", id: "ZWL003118" },
  { name: "Sector 49, Delhi NCR", id: "ZWL002091" },
  { name: "Vasundhara, Delhi NCR", id: "ZWL002662" },
  { name: "Rajinder Nagar, Delhi NCR", id: "ZWL001404" },
  { name: "Safdarjung Enclave, Delhi NCR", id: "ZWL008963" },
  { name: "Connaught Place, Delhi NCR", id: "ZWL006538" },
  { name: "Sector 66, Delhi NCR", id: "ZWL003075" },
  { name: "Sector 57, Delhi NCR", id: "ZWL003721" },
  { name: "Moti Bagh, Delhi, Delhi NCR", id: "ZWL006396" },
  { name: "Patel Nagar, Delhi, Delhi NCR", id: "ZWL004535" },
  { name: "Greater Noida, Delhi NCR", id: "ZWL008554" },
  { name: "Karkardooma, Delhi, Delhi NCR", id: "ZWL004533" },
  { name: "Tigaon, Delhi NCR", id: "ZWL002179" },
  { name: "Sector 50 (Noida), Delhi NCR", id: "ZWL007487" },
  { name: "Vasant Kunj, Delhi, Delhi NCR", id: "ZWL007120" },
  { name: "Dwarka, Delhi, Delhi NCR", id: "ZWL007486" },
  { name: "Sector 15, Delhi NCR", id: "ZWL006287" },
  { name: "Mayur Vihar Phase III, Delhi NCR", id: "ZWL002146" },
  { name: "Crossing Republik, Delhi NCR", id: "ZWL008405" },
  { name: "Sector 28, Delhi NCR", id: "ZWL004455" },
  { name: "Palam Vihar, Gurgaon, Delhi NCR", id: "ZWL005087" },
  { name: "Sector 63 (Noida), Delhi NCR", id: "ZWL009648" },
  { name: "Raj Nagar, Ghaziabad, Delhi NCR", id: "ZWL008317" },
  { name: "Sector 128, Delhi NCR", id: "ZWL005878" },
  { name: "Sector 56, Gurgaon, Delhi NCR", id: "ZWL003241" },
  { name: "Indirapuram, Delhi NCR", id: "ZWL007224" },
  { name: "Malviya Nagar, Delhi NCR", id: "ZWL009834" },
  { name: "Sector 43, Gurgaon, Delhi NCR", id: "ZWL007284" },
  { name: "Sector 120 (Noida), Delhi NCR", id: "ZWL006738" },
  { name: "Saket, Delhi NCR", id: "ZWL007329" },
  { name: "Sector 18 (Noida), Delhi NCR", id: "ZWL001752" },
  { name: "Naraina, Delhi NCR", id: "ZWL007594" },
  { name: "Patparganj, Delhi NCR", id: "ZWL006116" },
  { name: "Ghitorni, Delhi NCR", id: "ZWL009925" },
  { name: "Faridabad Sector 1-11, Delhi NCR", id: "ZWL009335" },
  { name: "Sector 24, Delhi NCR", id: "ZWL009638" },
  { name: "Rajouri Garden, Delhi NCR", id: "ZWL005670" },
  { name: "Vishnu Garden, Delhi NCR", id: "ZWL003757" },
  { name: "Sector 48, Gurgaon, Delhi NCR", id: "ZWL003610" },
  { name: "Kirti Nagar, Delhi NCR", id: "ZWL005971" },
  { name: "Faridabad Sector 81-89, Delhi NCR", id: "ZWL003626" }
];



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(query)
  );

  return NextResponse.json(filteredSuggestions);
}
