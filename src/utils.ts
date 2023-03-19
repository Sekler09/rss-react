export type cardType = {
  img: string;
  rating: number;
  description: string;
  name: string;
  price: number;
  likes: number;
  dislikes: number;
};

export function generateCards(n = 10) {
  const goods: cardType[] = [];
  for (let i = 0; i < n; i++) {
    goods.push(generateCard());
  }
  return goods;
}

const names = [
  'Etherium',
  'Solana',
  'USDT',
  'XRP',
  'Bitcoin',
  'Matic',
  'Polkadot',
  'Tron',
  'Avalanche',
  'Litecoin',
];

const imgUrls = [
  'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
];

const descriptions = [
  'a decentralized cryptocurrency',
  'a decentralized open-source blockchain system',
  'a highly functional open source project',
  'a stablecoin (stable-value cryptocurrency)',
  'an open-source, permissionless and decentralized technology',
  'is the first well-structured, easy-to-use platform',
  'an open-source sharded multichain protocol',
  'a decentralized blockchain-based operating system',
  'a layer one blockchain',
  'a cryptocurrency that was designed to provide fast',
];

function generateCard(): cardType {
  // const id = Math.random().toString(36).substring(2);
  const name = names[Math.ceil(Math.random() * 9)];
  const description = descriptions[Math.ceil(Math.random() * 9)];
  const price = Math.ceil(Math.random() * 9989 + 10);
  const rating = Math.ceil(Math.random() * 99 + 1);
  const img = imgUrls[Math.ceil(Math.random() * 9)];
  const likes = Math.ceil(Math.random() * 990 + 1);
  const dislikes = Math.ceil(Math.random() * 707 + 1);
  return { img, rating, description, name, price, likes, dislikes };
}
