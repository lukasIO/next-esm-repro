import { Foo } from "esm-dummy";

export default function Home() {
  console.log(new Foo().working);
  return null;
}
