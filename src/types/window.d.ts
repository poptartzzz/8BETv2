import { EthereumProvider } from './ethereum'

declare global {
  interface Window {
    ethereum: EthereumProvider;
  }
}

export {} 