import Web3 from 'web3';

// Check if MetaMask is installed
if (window.ethereum) {
  const web3 = new Web3(window.ethereum);

  // Connect to MetaMask
  document.getElementById('connectButton').addEventListener('click', async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Wallet connected');
    } catch (error) {
      console.error('User denied account access');
    }
  });
} else {
  console.log('Please install MetaMask!');
}
