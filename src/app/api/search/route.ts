import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  try{
  const instance = axios.create({
        baseURL: 'https://www.weatherunion.com',
        timeout: 1000,
        headers: {'x-zomato-api-key': 'a606243db0db3805ec8273cc6dc2c797'}
      });
      const query = new URL(req.url);
      const locality_id = query.searchParams.get('q');
      const response = await instance.get(`/gw/weather/external/v0/get_locality_weather_data?locality_id=${locality_id}`);
      console.log(response.data);
      return NextResponse.json(response.data);
    }
    catch (error){
      console.error(error);
    }
    return NextResponse.json({error: 'An error occurred'});
}
