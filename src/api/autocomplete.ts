import { NextApiRequest, NextApiResponse } from 'next';

const localities = [
  "Sarita Vihar",
  "Faridabad Sector 41-50",
  "New Friends Colony",
  "Sector 26 (Noida)",
  // Add more from the provided list...
];

const autocomplete = (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  if (typeof q !== 'string') {
    return res.status(400).json([]);
  }

  const filtered = localities.filter((locality) =>
    locality.toLowerCase().includes(q.toLowerCase())
  );

  res.status(200).json(filtered);
};
export default autocomplete;