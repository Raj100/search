import { NextResponse } from 'next/server';
import axios from 'axios';
export const dynamic = 'force-dynamic'; 

export async function GET(req: Request) {
  const instance = axios.create({
        baseURL: 'https://www.weatherunion.com',
        timeout: 1000,
        headers: {'x-zomato-api-key': 'a606243db0db3805ec8273cc6dc2c797'}
      });
      const query = new URL(req.url);
      console.log(query);
      const response = await instance.get(`/gw/weather/external/v0/get_locality_weather_data?locality_id=${query}`);
      console.log(response.data);
      return NextResponse.json(response.data);
}
