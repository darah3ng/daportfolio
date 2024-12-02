import LifeIcon from '../assets/images/3d-icon-life.png';
import BankInterestHubIcon from '../assets/images/3d-icon-bank-interest-hub-2.png';
import CryptoCoinIcon from '../assets/images/3d-icon-crypto-coin.png';
import NftIcon from '../assets/images/3d-icon-nft.png';
import WalletIcon from '../assets/images/3d-icon-wallet.png';

const data = [
  {
    name: 'Life',
    description: 'An interesting way to visualize our a person lifespan',
    website: 'https://life-rust-three.vercel.app/',
    link: 'https://github.com/darah3ng/life',
    techstack: ['typescript'],
    image: LifeIcon,
  },
  {
    name: 'Bank Interest Hub',
    description: 'Track your interest rate from different banks',
    website: 'https://bank-interest-hub.vercel.app/',
    link: 'https://github.com/darah3ng/bank-interest-hub',
    techstack: ['typescript'],
    image: BankInterestHubIcon,
  },
  {
    name: 'SBToken',
    description: 'A swap platform where you can swap your ETH for SBT.',
    website: 'https://smooth-brain-token.vercel.app/',
    link: 'https://github.com/darah3ng/smooth-brain-token',
    techstack: ['erc-20', 'swap', 'blockchain'],
    image: WalletIcon,
  },
  {
    name: 'My Hero NFTs',
    description: 'Mint a free super hero NFT (on-chain). Go mint your NFT now.',
    website: 'https://hero-nfts.vercel.app/',
    link: 'https://github.com/darah3ng/hero-nfts',
    techstack: ['nft', 'app', 'blockchain'],
    image: NftIcon,
  },
  {
    name: 'Crypto Wallet',
    description: 'A web application for keeping track of your BSC wallet.',
    website: 'https://cryptowallet-eight.vercel.app/',
    link: 'https://github.com/darah3ng/cryptowallet',
    techstack: ['app', 'blockchain'],
    image: CryptoCoinIcon,
  },
];

export default data;
