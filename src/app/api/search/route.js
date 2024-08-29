import { NextResponse } from 'next/server';
import axios from 'axios';

const suggestions = [
  "Sarita Vihar, Delhi NCR",
  "Faridabad Sector 41-50, Delhi NCR",
  "New Friends Colony, Delhi NCR",
  "Sector 26 (Noida), Delhi NCR",
  "New Industrial Town, Delhi NCR",
  "Tilak Nagar, Delhi NCR",
  "Sector 10, Gurgaon, Delhi NCR",
  "Ashok Vihar, Delhi NCR",
  "Kalkaji, Delhi NCR",
  "Sector 53, Delhi NCR",
  "Vasundhara, Delhi NCR",
  "Rajinder Nagar, Delhi NCR",
  "Safdarjung Enclave, Delhi NCR",
  "Connaught Place, Delhi NCR",
  "Greater Noida, Delhi NCR",
  "Indirapuram, Delhi NCR",
  "Saket, Delhi NCR",
  "Sector 18 (Noida), Delhi NCR",
  "Sector 62 (Noida), Delhi NCR",
  "Rohini, Delhi NCR",
  "Malviya Nagar, Delhi NCR",
  "Mayur Vihar Phase II, Delhi NCR",
  "Hauz Khas, Delhi NCR",
  "Green Park, Delhi NCR",
  "Koramangala, Bengaluru",
  "JP Nagar, Bengaluru",
  "Electronic City, Bengaluru",
  "Whitefield, Bengaluru",
  "MG Road, Bengaluru",
  "Bannerghatta Road, Bengaluru",
  "Aundh (Pune)",
  "Kalyani Nagar (Pune)",
  "Kothrud (Pune)",
  "Koregaon Park (Pune)",
  "Manas Lake, Pune",
  "Hinjewadi - Phase 1, Pune",
  "Hinjewadi - Phase 2, Pune",
  "Madhapur, Hyderabad",
  "Gachibowli, Hyderabad",
  "Banjara Hills, Hyderabad",
  "Begumpet, Hyderabad",
  "Charminar, Hyderabad",
  "Kondapur, Hyderabad",
  "Anna Nagar, Chennai",
  "T Nagar, Chennai",
  "Tambaram, Chennai",
  "Adyar, Chennai",
  "Kilpauk, Chennai",
  "Velachery, Chennai",
  "Kharadi, Pune"
];

export async function GET(req,res) {
  try{
    const instance = axios.create({
        baseURL: 'https://www.weatherunion.com',
        timeout: 1000,
        headers: {'x-zomato-api-key': 'a606243db0db3805ec8273cc6dc2c797'}
      });
      const { searchParams } = new URL(req.url);
      const query = searchParams.get('q') || '';
      const response = await instance.get(`/gw/weather/external/v0/get_locality_weather_data?locality_id=${query}`);
      console.log(response.data);
      return NextResponse.json(response.data);
    
    } catch (error) {
      console.error(error);
    }

  return NextResponse.json();
}
