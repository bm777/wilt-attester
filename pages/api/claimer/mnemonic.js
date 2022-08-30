import Seed from "mnemonic-seed-js";

const seed = Seed.new();

export default async function handler(req, res) {
  const d = seed.mnemonic
  console.log(d.raw)

  res.status(200).json({ response: d.raw})
}
