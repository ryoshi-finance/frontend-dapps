import Web3 from 'web3'
import { InjectedConnector } from '@web3-react/injected-connector'

//chainlist.org
//exclusive support for high-demand blockchain networks

const connector = new InjectedConnector({ supportedChainIds: [
  1,
  
  4,
  
  56, //Binance
  
  137, //Bolygon
  
  42161, //Arbitrum
  
  43114, //Avalancha
  
  1284, //Moonbeam
  
  ]
})

const getLibrary = (provider) => {

  return new Web3(provider);

}

export { connector, getLibrary }
