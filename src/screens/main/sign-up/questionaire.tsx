import { useRouter } from 'next/router';
import React from 'react';

export default function Questionaire() {
  const { query } = useRouter();
  console.log(query);
  return <div>Questionaire</div>;
}
