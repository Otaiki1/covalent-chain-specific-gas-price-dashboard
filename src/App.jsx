import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Select,
  SelectItem,
  TextInput,
  Title,
  Grid,
  Col,
  Card,
  Text,
  Metric,
  Button,
  Callout,
} from "@tremor/react";

function App() {
  const [apiKey, setApiKey] = useState("");
  const [chain, setChain] = useState("eth-mainnet");
  const [event, setEvent] = useState("ERC20 token transfers");
  const [loading, setloading] = useState(true);
  const [gasPrice, setGasPrice] = useState({ one: "", three: "", five: "" });

  const valuesArray = [
    "arbitrum-goerli",
    "arbitrum-mainnet",
    "arbitrum-nova-mainnet",
    "arbitrum-sepolia",
    "aurora-mainnet",
    "avalanche-beam-mainnet",
    "avalanche-dexalot-mainnet",
    "avalanche-dos",
    "avalanche-loco-legends-mainnet",
    "avalanche-mainnet",
    "avalanche-mainnet",
    "avalanche-mainnet",
    "avalanche-meld-mainnet",
    "avalanche-numbers",
    "avalanche-shrapnel-mainnet",
    "avalanche-step-network",
    "avalanche-uptn",
    "avalanche-xanachain",
    "avalanche-xplus",
    "axie-mainnet",
    "base-mainnet",
    "bnb-antimatter-mainnet",
    "bnb-fncy-mainnet",
    "bnb-meta-apes-mainnet",
    "bnb-opbnb-mainnet",
    "boba-bnb-mainnet",
    "boba-goerli",
    "boba-mainnet",
    "bsc-mainnet",
    "btc-mainnet",
    "canto-mainnet",
    "covalent-internal-network-v1",
    "cronos-mainnet",
    "defi-kingdoms-mainnet",
    "emerald-paratime-mainnet",
    "eth-goerli",
    "eth-holesky",
    "eth-mainnet",
    "eth-sepolia",
    "evmos-mainnet",
    "fantom-mainnet",
    "flarenetworks-canary-mainnet",
    "flarenetworks-flare-mainnet",
    "gather-mainnet",
    "gnosis-mainnet",
    "harmony-mainnet",
    "horizen-eon-mainnet",
    "kcc-mainnet",
    "linea-mainnet",
    "loot-mainnet",
    "lumoz-decibling",
    "lumoz-public-zksync-v2",
    "lumoz-stark-sport",
    "mantle-mainnet",
    "matic-mainnet",
    "matic-mumbai",
    "meter-mainnet",
    "metis-mainnet",
    "metis-stardust",
    "milkomeda-a1-mainnet",
    "milkomeda-c1-devnet",
    "milkomeda-c1-mainnet",
    "moonbeam-mainnet",
    "moonbeam-moonbase-alpha",
    "moonbeam-moonriver",
    "oasis-sapphire-mainnet",
    "oasys-mainnet",
    "opside-cb-zkevm",
    "opside-debox",
    "opside-era7",
    "opside-jackbot",
    "opside-law-chain",
    "opside-public-zkevm",
    "opside-relation",
    "opside-soquest-zkevm",
    "opside-vip3",
    "opside-xthrill",
    "opside-zkmeta",
    "optimism-goerli",
    "optimism-mainnet",
    "optimism-sepolia",
    "palm-mainnet",
    "pgn-mainnet",
    "polygon-zkevm-mainnet",
    "rollux-mainnet",
    "rsk-mainnet",
    "scroll-mainnet",
    "solana-mainnet",
    "sx-mainnet",
    "telos-mainnet",
    "tomochain-mainnet",
    "ultron-mainnet",
    "zksync-mainnet",
    "zora-mainnet",
  ];

  const eventTypes = [
    "ERC20 token transfers",
    "Native token transfers",
    "Uniswap V3 swap events",
  ];

  return (
    <>
      <div className="flex space-x-8">
        <div className="w-full">
          <p className="my-2 text-xl font-bold">Your Covalent🔮 API Key🗝</p>
          <TextInput
            placeholder="Enter Your API Key here"
            type="text"
            onValueChange={setApiKey}
            value={apiKey}
          />
          <span className="text-sm">
            🚫 If you dont have a covalent API Key, click{" "}
            <a
              className="text-blue-700 underline cursor-pointer"
              href="https://www.covalenthq.com/platform/"
              target="_blank"
            >
              here
            </a>
          </span>
        </div>

        <div className="w-full">
          <p className="my-2 text-xl font-bold">
            Select your preferred Chain🔗
          </p>
          <Select value={chain} onValueChange={setChain}>
            {valuesArray.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="w-full">
          <p className="my-2 text-xl font-bold">
            Select your desired events ⚗️
          </p>
          <Select value={event} onValueChange={setEvent}>
            {eventTypes.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-4">
        <Button> Click to Update API KEY/Refresh</Button>
      </div>

      <div className="mt-5">
        <p className="m-8 text-xl font-bold border inline-block p-5">
          👇 SEE CURRENT GAS⛽️ FEES 👇
        </p>
        <Grid numItems={1} numItemsSm={1} numItemsLg={3} className="gap-3">
          <Col>
            <Card>
              <Title>Average Gas Price</Title>
              <Text> 1️⃣ minute</Text>
              <Metric className="mt-4">
                {loading ? "-----" : gasPrice.one}
              </Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title>Average Gas Price</Title>
              <Text>3️⃣ minutes</Text>
              <Metric className="mt-4">
                {loading ? "-----" : gasPrice.three}
              </Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Title>Average Gas Price</Title>
              <Text> 5️⃣ minutes</Text>
              <Metric className="mt-4">
                {loading ? "-----" : gasPrice.five}
              </Metric>
            </Card>
          </Col>
        </Grid>
      </div>

      <div className="mt-5">
        <div className="mb-4">
          <Callout className="mt-4" title="How to get API Key" color="blue">
            If you require an API Key, kindly go to{" "}
            <a
              className="text-blue-700 underline cursor-pointer"
              href="https://www.covalenthq.com/platform/"
              target="_blank"
            >
              https://www.covalenthq.com/platform/
            </a>{" "}
            and register to obtain one.
          </Callout>
        </div>
        <div className="mb-4">
          <Callout
            className="mt-4"
            title="Securing User API Keys"
            color="green"
          >
            We prioritize the security of user API keys, strictly following best
            practices and employing robust security protocols. Our commitment
            includes responsible data management, avoiding unnecessary retention
            of API keys to uphold user trust in our platform.
          </Callout>
        </div>
        <div className="mb-4">
          <Callout className="mt-4" title="About Page" color="rose">
            This webpage was created for the Covalent bounty titled "Build and
            Deploy a Chain-specific Gas Price Dashboard Using GoldRush Kit."
          </Callout>
        </div>
      </div>
    </>
  );
}

export default App;
